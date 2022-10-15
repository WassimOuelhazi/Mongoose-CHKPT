const express =require ("express");
const {createPerson,getAllPersons,createManyPersons,findByfood,findPersonById,classicUpdateFood,newUpdateAge,removePerson,removePersonsByName,narrowResults} = require("../Controllers/person");


// call route app from express

 const route = express.Router();

 route.post("/createPerson",createPerson);
 route.post("/createManyPersons",createManyPersons);
 route.get("/allpersons",getAllPersons);
 route.get("/personfood/:favoriteFoods",findByfood);
 route.get("/person/:id",findPersonById);
 route.put("/classupfood/:id",classicUpdateFood);
 route.put("/newupage/",newUpdateAge);
 route.delete("/removeperson/:id",removePerson);
 route.delete("/removebyname/:name",removePersonsByName);
 route.get("/findfavfoodnarrow/:favoriteFoods",narrowResults);


 module.exports=route;










































