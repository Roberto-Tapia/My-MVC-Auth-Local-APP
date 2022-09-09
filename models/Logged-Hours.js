const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  timeIn: {
    type: String,
    required: false,
  },
  timeOut: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  todo: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: false,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Logged-hours', TodoSchema)
