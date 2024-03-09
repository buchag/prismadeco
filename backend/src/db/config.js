const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE = process.env.DATABASE || "mongodb+srv://gfbucha:AcademiaNumen2024@bucha.69vadjo.mongodb.net/prismadeco";

(
    async () => {
       try {
        await mongoose.connect(DATABASE);
        console.log("Base de datos conectada");
        }
        catch (err) {
            console.log(err)
        } 
    }
)();
