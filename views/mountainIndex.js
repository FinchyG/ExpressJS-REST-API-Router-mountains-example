// Execute in strict mode
"use strict";

// Declare a MegamaxSale object for use by the HTML view
var controller;

window.addEventListener("load", () => {
  console.log("page loaded");
  // Create the HighestMountains object for use by the HTML view
  controller = new HighestMountains();
});

function HighestMountains() {
    
    // functions to return model data
    
    function getAfricaHighestMountain() {
        
        function onSuccess(data) {
            document.getElementById("africaReveal").innerText = data.highestMountain;
        }
        $.ajax('http://localhost:3000/africa', { type: "GET", success: onSuccess },
        );        
    }
    
    function getAntarcticaHighestMountain() {
        
        function onSuccess(data) {
            document.getElementById("antarcticaReveal").innerText = data.highestMountain;
        }
        $.ajax('http://localhost:3000/antarctica', { type: "GET", success: onSuccess },
        );        
    }
    
    function getAsiaHighestMountain() {
        
        function onSuccess(data) {
            document.getElementById("asiaReveal").innerText = data.highestMountain;
        }
        $.ajax('http://localhost:3000/asia', { type: "GET", success: onSuccess },
        );        
    }
    
    function getEuropeHighestMountain() {
        
        function onSuccess(data) {
            document.getElementById("europeReveal").innerText = data.highestMountain;
        }
        $.ajax('http://localhost:3000/europe', { type: "GET", success: onSuccess },
        );        
    }
    
    function getNorthAmericaHighestMountain() {
        
        function onSuccess(data) {
            document.getElementById("northAmericaReveal").innerText = data.highestMountain;
        }
        $.ajax('http://localhost:3000/northAmerica', { type: "GET", success: onSuccess },
        );        
    }
    
    function getOceaniaHighestMountain() {
        
        function onSuccess(data) {
            document.getElementById("oceaniaReveal").innerText = data.highestMountain;
        }
        $.ajax('http://localhost:3000/oceania', { type: "GET", success: onSuccess },
        );        
    }
    
    function getSouthAmericaHighestMountain() {
        
        function onSuccess(data) {
            document.getElementById("southAmericaReveal").innerText = data.highestMountain;
        }
        $.ajax('http://localhost:3000/southAmerica', { type: "GET", success: onSuccess },
        );        
    }

    // CONTROLLER FUNCTIONS
    
    this.revealAfricaHighestMountain = function() {
        getAfricaHighestMountain();
    }
    
    this.revealAntarcticaHighestMountain = function() {
        getAntarcticaHighestMountain();
    }
    
    this.revealAsiaHighestMountain = function() {
        getAsiaHighestMountain();
    }
    
    this.revealEuropeHighestMountain = function() {
        getEuropeHighestMountain();
    }
    
    this.revealNorthAmericaHighestMountain = function() {
        getNorthAmericaHighestMountain();
    }
    
    this.revealOceaniaHighestMountain = function() {
        getOceaniaHighestMountain();
    }
    
    this.revealSouthAmericaHighestMountain = function() {
        getSouthAmericaHighestMountain();
    }    
}