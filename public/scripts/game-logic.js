import { WORD_CATEGORIES, IMAGE_CATEGORIES } from './data.js';

/**
 * Imposter Game Logic
 * Core engine to handle roles, clues, and rules.
 */
export class ImposterGame {
  constructor() {
    this.players = []; // List of { id, name, role, clue }
    this.imposterCount = 1;
    this.mode = 'Classic'; // Classic, Twist, Chaos
    this.clueType = 'Word'; // Word, Image, Mixed
    this.currentClue = null;
    this.history = []; // Recent clue pairs to avoid repeats
  }

  /**
   * Validate if the setup is possible.
   * @param {number} totalPlayers
   * @param {number} imposters
   */
  static validateSetup(totalPlayers, imposters) {
    if (totalPlayers < 3) return { valid: false, error: "Minimum 3 players required." };
    if (imposters < 1) return { valid: false, error: "At least 1 imposter needed." };
    if (imposters >= totalPlayers / 2) return { valid: false, error: "Too many imposters for a fair game." };
    return { valid: true };
  }

  /**
   * Get recommended imposter count for player count.
   * @param {number} totalPlayers
   */
  static getRecommendedImposters(totalPlayers) {
    if (totalPlayers >= 12) return 3;
    if (totalPlayers >= 7) return 2;
    return 1;
  }

  /**
   * Choose a random clue and assign roles based on game mode.
   * @param {string} type - Word, Image, or Mixed
   * @param {string} mode - Classic, Twist, Chaos
   * @param {number} playerCount - Total number of players
   * @param {number} imposters - Number of imposters
   * @param {string[]} playerNames - Names of the players
   */
  async setupRound(type, mode, playerCount, imposters, playerNames = []) {
    this.imposterCount = imposters;
    this.mode = mode;
    this.playerNames = playerNames;
    
    if (mode === 'Chaos') {
        this.clueType = Math.random() > 0.5 ? 'Word' : 'Image';
    } else {
        this.clueType = (type === 'Mixed') ? (Math.random() > 0.5 ? 'Word' : 'Image') : type;
    }

    // 1. Pick a clue
    const source = (this.clueType === 'Image') ? IMAGE_CATEGORIES : WORD_CATEGORIES;
    const category = source[Math.floor(Math.random() * source.length)];
    let cluePair;
    
    // Anti-repeat: Try up to 10 times to get a fresh clue
    for (let i = 0; i < 10; i++) {
        cluePair = category.clues[Math.floor(Math.random() * category.clues.length)];
        if (!this.history.includes(cluePair.normal)) break;
    }
    
    this.currentClue = cluePair;
    this.addHistory(cluePair.normal);

    // 2. Distribute Roles
    // Check if anyone has the name "Imposter" to force the role
    const roles = Array(playerCount).fill('Normal');
    let forcedImposters = [];
    if (this.playerNames) {
        this.playerNames.forEach((name, idx) => {
            if (name.toLowerCase().includes('imposter') || name.includes('nee dhn da imposter')) {
                forcedImposters.push(idx);
            }
        });
    }

    // Shuffle only non-forced indices
    const availableIndices = [...Array(playerCount).keys()].filter(i => !forcedImposters.includes(i));
    this.shuffle(availableIndices);

    // Assign forced imposters first
    forcedImposters.slice(0, imposters).forEach(idx => {
        roles[idx] = 'Imposter';
    });

    // Fill remaining imposters from available pool
    const remainingImps = Math.max(0, imposters - forcedImposters.length);
    for (let i = 0; i < remainingImps; i++) {
        roles[availableIndices[i]] = 'Imposter';
    }

    // 3. Assign Clues based on Mode
    const gameStatePlayers = roles.map((role, idx) => {
      let clue = "";
      if (role === 'Normal') {
        clue = cluePair.normal;
      } else {
        // Imposter behavior dependent on mode
        if (mode === 'Classic') {
          clue = "??"; // No clue
        } else if (mode === 'Twist') {
          clue = cluePair.imposter; // Misleading clue
        } else if (mode === 'Chaos') {
            // Chaos mode might randomize clue types or mix them
            clue = (Math.random() > 0.5) ? cluePair.imposter : "💀"; 
        }
      }
      return { id: idx, role, clue };
    });

    return {
      players: gameStatePlayers,
      clueType: this.clueType,
      mode: this.mode,
      category: category.name
    };
  }

  addHistory(clue) {
    this.history.push(clue);
    if (this.history.length > 10) this.history.shift(); // Keep last 10
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
