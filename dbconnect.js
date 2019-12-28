const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://nhocconminh:vohunglinh@cluster0-bx1nj.mongodb.net/chat?retryWrites=true&w=majority";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
