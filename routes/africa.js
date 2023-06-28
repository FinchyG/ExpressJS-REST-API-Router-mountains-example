// Importing express module
const express=require("express");
const router=express.Router();
  
// Handling request using router
router.get("/",(req,res,next)=>{
    res.send("Mount Kilamanjaro 5,895 meters (19,340 feet)");
});
  
// Importing the router
module.exports = router;