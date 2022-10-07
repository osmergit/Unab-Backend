import { Sequelize } from "sequelize";

const db = new Sequelize ('bdunab', 'root', 'Saravalentina21', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

export default db