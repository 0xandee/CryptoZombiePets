const mongoose = require("mongoose");
const claimSchema = new mongoose.Schema({
    accountOwner:String,
    gun_TokenId:Number,
    type:Number,   //0..4
    pointClaim:Number,
    dateCreated:Date
});

module.exports = mongoose.model("ClaimPoint", claimSchema);