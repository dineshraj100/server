const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose.connect(
    "mongodb+srv://mongopc1:mongopc1@cluster0.xzhqp4r.mongodb.net/webscrape?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );

  mongoose.connection.once("open", () => {
    console.log("connected to mongoose");
  });
};

module.exports = dbConnect;
