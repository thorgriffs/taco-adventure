// display saved entries from localstorage on page refresh

// API urls
var tacoURL = "http://taco-randomizer.herokuapp.com//random/?full-taco=true";
var beerURL = "https://api.punkapi.com/v2/beers/random"

// onclick event for the #buttonCombo "Make Suggestion" button
$("#buttonCombo").click(function() {
       
    $.ajax({
        url: tacoURL,
        method: "GET"
    }).then(function(response) {
        var taco = response;   
        
        tacoName = taco.name;
        tacoURL = taco.url;
        
        console.log(taco);         	
        // document.getElementById("viewTaco").innerHTML = ("Taco: " + taco.name);	
        //console.log(taco.url)
        //document.getElementById("recipeLink").innerHTML = (href= response.url);
        
        showTaco(taco);
    })        

    $.ajax({
        url: beerURL,
        method: "GET"
    }).then(function(response2) {
        var beer = response2[0];

        beerName = beer.name;
        beerTag = beer.tagline;
        beerDescription = beer.description;
        beerPic = beer.image_url;
        
        console.log(beer);
        
        // $("#viewTaco").append(JSON.stringify(response.recipe));
        // $("#beer").append(JSON.stringify(response2));
        // $("#tacoName").append(JSON.stringify(response.slug));
        // $("#beerName").append(JSON.stringify(response2[0].name));
        // document.getElementById("viewBeer").innerHTML = ("Beer: " + beer.name + " Tagline: " + beer.tagline + " Description: " + beer.description);
        // console.log(beer.name);

        showBeer(beer);  
    })
});

function showBeer(beer) {
    $("#beerName").text("Beer: " + beerName);
    $("#beerTag").text("Tagline: " + beerTag);
    $("#beerDescription").text("Description: " + beerDescription);            
    $("#beerPic").attr("src", beerPic);
}

function showTaco(taco) {
    $("#tacoName").text("Taco Pairing: " + tacoName); 
    $("#recipeLink").attr("href", tacoURL).text("Click here for recipe");
}


//Save to local stroage
$("#saveFaves").click(function(){
    
})
//  retrieve from local storage

//  add local storage to html

//

//  on click clear all  

//  clear local storage