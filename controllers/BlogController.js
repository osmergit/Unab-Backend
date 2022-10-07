import { BlogModel, PartModel} from "../models/BlogModel.js";

import mysql from "mysql2";

const credentials = {
	host: 'localhost',
	user: 'root',
	password: 'Saravalentina21',
	database: 'bdunab'
}
//Mostrar todos los registros
export const getAllBlogs= async (req, res) => {
    try {
       const blogs = await BlogModel.findAll()
       res.json(blogs)
       
    } catch (error) {
res.json({message: error.message})
    }

}
//Mostrar un registro
export const getBlog = async (req, res)=> {
    try{
        const blog = await BlogModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(blog[0])
    } catch (error){
        res.json({message: error.message})   
    }
}

//INICIO DE SESION
export const getLogin = (req, res) => {
	const { username, password } = req.body
	const values = [username, password]
	var connection = mysql.createConnection(credentials)
    //db.query
    //db.execute
	connection.query("SELECT * FROM usuarios WHERE username = ? AND password = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			if (result.length > 0) {
				res.status(200).send({
					"id": result[0].id,
					"nombre": result[0].nombre,
					"username": result[0].username,
                    "password": result[0].password
				})
			} else {
				res.status(400).send('Usuario no existe')
			}
		}
	})
   // db.end()
	connection.end()
}
//Mostrar un registro
/*
export const getLogin = async (req, res)=> {
    try{
        const login = await BlogModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(login[0])
    } catch (error){
        res.json({message: error.message})   
    }
}
*/
//crear un registro
export const createBlog = async (req,res) => {
    try{
      await  BlogModel.create(req.body)
      res.json({
        "message": "!Registro creado correctamente !"
      })
    } catch (error){
        res.json({message: error.message})  
    }
}

//Actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "!Registro actualizado correctamente !"
        })
    } catch (error) {
        res.json({message: error.message})

    }
}
//Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id}
        })
        res.json({
            "message": "!Registro eliminado correctamente !"
        })
    } catch (error) {
        res.json({message: error.message})
    }
}


//aca se registra los partidos
//---------------------------
//---------------------------

//Mostrar todos los registros
export const getAllPart= async (req, res) => {
    try {
       const blogs = await PartModel.findAll()
       res.json(blogs)
       
    } catch (error) {
res.json({message: error.message})
    }

}



export const regPart = (req, res) => {
	const { username, password } = req.body
	const values = [username, password]
	var connection = mysql.createConnection(credentials)
    //db.query
    //db.execute
	connection.query("SELECT * FROM usuarios WHERE username = ? AND password = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			if (result.length > 0) {
				res.status(200).send({
					"id": result[0].id,
					"nombre": result[0].nombre,
					"username": result[0].username,
                    "password": result[0].password
				})
			} else {
				res.status(400).send('Usuario no existe')
			}
		}
	})
   // db.end()
	connection.end()
}

