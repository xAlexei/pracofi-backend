const router = require('express').Router();
const bcrypt = require("bcrypt");
const UserModel = require('../models/user');

//Create User

router.post('/newuser', async(req, res)=>{
    let body = req.body;
    let { name, surname, email, password } = body;
    let user = new UserModel({
      name,
      surname,
      email,
      password: bcrypt.hashSync(password, 10)
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

module.exports = router;
