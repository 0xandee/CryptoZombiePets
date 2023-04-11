const mongoose = require("mongoose");
const gunSchema = new mongoose.Schema({
    accountOwner:String,
    gun_TokenId:Number,
    type:Number,   //0..4
    level:Number,  //1,2,3,4,5
    
    currentPoint:Number,

    status:Number, // 1 exist, 2 fixing, 0 not exist
    dateCreated:Date
});

//Van Update Unique
gunSchema.index({accountOwner: 1, gun_TokenId: 1}, {unique : true});
//End

module.exports = mongoose.model("Gun", gunSchema);