const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  referrer:{
    type: String,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  thaoId: {
    type: Schema.Types.ObjectId,
    ref: "referral",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = { User: mongoose.model("user", UserSchema) }
