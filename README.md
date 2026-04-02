# Imposter - Social Deduction Game

A polished, minimalist multiplayer game where players must find the imposter hiding among them.

## 🚀 How to Play

### 🏠 Offline Mode (Pass & Play)
1. Select **Play Offline** from the main menu.
2. Choose player count (3-20) and number of imposters.
3. Select Clue Type (Word, Image, or Mixed) and Game Mode (Classic, Twist, Chaos).
4. **Reveal Phase:** Players take turns holding the device. Tap the card to see your role and clue, then hide it before passing to the next player.
5. **Discussion:** Start the timer and discuss who seems suspicious based on their descriptions.
6. **Voting:** Cast votes. If you catch the imposter, the group wins! If you eliminate an innocent, the imposter wins.

### 🌐 Online Mode (Room Based)
*Note: Requires Node.js and Socket.io server to be running.*
1. Select **Play Online**.
2. **Host:** Click **Create Room** and share the 4-digit code.
3. **Players:** Enter the code and click **Join Room**.
4. Once everyone is in, the Host clicks **Start Game**.
5. Each player sees their own secret role on their own device.

## 🛠️ Technical Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Server:**
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser.

## 📂 Project Structure
- `server.js`: Node.js/Express/Socket.io backend.
- `public/`: Frontend assets.
  - `index.html`: SPA structure.
  - `style.css`: Modern design system.
  - `scripts/`:
    - `main.js`: Interaction & UI glue.
    - `game-logic.js`: Role distribution & clue algorithms.
    - `data.js`: Word and image clue database.

## 🎨 Game Modes
- **Classic:** Imposters get no clue. They must listen carefully to blend in.
- **Twist:** Imposters get a related but different clue (e.g., Normal: Pizza, Imposter: Calzone).
- **Chaos:** Roles and clues are randomized or mixed for high-tension rounds.
