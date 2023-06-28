// Importing the module
const express=require("express");
  
// Creating express Router
const router=express.Router();
  
// Handling login request
router.get("/",(req,res,next)=>{
    res.send("Mount Everest 8,850 meters (29,035 feet)");
})
module.exports = router;