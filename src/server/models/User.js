const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    email: {type : String, required : true, unique : true},
    password: {type : String, required : true},
    diskSpace: {type : Number, default : 1024**3*10},
    useSpace: {type : Number, default : 0},
    avatart: {type : String},
    files: [{type: ObjectId, ref:'File'}]
})

module.exports = model('User', User);