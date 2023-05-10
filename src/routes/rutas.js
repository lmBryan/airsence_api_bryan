const airq = require('../Models/Model');
const contacts = require('../Models/Model');

const router = require('express').Router();

//consulta a toda la tabla aqi
router.get("/aqi", async (req,res)=> {
    const Airq = await airq.findAll()
    
    res.json (Airq);
});

//consulta por un id a tabla aqi
router.get("/aqi:id",(req,res)=> {
    const { id } =req.params;
    res.json (airq.find(item=>item.id==id));
});

/*consulta a toda la tabla contactos
router.get("/contacts", async (req,res)=> {
    const Contacts = await contacts.findAll()
    
    res.json (Contacts);
});

//consulta por un id a tabla contactos
router.get("/contacts:id",(req,res)=> {
    const { id } =req.params;
    res.json (contacts.find(item=>item.id==id));
});*/

/*consulta por un id
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
*/

//mañon
router.put('/:id', (req, res)=>{
    const {id}=req.params;
    const {aqi, co, no, no2, o3, so2, pm2_5, pm10, nh2, longitud, latitud} = req.body;
    comsole.log(aqi, co, no, no2, o3, so2, pm2_5, pm10, nh2, longitud, latitud);
    const index=Aqi.findIndex(item=>item.id==id)
    Aqi[index].aqi=aqi;
    Aqi[index].co=co;
    Aqi[index].no=no;
    Aqi[index].no2=no2;
    Aqi[index].o3=o3;
    Aqi[index].so2=so2;
    Aqi[index].pm2_5=pm2_5;
    Aqi[index].pm10=pm10;
    Aqi[index].nh2=nh2;
    Aqi[index].longitud=longitud;
    Aqi[index].latitud=latitud;
    req.json(Aqi);
})

module.exports = router;