const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://steve:WWige06usl6Txy7A@cluster0.bdocfly.mongodb.net/reja ";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB:");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(`runnig syccessfuly ${PORT}, http://localhost:${PORT}`);
      });
    }
  }
);
