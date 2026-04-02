import { ImposterGame } from './game-logic.js';

/**
 * Main UI & Interaction Manager
 */
class App {
    constructor() {
        this.game = new ImposterGame();
        this.state = {
            view: 'view-home',
            isOnline: false,
            isHost: false,
            playerCount: 4,
            imposterCount: 1,
            mode: 'Classic',
            clueType: 'Word',
            players: [],
            currentPlayerIndex: 0,
            timer: null,
            timeLeft: 180, // 3 minutes
            roomCode: '',
            isRevealing: false,
            eliminated: [],
            playerName: 'Guest'
        };

        this.socket = null;
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateSettingsUI();
        console.log("🧩 Imposter App Initialized");
    }

    bindEvents() {
        // Navigation
        document.getElementById('btn-play-offline').onclick = () => {
            this.state.isOnline = false;
            this.switchView('view-lobby');
        };

        document.getElementById('btn-play-online').onclick = () => {
            this.state.isOnline = true;
            this.setupSocket();
            this.switchView('view-online-setup');
        };

        document.getElementById('btn-create-room').onclick = () => {
             this.state.isHost = true;
             this.socket.emit('create_room', { playerName: this.state.playerName });
        };

        document.getElementById('btn-join-room').onclick = () => {
             const code = document.getElementById('join-room-code').value.toUpperCase();
             if (code.length < 4) return this.showToast('Invalid code.');
             this.state.isHost = false;
             this.socket.emit('join_room', { code, playerName: this.state.playerName });
        };

        document.querySelectorAll('.btn-back').forEach(btn => {
            btn.onclick = () => this.switchView(btn.dataset.target);
        });

        // Settings Toggles
        document.querySelectorAll('.btn-count').forEach(btn => {
            btn.onclick = () => {
                const setting = btn.dataset.setting;
                const delta = parseInt(btn.dataset.delta);
                if (setting === 'players') {
                    this.state.playerCount = Math.max(3, Math.min(20, this.state.playerCount + delta));
                    // Auto-adjust recommended imps
                    this.state.imposterCount = ImposterGame.getRecommendedImposters(this.state.playerCount);
                } else if (setting === 'imposters') {
                    this.state.imposterCount = Math.max(1, Math.min(Math.floor(this.state.playerCount / 2), this.state.imposterCount + delta));
                }
                this.updateSettingsUI();
            };
        });

        document.querySelectorAll('#clue-type-selector .toggle-btn').forEach(btn => {
            btn.onclick = () => {
                this.state.clueType = btn.dataset.value;
                this.updateSettingsUI();
            };
        });

        document.querySelectorAll('#game-mode-selector .toggle-btn').forEach(btn => {
            btn.onclick = () => {
                this.state.mode = btn.dataset.value;
                this.updateSettingsUI();
            };
        });

        // Start Game
        document.getElementById('btn-start-game').onclick = () => this.startMatch();

        // Reveal Card
        const revealCard = document.getElementById('reveal-card');
        revealCard.onclick = () => this.handleRevealClick();

        // Next Player / Done Reveal
        document.getElementById('btn-next-player').onclick = (e) => {
            e.stopPropagation(); // Don't trigger card click
            this.handlePlayerDone();
        };

        // UI Game Buttons
        document.getElementById('btn-voting').onclick = () => this.showVoting();
        document.getElementById('btn-skip-vote').onclick = () => this.endGame('Nobody was eliminated. Match Tie!');
        document.getElementById('btn-rematch').onclick = () => {
             if (!this.state.isOnline) {
                 this.startMatch();
             } else {
                 this.switchView('view-online-setup');
             }
        };
        document.getElementById('btn-exit').onclick = () => location.reload();
    }

    switchView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
        this.state.view = viewId;
        window.scrollTo(0,0);
    }

    updateSettingsUI() {
        document.getElementById('player-count-display').innerText = this.state.playerCount;
        document.getElementById('imposter-count-display').innerText = this.state.imposterCount;
        
        // Online: Show Room Code
        const roomBox = document.getElementById('room-code-display');
        if (this.state.isOnline && this.state.roomCode) {
            roomBox.classList.remove('hidden');
            document.getElementById('room-code-value').innerText = this.state.roomCode;
        } else {
            roomBox.classList.add('hidden');
        }

        // Active states for toggles
        document.querySelectorAll('#clue-type-selector .toggle-btn').forEach(b => {
             b.classList.toggle('active', b.dataset.value === this.state.clueType);
        });
        document.querySelectorAll('#game-mode-selector .toggle-btn').forEach(b => {
             b.classList.toggle('active', b.dataset.value === this.state.mode);
        });

        // Mode description
        const modes = {
            Classic: "Imposters get no clue at all.",
            Twist: "Imposters get a similar but misleading clue.",
            Chaos: "Everyone gets a clue, but some are sabotaged!"
        };
        document.getElementById('mode-desc').innerHTML = `<strong>${this.state.mode}:</strong> ${modes[this.state.mode]}`;
    }

    setupSocket() {
        if (this.socket) return;
        try {
            this.socket = io();
            
            this.socket.on('room_created', (data) => {
                this.state.roomCode = data.code;
                this.state.players = data.players;
                this.showToast(`Room Created: ${data.code}`);
                this.switchView('view-lobby');
            });

            this.socket.on('player_joined', (data) => {
                this.state.players = data.players;
                this.state.playerCount = data.players.length;
                this.updateSettingsUI();
                this.showToast('New player joined!');
            });

            this.socket.on('game_started', (data) => {
                const match = data.matchDetails;
                // Everyone except host needs to get their specific player data
                // In a real game, each player would only get THEIR role from the server
                // For this simple demo, everyone gets the whole match but finds THEIR ID
                const myId = this.socket.id;
                const myEntry = match.players.find(p=>p.socketId === myId) || match.players[0];
                
                this.state.players = match.players;
                this.state.currentMatchDetail = match;
                this.state.currentPlayerIndex = match.players.indexOf(myEntry);
                this.initOnlineReveal();
            });

            this.socket.on('error_msg', (msg) => this.showToast(msg));
        } catch(e) {
            console.error("Socket error", e);
            this.showToast("Server unreachable.");
        }
    }

    async startMatch() {
        const validation = ImposterGame.validateSetup(this.state.playerCount, this.state.imposterCount);
        if (!validation.valid) {
            this.showToast(validation.error);
            return;
        }

        const match = await this.game.setupRound(
            this.state.clueType,
            this.state.mode,
            this.state.playerCount,
            this.state.imposterCount
        );

        // Attach socket IDs to player entries if online
        if (this.state.isOnline) {
             match.players.forEach((p, idx) => {
                 p.socketId = this.state.players[idx].id;
                 p.name = this.state.players[idx].name;
             });
             this.socket.emit('start_game', { code: this.state.roomCode, matchDetails: match });
        } else {
            this.state.players = match.players;
            this.state.currentPlayerIndex = 0;
            this.state.eliminated = [];
            this.state.currentMatchDetail = match;
            this.initRevealSequence();
        }
    }

    initOnlineReveal() {
        this.state.isRevealing = false;
        // In online mode, we skip pass-the-phone and just show the player THEIR clue
        this.switchView('view-reveal');
        document.getElementById('current-player-name').innerText = `You are Player ${this.state.currentPlayerIndex+1}`;
        this.updateRevealUI();
    }

    // --- OFFLINE FLOW ---

    initRevealSequence() {
        this.state.isRevealing = false;
        this.updateRevealUI();
        this.switchView('view-reveal');
    }

    updateRevealUI() {
        const playerNum = this.state.currentPlayerIndex + 1;
        document.getElementById('current-player-name').innerText = `Player ${playerNum}`;
        
        // Reset card state
        document.querySelector('.card-front').classList.add('hidden');
        document.querySelector('.card-back').classList.remove('hidden');
        
        const p = this.state.players[this.state.currentPlayerIndex];
        const isImposter = p.role === 'Imposter';
        
        document.getElementById('reveal-role').innerText = isImposter ? 'Imposter' : 'Normal';
        document.getElementById('reveal-role').style.background = isImposter ? 'var(--accent)' : 'var(--primary)';
        
        // Custom message for imposter
        if (isImposter) {
            document.getElementById('reveal-clue').innerHTML = `<div style="font-size: 0.8em; margin-bottom: 10px; color: var(--accent);">(nee dhn da imposter play the game safe)</div> ${p.clue}`;
        } else {
            document.getElementById('reveal-clue').innerText = p.clue;
        }
    }

    handleRevealClick() {
        if (this.state.isRevealing) return;
        this.state.isRevealing = true;
        
        document.querySelector('.card-back').classList.add('hidden');
        document.querySelector('.card-front').classList.remove('hidden');
    }

    handlePlayerDone() {
        this.state.isRevealing = false;
        this.state.currentPlayerIndex++;

        if (this.state.currentPlayerIndex < this.state.players.length) {
            this.updateRevealUI();
        } else {
            this.startGameplay();
        }
    }

    startGameplay() {
        this.switchView('view-game');
        document.getElementById('game-category').innerText = `Category: ${this.state.currentMatchDetail.category}`;
        this.startTimer(180);
        this.renderPlayerGrid();
    }

    startTimer(seconds) {
        if (this.state.timer) clearInterval(this.state.timer);
        this.state.timeLeft = seconds;
        
        const updateUI = () => {
            const m = Math.floor(this.state.timeLeft / 60);
            const s = this.state.timeLeft % 60;
            document.getElementById('game-timer').innerText = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        };

        updateUI();
        this.state.timer = setInterval(() => {
            this.state.timeLeft--;
            updateUI();
            if (this.state.timeLeft <= 0) {
                clearInterval(this.state.timer);
                this.showToast("Time's up! Vote now.");
            }
        }, 1000);
    }

    renderPlayerGrid() {
        const grid = document.getElementById('player-status-grid');
        grid.innerHTML = '';
        this.state.players.forEach((p, idx) => {
            const card = document.createElement('div');
            card.className = 'player-card';
            card.innerText = `Player ${idx + 1}`;
            grid.appendChild(card);
        });
    }

    showVoting() {
        if (this.state.timer) clearInterval(this.state.timer);
        this.switchView('view-voting');
        
        const grid = document.getElementById('vote-grid');
        grid.innerHTML = '';
        this.state.players.forEach((p, idx) => {
            const btn = document.createElement('div');
            btn.className = 'player-card voting';
            btn.innerText = `Vote Player ${idx + 1}`;
            btn.onclick = () => this.handleVote(idx);
            grid.appendChild(btn);
        });
    }

    handleVote(targetIdx) {
        const victim = this.state.players[targetIdx];
        if (victim.role === 'Imposter') {
            this.endGame(`You caught the imposter!`, 'Normal wins! 🏆');
        } else {
            this.endGame(`Player ${targetIdx+1} was innocent.`, 'Imposter wins! 😈');
        }
    }

    endGame(message, title) {
        if (this.state.timer) clearInterval(this.state.timer);
        this.switchView('view-results');
        
        document.getElementById('win-title').innerText = title;
        document.getElementById('res-normal-clue').innerText = this.state.currentMatchDetail.players.find(p=>p.role==='Normal').clue;
        document.getElementById('res-imposter-clue').innerText = this.game.currentClue.imposter || '??';
        
        const list = document.getElementById('imposter-reveal-list');
        list.innerHTML = '';
        this.state.players.filter(p=>p.role==='Imposter').forEach(p => {
             const card = document.createElement('div');
             card.className = 'player-card';
             card.style.borderColor = 'var(--accent)';
             card.innerText = `Player ${p.id + 1}`;
             list.appendChild(card);
        });

        document.getElementById('win-emoji').innerText = title.includes('Normal') ? '🎉' : '💀';
    }

    showToast(msg) {
        const t = document.getElementById('toast');
        t.innerText = msg;
        t.classList.remove('hidden');
        setTimeout(() => t.classList.add('hidden'), 3000);
    }
}

// Global instance
window.app = new App();
