//style
document.body.style.backgroundImage = "url('https://i.ibb.co/d4QkJ9M/phatt-taco-03.jpg')";

// defining global variables and constants
var beer;
var taco;
var pairing;
var savedPairings = [];
const localStorageKey = "beerTaco";

// retrieve from local storage
retrieveSavedPairings();

function retrieveSavedPairings() {
    var beerTaco = localStorage.getItem(localStorageKey);
    if (!beerTaco)
        savedPairings = [];
    else
        savedPairings = JSON.parse(beerTaco);
    for (var i = 0; i < savedPairings.length; i++) {
        var pairingBtn = savedPairings[i];
        addSavedPairing(pairingBtn);
    }    
    
    console.log(beerTaco);
}

// onclick event for the #buttonCombo "Make Suggestion" button
$("#buttonCombo").click(function() {
    var tacoURL = "https://taco-randomizer.herokuapp.com/random/?full-taco=true";
    var beerURL = "https://api.punkapi.com/v2/beers/random"
    
    // ajax call to PunkAPI
    $.ajax({
        url: beerURL,
        method: "GET"
    }).then(function(response) {
        var response = response[0];

        beer = {
            beerName: response.name,
            beerTag: response.tagline,
            beerDesc: response.description,
            beerPic: response.image_url
        };

        showBeer(beer);  
    });
    
    // ajax call to TacoFancy API   
    $.ajax({
        url: tacoURL,
        method: "GET"
    }).then(function(response) {  
        
        taco = {
            tacoName: response.name,
            tacoURL: response.url
        };
        
        showTaco(taco);
    });        
    
});

// display beer info in UI
function showBeer(beer) {
    $("#beerName").text("Beer: " + beer.beerName);
    $("#beerTag").text("Tagline: " + beer.beerTag);
    $("#beerDescription").text("Description: " + beer.beerDesc);            
    $("#beerPic").attr("src", beer.beerPic);
    console.log(beer);
}

// display taco info in UI
function showTaco(taco) {
    $("#tacoName").text("Taco Pairing: " + taco.tacoName); 
    $("#recipeLink").attr("href", taco.tacoURL).text("Click here for recipe");
    console.log(taco);
}


// onclick of "Save Favorites" button
$("#saveFaves").click(function() {
    var pairing = {
        beer: beer,
        taco: taco,
    };

    savedPairings.push(pairing);
        
    console.log(pairing);  
    console.log(savedPairings);
    savePairing();
    addSavedPairing(pairing);
});

//Save to local stroage
function savePairing() {
    localStorage.setItem(localStorageKey, JSON.stringify(savedPairings));
}

// add saved pairing to UI
function addSavedPairing(pairingBtn) {
    var showPairing = $("#savedPairings");
    var showPairingBtn = $("<button>").attr({"type": "button", "class": "button is-small is-fullwidth is-success is-light is-outlined","style":"margin-top: 5px;"});
    showPairingBtn.text(pairingBtn.beer.beerName + " Beer" + " & " + pairingBtn.taco.tacoName);
    showPairingBtn.click(function() {
        showBeer(pairingBtn.beer);
        showTaco(pairingBtn.taco);
    });

    showPairing.prepend($("<br>")).prepend(showPairingBtn);
}

//  on click clear all  

$("#clear").click(function(){
    localStorage.clear();
    location.reload();
})

//  clear local storage