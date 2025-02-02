const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema(
  {
    sport: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    activityAccess: {
      type: String,
      default: 'public',
    },
    totalPlayers: {
      type: Number,
      required: true,
    },
    instruction: {
      type: String,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    players: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    queries: [
      {
        question: String,
        answer: String,
      },
    ],
    requests: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        comment: {
          type: String,
        },
      },
    ],
    isBooked: {
      type: Boolean,
      default: false,
    },
    matchFull: {
      type: Boolean,
      default: false,
    },
    courtNumber: {
      type: String,
    },
  },
  {timestamps: true},
);

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
