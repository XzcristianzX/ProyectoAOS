import {createProduct, getProductoModel} from "../models/producto.model.js";

export const getAll = async (req, res) =>{
    res.json({success: true, data: [] , msg : 'get All'})
}

export async function getProducto (req, res){
    try {
        const data =await getProductoModel();
        res.json({success: true, data: data , msg: 'getProducto'})     
    } catch (error) {
        res.json({success: true, data: [] , msg: 'no se encuentran datos :)'})     
    }
}
export const deleteU = async (req, res) => {
    try {
        let {id} = req.query;

        let data = await psotProducto(id);

        if (!data) {
            return res.status(200).json({success: true, message: "User deleted successfully"});

        }
        res.status(404).json({success: false, message: "User not found"});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});

    }
}

export const update = async (req, res) => {
    try {
        let {username, password,id} = req.query;

        let data = await updateUser(username, password,id);

        if (!data) {
            return res.status(200).json({success: true, message: "User update successfully"});

        }
        res.status(404).json({success: false, message: "User not found"});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});

    }
}

export const create = async (req, res) => {
    try {
        let {detalle, nombre, valor} = req.query;

        let data = await createProduct(detalle, nombre, valor);

        if (!data) {
            return res.status(200).json({success: true, message: "se creo"});

        }
        res.status(404).json({success: false, message: "User not found"});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});

    }
}

