import fs from 'fs/promises';
import path from 'path';

const databasePath = path.resolve('./src/database.json');

async function getDatabase() {
    const jsonResult = await fs.readFile(databasePath, {encoding: 'utf-8'});
    const data = JSON.parse(jsonResult);

    return data;
}

function saveDatabase(data) {
    return fs.writeFile(databasePath, JSON.stringify(data, {}, 2));
}

async function getAll() {
    const data = await getDatabase();
    
    return data.list;
}

async function create(listData) {
    const data = await getDatabase();

    data.list.push(listData);

    return saveDatabase(data);
}

export const listData = {
    getAll,
    create
}