import {
    getProductoAll,
    getProductoName,
    deleteProduct,
    createProduct,
    updateProduct
} from "../models/producto.model.js";
export const getAll = async (req, res) => {
    try {
        const result = await getProductoAll();
        console.log('Se accedió al endpoint getAll. Resultado obtenido:', result);
        res.json({ success: true, result: result , msg: 'Todos Los Productos' });
    } catch (error) {
        console.error('Error al intentar acceder al endpoint getAll:', error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getName = async (req, res) => {
    try {
        let { nombre } = req.query;
        const result = await getProductoName(nombre);
        console.log(`Se accedió al endpoint getName con nombre: ${nombre}. Resultado obtenido:`, result);
        return res.status(200).json({ success: true, result: result, message: "get name" });
    } catch (error) {
        console.error('Error al intentar acceder al endpoint getName:', error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const deleteP = async (req, res) => {
    try {
        let { id } = req.query;
        const result = await deleteProduct(id);
        console.log(`Se accedió al endpoint deleteP con id: ${id}. Producto eliminado correctamente con id: ${result}`);
        return res.status(200).json({ success: true, message: `Producto eliminado correctamente con id: ${result}` });
    } catch (error) {
        console.error('Error al intentar acceder al endpoint deleteP:', error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const update = async (req, res) => {
    try {
        let { detalle, nombre, valor, id, img } = req.query;
        let result = await updateProduct(detalle, nombre, valor, id, img);
        console.log(`Se accedió al endpoint update con id: ${id}. Producto actualizado correctamente con id ${result}`);
        return res.status(200).json({ success: true, message: `Producto actualizado correctamente con id ${result}` });
    } catch (error) {
        console.error('Error al intentar acceder al endpoint update:', error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}

export const create = async (req, res) => {
    try {
        let { detalle, nombre, valor, img } = req.query;
        let result = await createProduct(detalle, nombre, valor, img);
        console.log(`Se accedió al endpoint create con nombre: ${nombre}. Producto creado correctamente.`);
        return res.status(200).json({ success: true, result: result, message: "Producto creado" });
    } catch (error) {
        console.error('Error al intentar acceder al endpoint create:', error.message);
        res.status(500).json({ success: false, message: error.message });
    }
}
