import { listData } from "../data/list-data.js";

const getAll = async () => {
    const list = await listData.getAll();

    return list;
}

const create = (taskData) => {
    return listData.create(taskData);
}


export const listService = {
    getAll,
    create
}