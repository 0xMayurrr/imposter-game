const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Game State Manager (In-memory)
 * structure: { roomCode: { host: id, players: [{id, name, role, clue}], status: 'lobby/game' } }
 */
const rooms = new Map();

function generateCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('create_room', (data) => {
    const code = generateCode();
    rooms.set(code, {
      hostId: socket.id,
      players: [{ id: socket.id, name: data.playerName || 'Guest' }],
      status: 'LOBBY',
      settings: data.settings || {}
    });
    socket.join(code);
    socket.emit('room_created', { code, players: rooms.get(code).players });
    console.log(`Room ${code} created by ${socket.id}`);
  });

  socket.on('join_room', (data) => {
    const room = rooms.get(data.code);
    if (!room) {
      socket.emit('error_msg', 'Room not found.');
      return;
    }
    if (room.status !== 'LOBBY') {
      socket.emit('error_msg', 'Game already in progress.');
      return;
    }
    
    const playerName = data.playerName || `Player ${room.players.length + 1}`;
    room.players.push({ id: socket.id, name: playerName });
    socket.join(data.code);
    
    // Notify all players in room
    io.to(data.code).emit('player_joined', { players: room.players });
  });

  socket.on('start_game', (data) => {
    const room = rooms.get(data.code);
    if (room && room.hostId === socket.id) {
       room.status = 'GAME';
       // Clue distribution should happen here (normally it'd call our logic)
       // Since logic is shared, the server can call it or just broadcast a 'start'
       io.to(data.code).emit('game_started', { matchDetails: data.matchDetails });
    }
  });

  socket.on('disconnect', () => {
     // Optional: cleanup rooms if host leaves
     console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Imposter server running on http://localhost:${PORT}`);
});
