// Importing the module
const express=require("express");
  
// Creating express Router
const router=express.Router();
  
// Handling login request
router.get("/",(req,res,next)=>{
        res.json({
          highestMountain: "Denali 6,190 meters (20,310 feet)"
    });
})

module.exports = router;