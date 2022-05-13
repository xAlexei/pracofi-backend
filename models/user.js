const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let rolesValidos = {
    values: ["RH", "ADMIN"],
    message: '{VALUE} no es un rol Valido'
}

const userSchema = new Schema({
    name: String,
    surname: String,
    email: {
        type:String,
        unique: true
    },
    password: String,
    role: {
        type: String,
        default: 'RH',
        required: [true],
        enum: rolesValidos
    } 
});

module.exports = mongoose.model('user', userSchema);