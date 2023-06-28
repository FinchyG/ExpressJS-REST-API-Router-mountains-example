// Importing the module
const express=require("express");
  
// Creating express Router
const router=express.Router();
  
// Handling login request
router.get("/",(req,res,next)=>{
    res.send("Cerro Aconcagua 6,706 meters (22,000 feet)");
})
module.exports = router;