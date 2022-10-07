import db from "../database/db.js";
import { DataTypes } from "sequelize";

export const BlogModel= db.define('usuarios', {
  
    nombre: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
   

})

export const PartModel= db.define('partidos', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    usuario: { 
        type: DataTypes.INTEGER,
        allowNull: false   },
    visitante: { 
        type: DataTypes.INTEGER,
        allowNull: false  },
    local: { 
        type: DataTypes.INTEGER,
        allowNull: false },
    fecha: {type: DataTypes.DATE},
    goles_local: { type: DataTypes.INTEGER },
    goles_visitante: { type: DataTypes.INTEGER },

})

