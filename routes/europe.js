// Importing the module
const express=require("express");
  
// Creating express Router
const router=express.Router();
  
// Handling login request
router.get("/",(req,res,next)=>{
        res.json({
          highestMountain: "Mount Elbrus 5,642 meters (18,510 feet)"
    });
})

module.exports = router;