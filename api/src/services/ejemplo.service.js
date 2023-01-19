const { Ejemplo } = require('./db.service');
const helper = require('../utils/helper.util');
const config = require('../configs/general.config');

async function get(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    //sql
    //   const rows = await db.query(
    //     `SELECT id, name 
    //     FROM ejemplo LIMIT ?,?`, 
    //     [offset, config.listPerPage]
    //   );
    //   const data = helper.emptyOrRows(rows);

    //sequalize
    data = Ejemplo.findAll();

    const meta = { page };

    return {
        data,
        meta
    }
}

async function create(ejemplo) {
    const { name } = ejemplo;
    //sql
    // const result = await db.query(
    //     `INSERT INTO ejemplo 
    //     (name) 
    //     VALUES 
    //     (?)`,
    //     [
    //         ejemplo.name
    //     ]
    // );

    //sequalize
    const result = Recipe.create({ name });

    let message = 'Error in creating ejemplo';

    if (result.affectedRows) {
        message = 'Ejemplo created successfully';
    }

    return { message };
}

async function update(id, ejemplo) {
    const { name } = ejemplo;
    //sql
    // const result = await db.query(
    //     `UPDATE ejemplo 
    //     SET name=?
    //     WHERE id=?`,
    //     [
    //         ejemplo.name, id
    //     ]
    // );

    //sequalize
    //TODO

    let message = 'Error in updating ejemplo';

    if (result.affectedRows) {
        message = 'Ejemplo updated successfully';
    }

    return { message };
}

async function remove(id) {
    //sql
    // const result = await db.query(
    //     `DELETE FROM ejemplo WHERE id=?`,
    //     [id]
    // );

    //sequalize
    //TODO

    let message = 'Error in deleting ejemplo';

    if (result.affectedRows) {
        message = 'Ejemplo deleted successfully';
    }

    return { message };
}

module.exports = {
    get,
    create,
    update,
    remove
}