const router = require('express').Router();
const bcrypt = require("bcrypt");
const UserModel = require('../models/user');

//Create User

router.post('/newuser', async(req, res)=>{
    let body = req.body;
    let { name, surname, email, password, role } = body;
    let user = new UserModel({
      name,
      surname,
      email,
      password: bcrypt.hashSync(password, 10),
      role
    });
    user.save((err, usuarioDB) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }
        res.json({
          ok: true,
          usuario: usuarioDB,
        });
      });
});

//Get Users

router.get('/getuser', (req, res)=>{
  UserModel
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//Update User

router.put('/updateuser/:id', async (req, res) =>{
  let body = req.body;
  let { name, surname, email, password, role} = body;
  let user = await UserModel.findByIdAndUpdate(req.params.id,{
    name,
    surname,
    email,
    password: bcrypt.hashSync(password, 10),
    role
  },{
    new: true
  })
  if(!user){
    return res.status(404).send('No existe');
  }
  res.status(204).send(user);
});

module.exports = router;
