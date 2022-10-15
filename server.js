const express= require("express");
const conndb = require("./Config/connexion")
const appRoute = require ("./Routes/route")
const server = express();
const port = 4000 ;

//use JSON format in req an res

server.use(express.json());
server.use("/api",appRoute);


//call connection method


conndb();

server.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on .. http://localhost:${port}`);
})