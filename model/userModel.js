// const mongoose = require('mongoose');

// const UserSchema = mongoose.Schema({
//     name : String,
//     email : String,
//     pass : String,
//     Role : String
// },{
//     versionKey : false
// })

// const UserModel = mongoose.model("user",UserSchema);

// module.exports=({
//     UserModel
// })

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email:String,
    pass : String,
    role : String
},{
    versionKey : false
})

const UserModel = mongoose.model('user',UserSchema);

module.exports={
    UserModel
}