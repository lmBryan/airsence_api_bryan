const airq = require('../Models/Model');

const router = require('express').Router();

//consulta a todo
router.get("/", async (req,res)=> {
    const aqi = await airq.findAll()
    
    res.json (aqi);
});

//consulta por un id
router.get("/:id",(req,res)=> {
    const { id } =req.params;
    res.json ({
       id,
       nombre: "nombre del coso del aire"
    });
});

//consulta por un id
router.post("/",(req,res)=> {
    const { aqi,comp } =req.body;

    if (!aqi || !comp) {
        return res.status(400).json({
            error:"uno o mas campos vacios"
        })
    }


    res.json({
        aqi,
        comp,
    });
});

module.exports = router;