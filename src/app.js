//get,post,put 
const express = require("express") ;
const cors = require("cors") ;
const router = require("./routes/api");
const db = require("./db/database");
const app = express();
const port = process.env.PORT || 3000;

(async ()=>{

    try {
        await db.authenticate()
        db.sync();
        console.log("conectado a la base de datos")
    }   catch (error) {
        console.error('no es posible conectrase con la base de datos:', error);
    }
})()

//midleware
app.use(express.json()); //convertir la info recibida en json
app.use(cors());//habilita la app para recibir solicitudes

app.use("/aqi",router)

app.listen(port, ()=>{
    console.log("server on port",port)
});
