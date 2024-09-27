import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    todo: String,
    date: String,
    time: String
});

const Task = model('Task', taskSchema);

export default Task;