// Importing the module
const express=require("express");
  
// Creating express Router
const router=express.Router();
  
// Handling login request
router.get("/",(req,res,next)=>{
        res.json({
          highestMountain: "Mount Vinson Peak 4,892 meters (16,050 feet)"
    });
})

module.exports = router;