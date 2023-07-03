// Importing the module
const express=require("express");
  
// Creating express Router
const router=express.Router();
  
// Handling login request
router.get("/",(req,res,next)=>{
        res.json({
          highestMountain: "Puncak Jaya 4,884 meters (16,024 feet)"
    });
})

module.exports = router;