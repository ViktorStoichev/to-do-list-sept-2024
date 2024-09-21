import { listData } from "../data/list-data.js";

const getAll = async () => {
    const list = await listData.getAll();

    return list;
}


export const listService = {
    getAll,
}