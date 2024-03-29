import {createUser, deleteUser, getUsuario, updateUser} from "../models/auth.model.js";
import {generateToken} from "../services/token.service.js";

export const login = async (req, res) => {
    try {
        let {username, password} = req.query;

        let data = await getUsuario(username, password);

        if (!data) {
            throw new Error("datos son incorrectos");

        }

        res.status(200).json({
            token: generateToken(data),
            success: true,
            //data: [] ,
            msg: "Logeado Correctamente"
        });
    } catch (error) {
        res.status(401).json({
            token: ' ',
            success: false,
            //data: [] ,
            msg: error.message
        });
    }
    /*
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {
                username: 'admin',
                role: 'rol_admin'
            }
        },  exports.secret);
    */

}

export const deleteU = async (req, res) => {
    try {
        let {id} = req.query;

        let data = await deleteUser(id);

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
            return res.status(200).json({success: true, message: "User deleted successfully"});

        }
        res.status(404).json({success: false, message: "User not found"});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});

    }
}

export const create = async (req, res) => {
    try {
        let {username, password} = req.query;

        let data = await createUser(username, password);

        if (!data) {
            return res.status(200).json({success: true, message: "User deleted successfully"});

        }
        res.status(404).json({success: false, message: "User not found"});

    } catch (error) {
        res.status(500).json({success: false, message: error.message});

    }
}






