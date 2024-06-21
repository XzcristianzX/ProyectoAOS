import pgService from "../services/pg.service.js";

export const getProductoAll = async () => {
    const pg = new pgService();
    try {
        return await pg.connection.query('SELECT * FROM producto');
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getProductoId = async (id) => {
    const pg = new pgService();
    try {
        if (!id) {
            throw new Error("Se requiere proporcionar un nombre de producto");
        } else {
            const result = await pg.connection.manyOrNone('SELECT * FROM producto WHERE id_producto = $1', [id]);
            if (!result) {
                throw new Error(`Error inesperado al buscar el producto con el nombre: ${nombre}`);
            } else if (result.length === 0) {
                throw new Error(`No se encontró ningún producto con el nombre: ${nombre}`);
            }
            return result;
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export const createProduct = async (detalle, nombre, valor, img) => {
    const pg = new pgService();
    try {
        if (!detalle || !nombre || valor === undefined || valor === null) {
            throw new Error("Faltan detalles, nombre o valor del producto");
        } else {
            const query = 'INSERT INTO producto(detalle, nombre, valor, img) VALUES ($1, $2, $3, $4) RETURNING id_producto, detalle, nombre, valor, img';
            const result = await pg.connection.one(query, [detalle, nombre, valor, img]);
            return result;
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateProduct = async (detalle, nombre, valor, id, img) => {
    const pg = new pgService();
    try {
        if (!detalle || !nombre || valor === undefined || valor === null || !id) {
            throw new Error("Faltan detalles, nombre, valor o ID de producto");
        } else {
            const query = 'UPDATE producto SET detalle = $1, nombre = $2, valor = $3, img = $4 WHERE id_producto = $5 RETURNING id_producto';
            const result = await pg.connection.oneOrNone(query, [detalle, nombre, valor, img, id]);
            if (!result) {
                throw new Error(`No se encontró ningún producto con el ID: ${id}`);
            }
            return result.id_producto;
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteProduct = async (id) => {
    const pg = new pgService();
    try {
        if (!id) {
            throw new Error("No se proporcionó un ID de producto ");
        } else {
            const result = await pg.connection.oneOrNone('DELETE FROM producto WHERE id_producto = $1 RETURNING id_producto', [id]);
            if (!result) {
                throw new Error(`Error No se encontró ningún producto con el ID: ${id}`);
            }
            return result.id_producto;
        }
    } catch (error) {
        throw new Error(error.message);
    }
};
