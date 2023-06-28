// Importing the module
const express=require("express");
  
// Importing all the routes
const africaRoute = require("../routes/africa.js");
const antarcticaRoute = require("../routes/antarctica.js");
const asiaRoute = require("../routes/asia");
const europeRoute = require("../routes/europe");
const northAmericaRoute = require("../routes/northAmerica");
const oceaniaRoute = require("../routes/oceania");
const southAmericaRoute = require("../routes/southAmerica");
  
// Creating express server
const app=express();
  
// Handling routes request
app.use("/africa",africaRoute);
app.use("/antarctica",antarcticaRoute);
app.use("/asia",asiaRoute);
app.use("/europe",europeRoute);
app.use("/northAmerica",northAmericaRoute);
app.use("/oceania",oceaniaRoute);
app.use("/southAmerica",southAmericaRoute);
app.listen((3000),()=>{
    console.log("Server is Running");
});