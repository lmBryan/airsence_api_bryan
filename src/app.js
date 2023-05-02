//get,post,put 
const  express = require("express") ;
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=> {
    res.send ("mensaje de prueba")
})

app.listen(port, ()=>{
    console.log("server on port",port)
});
