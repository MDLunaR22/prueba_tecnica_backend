const express = require("express")
const cors = require("cors")
const {mongoConnection} = require("../database/config")

class Server {
    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            moneda: '/api/moneda'
        }

        this.dbConnection();

        this.middlewares();

        this.routes();
    }

    async dbConnection(){
        await mongoConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static("public"));
    }

    routes (){
        this.app.use(this.paths.moneda, require('../routes/moneda'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server in port ${this.port}`)
        })
    }
}

module.exports = Server;