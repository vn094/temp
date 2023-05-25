import express from "express";
const server = express();

server.use(express.static("public"));
server.listen(8080, () => {
  console.log("Server Started");
});
