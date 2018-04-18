const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
    username:{
     type:String,
     lowercase:true

    },
    age:Number
});
const User = mongoose.model('User',userSchema,'user');
module.exports  = User;