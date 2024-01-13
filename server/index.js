
import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import errorMiddleware from './middleware/middleware.js';
import communityRouter from './routes/createCommunity.routes.js';
import message from './models/user.message.model.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
// app.use(cors({
//   origin: '*'
// }));
app.use(express.json());

// Routes
app.use('/api/community', communityRouter);

// Error handling middleware
app.use(errorMiddleware);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

  const server = http.createServer(app);
  const io = new Server(server,{
    cors: {
      origin: 'http://localhost:8000'
    }
  });

// Server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// // Socket.IO setup
// const io = new Server(expressServer, {
//   pingTimeout: 60000,
//   cors: {
//     origin:
//     // credentials: true,
//   },
// });

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('sendMessage', (message) => {
      io.emit('message', message); // Broadcast the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});















// // username : blendbridge
// // pass : iiZsbGVzE6deREvt