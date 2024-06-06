import mysql from 'mysql2/promise'
import db from '../config/database.js'

export default class infoController{
    static async index(req,res){
        let connection;
        try{
            connection = await mysql.createConnection(db)
            const [result] = await connection.execute("SELECT * FROM bob")
            console.log(result)
            res.json(result)
        }
        catch(error){
            console.error('Error en store', error.message)
            res.status(500).json({'Error': error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }
    }
    static async store(req, res){
        let connection;
        try{
            const {nombre, descripcion, img, leftColor, rightColor} = req.body
            connection = await mysql.createConnection(db)
            const [insertar] = await connection.execute("INSERT INTO bob (nombre, descripcion, img, leftColor, rightColor) VALUES(?,?,?,?,?)" ,[nombre, descripcion, img, leftColor, rightColor])
            console.log(insertar)                     
        }
        catch(error){
            console.error('Error en store', error.message)
            res.status(500).json({'Error': error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }
    }
    static async details(req, res){
        let connection;
        try{
            const idB = req.params.id
            connection = await mysql.createConnection(db)
            const [obtener] = await connection.execute("SELECT * FROM bob WHERE id = ?", [idB]);
            console.log(obtener)
            res.status(200).json({ obtener })
        }
        catch(error){
            console.error('Error en details', error.message)
            res.status(500).json({'Error': error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }
    }
}