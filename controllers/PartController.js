import {PartModel} from "../models/PartModel.js";
//Visualizar Partidos
export const getAllPart= async (req, res) => {
    console.log("pase por aca")
    try {
       const blogs = await PartModel.findAll()
       res.json(blogs)
       
    } catch (error) {
res.json({message: error.message})
    }

}

//crear Partidos
export const createPart = async (req,res) => {
    try{
      await  PartModel.create(req.body)
      res.json({
        "message": "!Registro creado correctamente !"
      })
    } catch (error){
        res.json({message: error.message})  
    }
}

//editar Partidos

export const updatePart = async (req, res) => {
    try {
        await PartModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message": "!Registro actualizado correctamente !"
        })
    } catch (error) {
        res.json({message: error.message})

    }
}