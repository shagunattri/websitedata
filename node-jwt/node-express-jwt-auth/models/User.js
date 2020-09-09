const mongoose = require('mongoose');
const { isEmail } = require('validator');

//schema
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required:[true,'Please enter an email'],
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
    },
    password: {
        type:String,
        required:[true,'Please enter a password'],
        minlength:[6,'Minimum password length is 6 characters']
    },
});


//model to be singular of database collection as mongo plurals it
const User = mongoose.model('user',userSchema);

module.exports = User;