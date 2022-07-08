const router = require ('express').Router();
const JobModel = require ('../models/jobs');

//crear vacante

router.post('/addjob', async (req, res)=>{
    let body = req.body;
    let { vacancy, description, time, requirements, salary } = body;
    let news = JobModel({
        vacancy,
        description,
        time,
        requirements,
        salary
    })
        news.save();
        res.status(201).send(news);
    })

//listar vacantes

router.get('/getjob', (req, res)=>{
    JobModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//listar vacante por id

router.get('/detailjob/:id', async (req, res)=>{
    const { id } = req.params;
    JobModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json(error))
});


//editar vacante

router.put('/updatejob/:id', async (req, res) =>{
    const news = await NewModel.findByIdAndUpdate(req.params.id,{
        vacancy: req.body.vacancy,
        description: req.body.description,
        time: req.body.time,
        requirements: req.body.requirements,
        salary: req.body.salaray
    },{
        new: true
    })
    if(!news){
        return res.status(404).send("No existe")
    }
    res.status(201).send(news);
});

//eliminar vacantes

router.delete('/deletejob/:id', (req, res)=>{
    const { id } = req.params;
    JobModel
      .deleteMany({ _id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
  });
  
  module.exports = router;