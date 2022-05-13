const router = require ('express').Router();
const NewModel = require ('../models/news');

//Create News 

router.post('/addnews', async (req, res)=>{
let body = req.body;
let { titulo, content, image } = body;
let news = NewModel({
    titulo,
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

//Update

router.put('/updatenews/:id', async (req, res) =>{
    const news = await NewModel.findByIdAndUpdate(req.params.id,{
        titulo: req.body.titulo,
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





module.exports = router;