const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  
  completed:{
    type: Boolean,
    required: true,
  }
  


},  { timestamps: true });

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
