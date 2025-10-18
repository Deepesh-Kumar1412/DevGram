const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: {
    type: string
  },

  lastname: {
    type: string
  },
  emailID: {
    type: string
  },
  password: {
    type: string
  },
  gender: {
    type: string
  },
});


module.exports = mongoose.model("User",userSchema);