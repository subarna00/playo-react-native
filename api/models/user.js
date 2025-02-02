const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
    },
    noOfGames: {
      type: Number,
      default: 0,
    },
    playpals: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    sports: [
      {
        type: String,
      },
    ],
  },
  {timestamps: true},
);

const User = mongoose.model('User', userSchema);
module.exports = User;
