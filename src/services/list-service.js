import { listData } from "../data/list-data.js";
import uniqid from 'uniqid';

const getAll = async () => {
    const list = await listData.getAll();

    return list;
}

const create = (taskData) => {
    taskData.id = uniqid();

    return listData.create(taskData);
}

const deleteTask = (id) => {
    console.log(id);
    return listData.deleteTask(id);
}


export const listService = {
    getAll,
    create,
    deleteTask
}