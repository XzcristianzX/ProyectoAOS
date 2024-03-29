import pgService from "../services/pg.service.js";

export const getProductoModel = async () => {
    const pg =  new pgService(); 
    return  await  pg.connection.query("SELECT * FROM producto");
}

export const createProduct = async (detalle, nombre, valor) => {
    const  pg = new pgService();
    return await  pg.connection.oneOrNone('INSERT INTO producto(detalle, nombre,valor) VALUES ($1,$2,$3)', [detalle, nombre,valor]);

};


export const updateProduct = async (username, password,id) => {
    const  pg = new pgService();
    return await  pg.connection.oneOrNone('UPDATE producto SET username = $1, password = $2 WHERE id = $3', [username,password,id]);
};

export const deleteProduct = async (id) => {
    const pg = new pgService();
    return await pg.connection.oneOrNone('DELETE FROM producto WHERE id = $1', [id]);
};
