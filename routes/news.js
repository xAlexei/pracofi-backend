const router = require ('express').Router();
const NewModel = require ('../models/news');

//Create News 

router.post('/addnews', async (req, res)=>{
let body = req.body;
let { titulo, subtittle, content, image } = body;
let news = NewModel({
    titulo,
    subtittle,
    content,
    image
})
    news.save();
    res.status(201).send(news);
})

//Get News

router.get('/getnews', (req, res)=>{
    NewModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Get One new 

router.get('/details/:id', async (req, res)=>{
    const { id } = req.params;
    NewModel
    .findById(id)
    .then((data) => res.json(data))
    .catch((error)=> res.json(error))
});

//Update

router.put('/updatenews/:id', async (req, res) =>{
    const news = await NewModel.findByIdAndUpdate(req.params.id,{
        titulo: req.body.titulo,
        subtittle: req.body.subtittle,
        content: req.body.content,
        image: req.body.image
    },{
        new: true
    })
    if(!news){
        return res.status(404).send("No existe")
    }
    res.status(201).send(news);
});

//Eliminar noticias 

router.delete('/deletenews/:id', (req, res)=>{
    const { id } = req.params;
    NewModel
      .deleteMany({ _id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
  });
  




module.exports = router;