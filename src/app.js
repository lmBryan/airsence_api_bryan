//get,post,put 
const express = require("express") ;
const cors = require("cors") ;
const router = require("./routes/rutas");
const db = require("./db/database");
const data = require("./routes/api");
const app = express();
const port = process.env.PORT || 3000;

(async ()=>{

    try {
        await db.authenticate()
        db.sync();
        console.log("Test #2 pass (bd connected)")
    }   catch (error) {
        console.error('Test #2 no es posible conectrase con la base de datos:', error);
    }
})()



//midleware
app.use(express.json()); //convertir la info recibida en json
app.use(cors());//habilita la app para recibir solicitudes

app.use("/",router)

app.listen(port, ()=>{
    console.log("Test #1 pass (server on)",port)
});
