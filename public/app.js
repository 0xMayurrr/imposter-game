(function () {
  const STORE_KEY = "imposter.app";
  const HISTORY_KEY = "imposter.clues";
  const MIN_PLAYERS = 2;
  const MAX_PLAYERS = 20;

  const clues = [
    { category: "Animals", word: ["Tiger", "Striped jungle hunter"], altWord: ["Leopard", "Spotted jungle hunter"], image: ["🐯", "Tiger"], altImage: ["🐆", "Leopard"] },
    { category: "Food", word: ["Burger", "Stacked street meal"], altWord: ["Sandwich", "Layered handheld meal"], image: ["🍔", "Burger"], altImage: ["🥪", "Sandwich"] },
    { category: "Places", word: ["Beach", "Sunny shore with waves"], altWord: ["Island", "Land surrounded by sea"], image: ["🏖️", "Beach"], altImage: ["🏝️", "Island"] },
    { category: "Transport", word: ["Train", "Fast rail journey"], altWord: ["Metro", "Urban rail system"], image: ["🚆", "Train"], altImage: ["🚇", "Metro"] },
    { category: "Music", word: ["Guitar", "Strings and rhythm"], altWord: ["Violin", "Strings and bow"], image: ["🎸", "Guitar"], altImage: ["🎻", "Violin"] },
    { category: "Sports", word: ["Football", "Pitch and goals"], altWord: ["Rugby", "Pitch and tackles"], image: ["⚽", "Football"], altImage: ["🏉", "Rugby"] },
    { category: "Nature", word: ["Volcano", "Mountain with fire"], altWord: ["Mountain", "Massive rocky peak"], image: ["🌋", "Volcano"], altImage: ["⛰️", "Mountain"] },
    { category: "Weather", word: ["Thunderstorm", "Rain with lightning"], altWord: ["Tornado", "Spinning storm funnel"], image: ["⛈️", "Thunderstorm"], altImage: ["🌪️", "Tornado"] },
    { category: "Technology", word: ["Laptop", "Portable computer"], altWord: ["Tablet", "Touchscreen device"], image: ["💻", "Laptop"], altImage: ["📱", "Tablet"] },
    { category: "Cinema", word: ["Superhero", "Masked savior"], altWord: ["Villain", "Big-screen threat"], image: ["🦸", "Superhero"], altImage: ["🦹", "Villain"] },
    { category: "Space", word: ["Planet", "World in orbit"], altWord: ["Moon", "Orbiting satellite"], image: ["🪐", "Planet"], altImage: ["🌕", "Moon"] },
    { category: "Jobs", word: ["Doctor", "Treats illness"], altWord: ["Nurse", "Supports treatment"], image: ["🩺", "Doctor"], altImage: ["💉", "Nurse"] },
    { category: "Kitchen", word: ["Oven", "Bakes hot food"], altWord: ["Microwave", "Heats food quickly"], image: ["🍳", "Cooking"], altImage: ["🍲", "Soup"] },
    { category: "School", word: ["Pencil", "Used for writing"], altWord: ["Eraser", "Removes pencil marks"], image: ["✏️", "Pencil"], altImage: ["🧽", "Eraser"] },
    { category: "History", word: ["Pyramid", "Ancient tomb"], altWord: ["Castle", "Fortified home"], image: ["📐", "Triangle"], altImage: ["🏰", "Castle"] },
    { category: "Fruit", word: ["Apple", "Crunchy red fruit"], altWord: ["Pear", "Sweet green fruit"], image: ["🍎", "Apple"], altImage: ["🍐", "Pear"] },
    { category: "Drink", word: ["Coffee", "Morning energy"], altWord: ["Tea", "Calming warm drink"], image: ["☕", "Coffee"], altImage: ["🍵", "Tea"] },
    { category: "Clothing", word: ["Jacket", "Outdoor warmth"], altWord: ["Hoodie", "Casual comfort"], image: ["🧥", "Coat"], altImage: ["👕", "Shirt"] },
    { category: "Time", word: ["Sundial", "Shadow clock"], altWord: ["Watch", "Wrist-worn clock"], image: ["☀️", "Sun"], altImage: ["⌚", "Watch"] },
    { category: "Movies", word: ["Inception", "Dream heist"], altWord: ["Interstellar", "Space travel"], image: ["🎬", "Film"], altImage: ["🚀", "Space"] },
    { category: "Cities", word: ["Paris", "City of lights"], altWord: ["London", "Big Ben city"], image: ["🗼", "Tower"], altImage: ["🎡", "Wheel"] },
    { category: "Hobbies", word: ["Painting", "Art with brushes"], altWord: ["Cooking", "Art with food"], image: ["🎨", "Palette"], altImage: ["🍳", "Pan"] }
  ];

  const state = loadState();
  const app = document.getElementById("app");
  const resetButton = document.getElementById("resetAppButton");
  let roomChannel = null;
  let hostPulse = null;

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  resetButton.addEventListener("click", resetApp);
  app.addEventListener("click", onClick);
  app.addEventListener("input", onInput);
  app.addEventListener("change", onChange);
  window.addEventListener("beforeunload", () => {
    if (state.online.room && state.online.meId) {
      sendRoom({ type: "leave", playerId: state.online.meId });
    }
    closeRoom();
  });

  restoreRoom();
  setInterval(() => {
    if (state.screen === "offline-discussion" || state.screen === "online-discussion") {
      render();
    }
  }, 1000);

  render();

  function loadState() {
    const saved = parse(localStorage.getItem(STORE_KEY)) || {};
    return {
      screen: saved.screen || "home",
      toast: saved.toast || "",
      setup: {
        players: saved.setup?.players || ["Player 1", "Player 2", "Player 3", "Player 4"],
        imposterCount: saved.setup?.imposterCount || 1,
        clueType: saved.setup?.clueType || "mixed",
        roundMode: saved.setup?.roundMode || "classic",
        discussionMinutes: saved.setup?.discussionMinutes || 3,
        forcedImposterIndices: saved.setup?.forcedImposterIndices || []
      },
      offline: saved.offline || null,
      online: {
        meId: saved.online?.meId || "",
        meName: saved.online?.meName || "",
        isHost: saved.online?.isHost || false,
        roomCode: saved.online?.roomCode || "",
        room: saved.online?.room || null,
        draftVote: saved.online?.draftVote || [],
        privateAssignment: saved.online?.privateAssignment || null
      }
    };
  }

  function saveState() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  }

  function resetApp() {
    closeRoom();
    localStorage.removeItem(STORE_KEY);
    localStorage.removeItem(HISTORY_KEY);
    location.reload();
  }

  function render() {
    saveState();
    app.innerHTML = renderToast() + renderScreen();
  }

  function renderToast() {
    return state.toast ? `<section class="panel"><span class="pill">${esc(state.toast)}</span></section>` : "";
  }

  function renderScreen() {
    switch (state.screen) {
      case "home":
        return renderHome();
      case "offline-setup":
        return renderSetup("offline");
      case "offline-reveal":
        return renderOfflineReveal();
      case "offline-discussion":
        return renderDiscussion(state.offline, "offline");
      case "offline-voting":
        return renderOfflineVoting();
      case "offline-results":
        return renderResults(state.offline, "offline");
      case "online-entry":
        return renderOnlineEntry();
      case "online-host-setup":
        return renderSetup("online");
      case "online-lobby":
        return renderOnlineLobby();
      case "online-reveal":
        return renderOnlineReveal();
      case "online-discussion":
        return renderDiscussion(state.online.room?.round, "online");
      case "online-voting":
        return renderOnlineVoting();
      case "online-results":
        return renderResults(state.online.room?.round, "online");
      default:
        state.screen = "home";
        return renderHome();
    }
  }

  function renderHome() {
    const metric = getBalance(state.setup.players.length, state.setup.imposterCount);
    return `
      <section class="panel">
        <div class="grid two">
          <div class="mode-card">
            <h2>Offline pass-and-play</h2>
            <p class="muted">One phone or laptop, private reveal flow, strong local game logic.</p>
            <div class="button-row">
              <button class="primary-button" data-action="go-offline">Start Offline</button>
            </div>
          </div>
          <div class="mode-card">
            <h2>Connected room</h2>
            <p class="muted">Create a room code and sync the match across multiple browsers using the same app.</p>
            <div class="button-row">
              <button class="secondary-button" data-action="go-online">Create or Join Room</button>
            </div>
          </div>
        </div>
      </section>
      <section class="panel">
        <div class="grid two">
          <div>
            <h2>Game rules built in</h2>
            <div class="check-list">
              <div class="check-item">2 to 20 players</div>
              <div class="check-item">Custom imposter count</div>
              <div class="check-item">Word, image, or mixed clues</div>
              <div class="check-item">Classic, Twist, and Chaos rounds</div>
            </div>
          </div>
          <div>
            <h2>Quick balance</h2>
            <div class="grid two">
              <div class="metric">
                <div class="metric-value">${state.setup.players.length}</div>
                <div class="metric-label">Players</div>
              </div>
              <div class="metric">
                <div class="metric-value">${state.setup.imposterCount}</div>
                <div class="metric-label">Imposters</div>
              </div>
            </div>
            <p class="${metric.className}">${esc(metric.summary)}</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderSetup(mode) {
    const metric = getBalance(state.setup.players.length, state.setup.imposterCount);
    const players = state.setup.players.map((name, index) => {
      const isForced = state.setup.forcedImposterIndices?.includes(index);
      return `
        <div class="player-row">
          <input data-player-index="${index}" maxlength="20" value="${esc(name)}" placeholder="Player name" />
          <button class="ghost-button ${isForced ? "active" : ""}" data-action="toggle-force-imposter" data-index="${index}" title="Manually set as Imposter">${isForced ? "😈" : "👤"}</button>
          ${state.setup.players.length > MIN_PLAYERS ? `<button class="ghost-button" data-action="remove-player" data-index="${index}">Remove</button>` : ""}
        </div>
      `;
    }).join("");

    return `
      <section class="panel">
        <div class="grid two">
          <div>
            <h2>${mode === "offline" ? "Offline match setup" : "Host room setup"}</h2>
            <p class="muted">Set names, imposter count, clue type, and round mode. The game still lets you create wild matches, but it warns when the setup gets unfair.</p>
            <div class="grid">
              <div class="field">
                <label>Players (${state.setup.players.length}/${MAX_PLAYERS})</label>
                <div class="grid">${players}</div>
                <div class="button-row">
                  <button class="ghost-button" data-action="add-player" ${state.setup.players.length >= MAX_PLAYERS ? "disabled" : ""}>Add Player</button>
                </div>
              </div>
              <div class="grid two">
                <div class="field">
                  <label for="imposterCount">Imposters</label>
                  <input id="imposterCount" type="number" min="1" max="${Math.max(1, state.setup.players.length - 1)}" value="${state.setup.imposterCount}" />
                </div>
                <div class="field">
                  <label for="discussionMinutes">Discussion minutes</label>
                  <input id="discussionMinutes" type="number" min="1" max="15" value="${state.setup.discussionMinutes}" />
                </div>
              </div>
              <div class="grid two">
                <div class="field">
                  <label for="clueType">Clue type</label>
                  <select id="clueType">
                    <option value="word" ${state.setup.clueType === "word" ? "selected" : ""}>Words only</option>
                    <option value="image" ${state.setup.clueType === "image" ? "selected" : ""}>Images only</option>
                    <option value="mixed" ${state.setup.clueType === "mixed" ? "selected" : ""}>Mixed</option>
                  </select>
                </div>
                <div class="field">
                  <label for="roundMode">Round mode</label>
                  <select id="roundMode">
                    <option value="classic" ${state.setup.roundMode === "classic" ? "selected" : ""}>Classic</option>
                    <option value="twist" ${state.setup.roundMode === "twist" ? "selected" : ""}>Twist</option>
                    <option value="chaos" ${state.setup.roundMode === "chaos" ? "selected" : ""}>Chaos</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Round preview</h2>
            <div class="grid two">
              <div class="metric">
                <div class="metric-value">${state.setup.players.length}</div>
                <div class="metric-label">Total players</div>
              </div>
              <div class="metric">
                <div class="metric-value">${state.setup.imposterCount}</div>
                <div class="metric-label">Votes per player</div>
              </div>
            </div>
            <div class="tag-list">
              <span class="pill">${cap(state.setup.clueType)} clues</span>
              <span class="pill">${cap(state.setup.roundMode)} mode</span>
              <span class="pill">${state.setup.discussionMinutes} minute talk</span>
            </div>
            <p class="${metric.className}">${esc(metric.summary)}</p>
            <p class="small muted">Power voting algorithm: every player can accuse up to the number of imposters. The top suspects are matched against the hidden imposter team.</p>
            <div class="button-row">
              <button class="primary-button" data-action="${mode === "offline" ? "start-offline" : "create-room"}">${mode === "offline" ? "Start Match" : "Create Room"}</button>
              <button class="ghost-button" data-action="go-home">Back</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderOfflineReveal() {
    const round = state.offline;
    if (!round) return "";
    const card = round.assignments[round.revealIndex];
    return `
      <section class="panel">
        <div class="grid two">
          <div>
            <h2>Private reveal</h2>
            <p class="muted">Pass the device to <strong>${esc(card.name)}</strong>. Only this player should look.</p>
            <div class="button-row">
              ${card.revealed ? `<button class="primary-button" data-action="next-reveal">${round.revealIndex === round.assignments.length - 1 ? "Start Discussion" : "Next Player"}</button>` : `<button class="primary-button" data-action="show-role">Reveal Role</button>`}
              <button class="ghost-button" data-action="go-offline">Back to Setup</button>
            </div>
          </div>
          <div>${card.revealed ? assignmentMarkup(card) : `<div class="info-card"><h3>${esc(card.name)}</h3><p class="muted">Press reveal when ready.</p></div>`}</div>
        </div>
      </section>
    `;
  }

  function renderDiscussion(round, mode) {
    if (!round) return "";
    const left = secondsLeft(round.discussionEndsAt);
    return `
      <section class="panel">
        <div class="grid two">
          <div>
            <h2>Discussion time</h2>
            <p class="muted">Talk without saying the clue directly. Every player can later accuse up to <strong>${round.imposterCount}</strong> suspect${round.imposterCount > 1 ? "s" : ""}.</p>
            <div class="timer">${clock(left)}</div>
            <div class="button-row">
              <button class="primary-button" data-action="${mode === "offline" ? "open-offline-voting" : "open-online-voting"}">${left === 0 ? "Open Voting" : "Skip to Voting"}</button>
            </div>
          </div>
          <div>
            <h2>Round info</h2>
            <div class="tag-list">
              <span class="pill">${esc(round.source.category)}</span>
              <span class="pill">${cap(round.mode)}</span>
              <span class="pill">${cap(round.clueType)}</span>
              <span class="pill">${round.players.length} players</span>
            </div>
            <p class="small muted">A good question asks about shape, mood, location, or use without exposing the answer.</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderOfflineVoting() {
    const round = state.offline;
    if (!round) return "";
    const voter = round.players[round.voteIndex];
    const picks = new Set(round.draftVote || []);
    return `
      <section class="panel">
        <div class="grid two">
          <div>
            <h2>Voting</h2>
            <p class="muted"><strong>${esc(voter.name)}</strong> can accuse up to ${round.imposterCount} player${round.imposterCount > 1 ? "s" : ""}.</p>
            <div class="check-list">
              ${round.players.map((player) => voteOption(player, picks, round.imposterCount, "offline")).join("")}
            </div>
            <div class="button-row">
              <button class="primary-button" data-action="submit-offline-vote">Submit Vote</button>
            </div>
          </div>
          <div>
            <div class="metric">
              <div class="metric-value">${round.votes.length}/${round.players.length}</div>
              <div class="metric-label">Votes collected</div>
            </div>
            <p class="small muted">This system works better for multiple imposters because each player can mark several suspects instead of only one.</p>
          </div>
        </div>
      </section>
    `;
  }

  function renderResults(round, mode) {
    if (!round) return "";
    const result = resultFor(round);
    return `
      <section class="panel">
        <div class="winner-card ${result.winner === "imposters" ? "imposter-win" : ""}">
          <p class="eyebrow">${result.winner === "crew" ? "Crew victory" : "Imposters win"}</p>
          <h2>${esc(result.reason)}</h2>
          <p>Imposters: <strong>${esc(result.imposters)}</strong></p>
          <p>Final accused group: <strong>${esc(result.accused || "Nobody")}</strong></p>
        </div>
      </section>
      <section class="panel">
        <div class="grid two">
          <div>
            <h2>Vote board</h2>
            <div class="vote-list">${result.table.map((row) => `<div class="vote-card"><strong>${esc(row.name)}</strong><span>${row.votes} vote${row.votes === 1 ? "" : "s"}</span></div>`).join("")}</div>
          </div>
          <div>
            <h2>Summary</h2>
            <div class="tag-list">
              <span class="pill">${esc(round.source.category)}</span>
              <span class="pill">${cap(round.mode)}</span>
              <span class="pill">${cap(round.clueType)}</span>
            </div>
            <p class="small muted">${esc(result.summary)}</p>
            <div class="button-row">
              <button class="primary-button" data-action="${mode === "offline" ? "go-offline" : "leave-room"}">${mode === "offline" ? "New Match" : "Leave Room"}</button>
              ${mode === "online" && state.online.isHost ? `<button class="secondary-button" data-action="rematch">Same Room Rematch</button>` : ""}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderOnlineEntry() {
    return `
      <section class="panel">
        <div class="grid two">
          <div>
            <h2>Create room</h2>
            <div class="grid">
              <div class="field">
                <label for="hostName">Your name</label>
                <input id="hostName" maxlength="20" value="${esc(state.online.meName || "Host")}" />
              </div>
              <div class="button-row">
                <button class="primary-button" data-action="go-host-setup">Continue</button>
                <button class="ghost-button" data-action="go-home">Back</button>
              </div>
            </div>
          </div>
          <div>
            <h2>Join room</h2>
            <div class="grid">
              <div class="field">
                <label for="joinName">Your name</label>
                <input id="joinName" maxlength="20" placeholder="Player name" />
              </div>
              <div class="field">
                <label for="joinCode">Room code</label>
                <input id="joinCode" maxlength="6" placeholder="ABC123" />
              </div>
              <div class="button-row">
                <button class="secondary-button" data-action="join-room">Join Room</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderOnlineLobby() {
    const room = state.online.room;
    if (!room) return "";
    const metric = getBalance(room.players.length, room.settings.imposterCount);
    return `
      <section class="panel">
        <div class="grid two">
          <div>
            <p class="eyebrow">Room code</p>
            <div class="room-code">${esc(room.code)}</div>
            <p class="muted">Share this code with other players using the same app URL.</p>
            <div class="player-list">
              ${room.players.map((p) => `<div class="player-card"><strong>${esc(p.name)}</strong><span class="small muted">${p.id === room.hostId ? "Host" : "Player"}${p.ready ? " • Ready" : ""}</span></div>`).join("")}
            </div>
          </div>
          <div>
            <h2>Room settings</h2>
            <div class="tag-list">
              <span class="pill">${room.players.length} joined</span>
              <span class="pill">${room.settings.imposterCount} imposters</span>
              <span class="pill">${cap(room.settings.clueType)}</span>
              <span class="pill">${cap(room.settings.roundMode)}</span>
            </div>
            <p class="${metric.className}">${esc(metric.summary)}</p>
            <div class="button-row">
              ${state.online.isHost ? `<button class="primary-button" data-action="start-room" ${room.players.length < MIN_PLAYERS ? "disabled" : ""}>Start Round</button>` : ""}
              <button class="ghost-button" data-action="leave-room">Leave Room</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderOnlineReveal() {
    const room = state.online.room;
    const assignment = state.online.privateAssignment;
    const readyMap = room?.players || [];
    return `
      <section class="panel">
        <div class="grid two">
          <div>
            <h2>Your secret role</h2>
            ${assignment ? assignmentMarkup(assignment) : `<div class="info-card"><h3>Waiting for host</h3><p class="muted">Your private role has not arrived yet.</p></div>`}
            <div class="button-row">
              <button class="primary-button" data-action="ready-reveal">I'm Ready</button>
              ${state.online.isHost && readyMap.every((p) => p.ready) ? `<button class="secondary-button" data-action="start-discussion">Start Discussion</button>` : ""}
            </div>
          </div>
          <div>
            <h2>Player status</h2>
            <div class="player-list">
              ${readyMap.map((p) => `<div class="player-card"><strong>${esc(p.name)}</strong><span class="${p.ready ? "status-good" : "muted"}">${p.ready ? "Ready" : "Reading clue"}</span></div>`).join("")}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderOnlineVoting() {
    const room = state.online.room;
    const round = room?.round;
    if (!round) return "";
    const locked = round.votes.some((vote) => vote.voterId === state.online.meId);
    const picks = new Set(state.online.draftVote || []);
    return `
      <section class="panel">
        <div class="grid two">
          <div>
            <h2>Cast your vote</h2>
            <p class="muted">Pick up to ${round.imposterCount} suspect${round.imposterCount > 1 ? "s" : ""}. Submitted votes are locked.</p>
            <div class="check-list">
              ${round.players.map((player) => voteOption(player, picks, round.imposterCount, "online", locked)).join("")}
            </div>
            <div class="button-row">
              <button class="primary-button" data-action="submit-online-vote" ${locked ? "disabled" : ""}>${locked ? "Vote Submitted" : "Submit Vote"}</button>
            </div>
          </div>
          <div>
            <div class="metric">
              <div class="metric-value">${round.votes.length}/${round.players.length}</div>
              <div class="metric-label">Votes submitted</div>
            </div>
            ${state.online.isHost ? `<button class="secondary-button" data-action="finish-room-votes" ${round.votes.length < round.players.length ? "disabled" : ""}>Show Results</button>` : ""}
          </div>
        </div>
      </section>
    `;
  }

  function assignmentMarkup(card) {
    const roleClass = card.role === "imposter" ? "role-imposter" : "role-crew";
    let clue = `<div class="clue-card"><div class="clue-type">No clue</div><h3>Trust your bluff</h3><p>You are completely in the dark this round.</p></div>`;
    if (card.clue) {
      clue = card.clue.kind === "image"
        ? `<div class="clue-card"><div class="clue-type">Visual clue • ${esc(card.clue.category)}</div><div class="clue-emoji">${esc(card.clue.emoji)}</div><h3>${esc(card.clue.title)}</h3></div>`
        : `<div class="clue-card"><div class="clue-type">Word clue • ${esc(card.clue.category)}</div><h3>${esc(card.clue.title)}</h3><p>${esc(card.clue.subtitle)}</p></div>`;
    }
    const roleMsg = card.role === "imposter" ? `<div style="color: var(--bad); font-size: 0.8em; margin-bottom: 4px;">(nee dhn da imposter play the game safe)</div>` : "";
    return `<div><div class="role-banner ${roleClass}">${card.role === "imposter" ? "Imposter" : "Crew"}</div><h3>${esc(card.name)}</h3>${roleMsg}${clue}</div>`;
  }

  function voteOption(player, picks, limit, mode, locked) {
    const checked = picks.has(player.id);
    const disabled = locked || (picks.size >= limit && !checked);
    return `<label class="check-item"><input type="checkbox" data-vote-mode="${mode}" data-id="${player.id}" ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} /><span>${esc(player.name)}</span></label>`;
  }

  function onClick(event) {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;

    if (action === "go-home") return setScreen("home");
    if (action === "go-offline") return setScreen("offline-setup");
    if (action === "go-online") return setScreen("online-entry");
    if (action === "go-host-setup") {
      state.online.meName = value("hostName", "Host");
      return setScreen("online-host-setup");
    }
    if (action === "add-player") return addPlayer();
    if (action === "remove-player") return removePlayer(Number(button.dataset.index));
    if (action === "start-offline") return startOffline();
    if (action === "show-role") return revealOffline();
    if (action === "next-reveal") return nextReveal();
    if (action === "open-offline-voting") return openOfflineVoting();
    if (action === "submit-offline-vote") return submitOfflineVote();
    if (action === "create-room") return createRoom();
    if (action === "join-room") return joinRoom();
    if (action === "leave-room") return leaveRoom("home");
    if (action === "start-room") return startRoom();
    if (action === "ready-reveal") return readyReveal();
    if (action === "start-discussion") return startDiscussion();
    if (action === "open-online-voting") return openOnlineVoting();
    if (action === "submit-online-vote") return submitOnlineVote();
    if (action === "finish-room-votes") return finishRoomVotes();
    if (action === "toggle-force-imposter") {
        const idx = Number(button.dataset.index);
        const set = new Set(state.setup.forcedImposterIndices || []);
        if (set.has(idx)) {
            set.delete(idx);
        } else {
            if (set.size < state.setup.imposterCount) {
                set.add(idx);
            } else {
                toast("Limit reached. Increase imposter count first.");
                return;
            }
        }
        state.setup.forcedImposterIndices = [...set];
        return render();
    }
  }

  function onInput(event) {
    const input = event.target;
    if (input.dataset.playerIndex !== undefined) {
      state.setup.players[Number(input.dataset.playerIndex)] = input.value.slice(0, 20);
      return saveState();
    }
    if (input.id === "imposterCount") {
      state.setup.imposterCount = clamp(Number(input.value) || 1, 1, Math.max(1, state.setup.players.length - 1));
      return render();
    }
    if (input.id === "discussionMinutes") {
      state.setup.discussionMinutes = clamp(Number(input.value) || 3, 1, 15);
      return saveState();
    }
    if (input.dataset.voteMode === "offline") return toggleDraft(state.offline, input.dataset.id);
    if (input.dataset.voteMode === "online") return toggleOnlineDraft(input.dataset.id);
  }

  function onChange(event) {
    if (event.target.id === "clueType") {
      state.setup.clueType = event.target.value;
      return render();
    }
    if (event.target.id === "roundMode") {
      state.setup.roundMode = event.target.value;
      return render();
    }
  }

  function setScreen(screen) {
    state.toast = "";
    state.screen = screen;
    render();
  }

  function addPlayer() {
    if (state.setup.players.length >= MAX_PLAYERS) return;
    state.setup.players.push(`Player ${state.setup.players.length + 1}`);
    render();
  }

  function removePlayer(index) {
    if (state.setup.players.length <= MIN_PLAYERS) return;
    state.setup.players.splice(index, 1);
    state.setup.imposterCount = Math.min(state.setup.imposterCount, state.setup.players.length - 1);
    render();
  }

  function startOffline() {
    const names = validateNames(state.setup.players);
    if (!names.ok) return toast(names.message);
    state.offline = buildRound(names.value, state.setup);
    state.offline.revealIndex = 0;
    state.offline.voteIndex = 0;
    state.offline.draftVote = [];
    state.screen = "offline-reveal";
    state.toast = "";
    render();
  }

  function revealOffline() {
    state.offline.assignments[state.offline.revealIndex].revealed = true;
    render();
  }

  function nextReveal() {
    if (state.offline.revealIndex === state.offline.assignments.length - 1) {
      state.offline.discussionEndsAt = Date.now() + state.setup.discussionMinutes * 60000;
      return setScreen("offline-discussion");
    }
    state.offline.revealIndex += 1;
    render();
  }

  function openOfflineVoting() {
    state.offline.voteIndex = 0;
    state.offline.draftVote = [];
    setScreen("offline-voting");
  }

  function submitOfflineVote() {
    const voter = state.offline.players[state.offline.voteIndex];
    state.offline.votes.push({ voterId: voter.id, targets: [...new Set(state.offline.draftVote)].slice(0, state.offline.imposterCount) });
    if (state.offline.voteIndex === state.offline.players.length - 1) {
      return setScreen("offline-results");
    }
    state.offline.voteIndex += 1;
    state.offline.draftVote = [];
    render();
  }

  function createRoom() {
    const names = validateNames(state.setup.players);
    if (!names.ok) return toast(names.message);
    state.online.meId = id("player");
    state.online.meName = (state.online.meName || "Host").trim() || "Host";
    state.online.isHost = true;
    state.online.roomCode = roomCode();
    state.online.room = {
      code: state.online.roomCode,
      hostId: state.online.meId,
      stage: "lobby",
      settings: {
        imposterCount: state.setup.imposterCount,
        clueType: state.setup.clueType,
        roundMode: state.setup.roundMode,
        discussionMinutes: state.setup.discussionMinutes
      },
      players: [{ id: state.online.meId, name: state.online.meName, ready: false }],
      round: null
    };
    openRoom(state.online.roomCode);
    broadcastSnapshot();
    setScreen("online-lobby");
  }

  function joinRoom() {
    const meName = value("joinName", "Player");
    const code = value("joinCode", "").toUpperCase();
    if (!code) return toast("Enter a room code first.");
    state.online.meId = id("player");
    state.online.meName = meName;
    state.online.isHost = false;
    state.online.roomCode = code;
    state.online.room = {
      code,
      hostId: "",
      stage: "lobby",
      settings: { imposterCount: 1, clueType: "mixed", roundMode: "classic", discussionMinutes: 3 },
      players: [],
      round: null
    };
    openRoom(code);
    sendRoom({ type: "join", player: { id: state.online.meId, name: meName, ready: false } });
    state.toast = "Join request sent. Wait for the host.";
    state.screen = "online-lobby";
    render();
  }

  function leaveRoom(nextScreen) {
    sendRoom({ type: "leave", playerId: state.online.meId });
    closeRoom();
    state.online = { meId: "", meName: "", isHost: false, roomCode: "", room: null, draftVote: [], privateAssignment: null };
    setScreen(nextScreen);
  }

  function startRoom() {
    if (!state.online.isHost || !state.online.room) return;
    if (state.online.room.players.length < MIN_PLAYERS) return toast("Need at least 2 players.");
    const round = buildRound(state.online.room.players.map((p) => p.name), state.online.room.settings);
    round.players = state.online.room.players.map((p) => ({ id: p.id, name: p.name }));
    round.assignments = round.assignments.map((card, index) => ({ ...card, id: round.players[index].id }));
    state.online.room.round = round;
    state.online.room.stage = "reveal";
    state.online.room.players = state.online.room.players.map((p) => ({ ...p, ready: false }));
    state.online.draftVote = [];
    state.online.privateAssignment = round.assignments.find((card) => card.id === state.online.meId) || null;
    broadcastSnapshot();
    round.assignments.forEach((assignment) => sendRoom({ type: "assignment", targetId: assignment.id, assignment }));
    setScreen("online-reveal");
  }

  function readyReveal() {
    if (state.online.isHost) {
      markReady(state.online.meId, true);
      broadcastSnapshot();
      return render();
    }
    sendRoom({ type: "ready", playerId: state.online.meId, ready: true });
  }

  function startDiscussion() {
    if (!state.online.isHost || !state.online.room?.round) return;
    state.online.room.stage = "discussion";
    state.online.room.round.discussionEndsAt = Date.now() + state.online.room.settings.discussionMinutes * 60000;
    broadcastSnapshot();
    setScreen("online-discussion");
  }

  function openOnlineVoting() {
    if (state.online.isHost) {
      state.online.room.stage = "voting";
      broadcastSnapshot();
    }
    state.online.draftVote = [];
    setScreen("online-voting");
  }

  function submitOnlineVote() {
    const picks = [...new Set(state.online.draftVote)].slice(0, state.online.room.round.imposterCount);
    if (state.online.isHost) {
      upsertVote(state.online.meId, picks);
      broadcastSnapshot();
      return render();
    }
    sendRoom({ type: "vote", voterId: state.online.meId, targets: picks });
  }

  function finishRoomVotes() {
    if (!state.online.isHost) return;
    state.online.room.stage = "results";
    broadcastSnapshot();
    setScreen("online-results");
  }

  function toggleDraft(round, idValue) {
    const set = new Set(round.draftVote || []);
    if (set.has(idValue)) set.delete(idValue);
    else if (set.size < round.imposterCount) set.add(idValue);
    round.draftVote = [...set];
    render();
  }

  function toggleOnlineDraft(idValue) {
    const round = state.online.room?.round;
    if (!round || round.votes.some((vote) => vote.voterId === state.online.meId)) return;
    const set = new Set(state.online.draftVote || []);
    if (set.has(idValue)) set.delete(idValue);
    else if (set.size < round.imposterCount) set.add(idValue);
    state.online.draftVote = [...set];
    render();
  }

  function buildRound(names, settings) {
    const players = names.map((name, index) => ({ id: `p-${index + 1}`, name }));
    const source = pickClue();
    
    // Manual selections from UI
    let manualIndices = (state.setup.forcedImposterIndices || []).map(idx => `p-${idx + 1}`);
    
    // Cheat names from text inputs
    let cheatIndices = players.filter(p => 
        (p.name.toLowerCase().includes("imposter") || p.name.includes("nee dhn da imposter")) && !manualIndices.includes(p.id)
    ).map(p => p.id);
    
    let forceCombined = [...manualIndices, ...cheatIndices];
    
    // Fill with random players if not enough forced
    const pool = shuffle(players.map(p => p.id).filter(id => !forceCombined.includes(id)));
    const finalImposters = [...forceCombined.slice(0, settings.imposterCount)];
    while (finalImposters.length < settings.imposterCount && pool.length > 0) {
        finalImposters.push(pool.shift());
    }
    
    const imposterSet = new Set(finalImposters);
    return {
      players,
      assignments: players.map((player) => ({
        id: player.id,
        name: player.name,
        role: imposterSet.has(player.id) ? "imposter" : "crew",
        clue: makeClue(imposterSet.has(player.id) ? "imposter" : "crew", source, settings.clueType, settings.roundMode),
        revealed: false
      })),
      votes: [],
      source,
      imposterCount: settings.imposterCount,
      clueType: settings.clueType,
      mode: settings.roundMode,
      discussionEndsAt: null
    };
  }

  function pickClue() {
    const history = parse(localStorage.getItem(HISTORY_KEY)) || [];
    const recent = history.slice(-4);
    const pool = clues.filter((item) => !recent.includes(item.category));
    const sourcePool = pool.length ? pool : clues;
    const clue = sourcePool[Math.floor(Math.random() * sourcePool.length)];
    localStorage.setItem(HISTORY_KEY, JSON.stringify([...history, clue.category].slice(-8)));
    return clue;
  }

  function makeClue(role, source, clueType, mode) {
    if (role === "imposter" && mode === "classic") return null;
    const kind = clueType === "mixed"
      ? mode === "chaos" && role === "imposter" ? "image" : Math.random() > 0.5 ? "word" : "image"
      : clueType;
    if (kind === "image") {
      const item = role === "imposter" ? source.altImage : source.image;
      return { kind: "image", category: source.category, emoji: item[0], title: item[1] };
    }
    const item = role === "imposter" ? source.altWord : source.word;
    return { kind: "word", category: source.category, title: item[0], subtitle: item[1] };
  }

  function resultFor(round) {
    const counts = new Map(round.players.map((p) => [p.id, 0]));
    round.votes.forEach((vote) => vote.targets.forEach((idValue) => counts.set(idValue, (counts.get(idValue) || 0) + 1)));
    const table = round.players
      .map((p) => ({ id: p.id, name: p.name, votes: counts.get(p.id) || 0 }))
      .sort((a, b) => b.votes - a.votes || a.name.localeCompare(b.name));
    const accused = table.slice(0, round.imposterCount);
    const imposters = round.assignments.filter((card) => card.role === "imposter");
    const win = imposters.every((card) => accused.some((item) => item.id === card.id)) && accused.length === imposters.length;
    return {
      winner: win ? "crew" : "imposters",
      reason: win ? "The final accused group matched every hidden imposter." : "At least one imposter escaped the final accused group.",
      imposters: imposters.map((p) => p.name).join(", "),
      accused: accused.map((p) => p.name).join(", "),
      table,
      summary: `Crew clue came from ${round.source.category}. Crew saw ${round.source.word[0]} or ${round.source.image[1]}; imposters received ${round.source.altWord[0]} or ${round.source.altImage[1]} depending on the round type.`
    };
  }

  function getBalance(players, imposters) {
    const recommended = players <= 4 ? 1 : players <= 8 ? 2 : players <= 12 ? 3 : players <= 16 ? 4 : 5;
    if (imposters > recommended + 1) return { className: "status-bad", summary: "Very chaotic setup. Imposters will have a strong edge." };
    if (imposters > recommended) return { className: "status-warn", summary: "Aggressive setup. The game still works, but the crew will struggle." };
    return { className: "status-good", summary: "Balanced setup. Both sides should have a fair chance." };
  }

  function validateNames(names) {
    const list = names.map((name, index) => (name || `Player ${index + 1}`).trim()).filter(Boolean);
    if (list.length < MIN_PLAYERS || list.length > MAX_PLAYERS) return { ok: false, message: `Use ${MIN_PLAYERS} to ${MAX_PLAYERS} players.` };
    if (new Set(list).size !== list.length) return { ok: false, message: "Player names must be unique." };
    if (state.setup.imposterCount < 1 || state.setup.imposterCount >= list.length) return { ok: false, message: "Imposter count must be at least 1 and less than total players." };
    return { ok: true, value: list };
  }

  function openRoom(code) {
    closeRoom();
    roomChannel = new BroadcastChannel(`imposter-${code}`);
    roomChannel.onmessage = onRoomMessage;
    hostPulse = setInterval(() => {
      if (state.online.isHost && state.online.room) broadcastSnapshot();
    }, 4000);
  }

  function restoreRoom() {
    if (state.online.roomCode) openRoom(state.online.roomCode);
  }

  function closeRoom() {
    if (hostPulse) clearInterval(hostPulse);
    if (roomChannel) roomChannel.close();
    hostPulse = null;
    roomChannel = null;
  }

  function sendRoom(message) {
    if (roomChannel) roomChannel.postMessage({ ...message, senderId: state.online.meId });
  }

  function broadcastSnapshot() {
    sendRoom({ type: "snapshot", room: snapshotRoom(state.online.room) });
  }

  function snapshotRoom(room) {
    if (!room) return null;
    if (!room.round) return room;
    if (room.stage === "results") return room;
    return {
      ...room,
      round: {
        ...room.round,
        assignments: [],
        source: { category: room.round.source.category }
      }
    };
  }

  function onRoomMessage(event) {
    const message = event.data;
    if (!message || message.senderId === state.online.meId) return;
    if (state.online.isHost) return onHostMessage(message);
    return onGuestMessage(message);
  }

  function onHostMessage(message) {
    const room = state.online.room;
    if (!room) return;
    if (message.type === "join") {
      if (!room.players.some((player) => player.id === message.player.id || player.name === message.player.name) && room.players.length < MAX_PLAYERS) {
        room.players.push(message.player);
      }
      broadcastSnapshot();
      return render();
    }
    if (message.type === "leave") {
      room.players = room.players.filter((player) => player.id !== message.playerId);
      if (room.round) {
        room.round.players = room.round.players.filter((player) => player.id !== message.playerId);
        room.round.assignments = room.round.assignments.filter((card) => card.id !== message.playerId);
        room.round.votes = room.round.votes.filter((vote) => vote.voterId !== message.playerId);
      }
      broadcastSnapshot();
      return render();
    }
    if (message.type === "ready") {
      markReady(message.playerId, message.ready);
      broadcastSnapshot();
      return render();
    }
    if (message.type === "vote") {
      upsertVote(message.voterId, message.targets);
      if (room.round.votes.length === room.players.length) room.stage = "results";
      broadcastSnapshot();
      return render();
    }
  }

  function onGuestMessage(message) {
    if (message.type === "snapshot") {
      const privateAssignment = state.online.privateAssignment;
      state.online.room = message.room;
      state.online.privateAssignment = privateAssignment;
      if (message.room.stage === "lobby") state.screen = "online-lobby";
      if (message.room.stage === "reveal") state.screen = "online-reveal";
      if (message.room.stage === "discussion") state.screen = "online-discussion";
      if (message.room.stage === "voting") state.screen = "online-voting";
      if (message.room.stage === "results") state.screen = "online-results";
      return render();
    }
    if (message.type === "assignment" && message.targetId === state.online.meId && state.online.room?.round) {
      state.online.privateAssignment = message.assignment;
      return render();
    }
  }

  function markReady(playerId, ready) {
    state.online.room.players = state.online.room.players.map((player) => player.id === playerId ? { ...player, ready } : player);
  }

  function upsertVote(voterId, targets) {
    const round = state.online.room.round;
    const clean = [...new Set(targets)].slice(0, round.imposterCount);
    const index = round.votes.findIndex((vote) => vote.voterId === voterId);
    if (index >= 0) round.votes[index] = { voterId, targets: clean };
    else round.votes.push({ voterId, targets: clean });
  }

  function toast(message) {
    state.toast = message;
    render();
  }

  function value(idValue, fallback) {
    const node = document.getElementById(idValue);
    return (node?.value || fallback).trim();
  }

  function secondsLeft(target) {
    return target ? Math.max(0, Math.ceil((target - Date.now()) / 1000)) : 0;
  }

  function clock(seconds) {
    const minutes = Math.floor(seconds / 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function roomCode() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i += 1) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  function id(prefix) {
    return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function clamp(number, min, max) {
    return Math.min(max, Math.max(min, number));
  }

  function cap(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  function parse(raw) {
    try {
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function esc(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
})();
