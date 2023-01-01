console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1 -> Kirish code
app.use(express.static("public")); 
app.use(express.json()); // expressdan kelayotgan objectni jsonga o'tkazib oldik
app.use(express.urlencoded({ extended: true }));

// 2 -> Sessiom

// 3 -> View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 -> Routing code (serverga qo'shish)
app.get("/hello", function (req, res) {
  res.end("hello world");
});

app.get("/gift", function (req, res) {
  res.end("Siz sovg'alar bo'limidasiz");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server running successfully on port: ${PORT}`);
});
