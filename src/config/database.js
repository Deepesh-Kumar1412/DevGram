const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://DeepeshKumar:Deepesh%402003@namastenode.r4gsgst.mongodb.net/DevGram?retryWrites=true&w=majority"
  );
};

module.exports = connectDB;
