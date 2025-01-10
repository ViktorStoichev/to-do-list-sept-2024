import { Schema, model } from "mongoose";

const doneTaskSchema = new Schema({
    todo: String,
    date: String,
    time: String
});

const DoneTask = model('DoneTask', doneTaskSchema);

export default DoneTask;