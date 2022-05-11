process.env.PORT = process.env.PORT || 4201;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB = "";

if (process.env.NODE_ENV === 'dev') {
    urlDB = "mongodb+srv://PRACOFIBD:PRACOFIBASE@pracofi.hblhl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
} else {
    urlDB = ""
};

process.env.URLDB = urlDB;
process.env.CADUCIDAD_TOKEN = '48h';
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION || 'este-es-el-seed-desarrollo';


