// onclick event fot #buttonCombo
    // ajax call to tacofancy
        // determine datapoints to return
        // return response data to html
    // ajax call to punkapi
        // determine datapoints to return
        // return response data to html


  
  $("#buttonCombo").click(function() {
        var tacoURL = "http://taco-randomizer.herokuapp.com//random/?full-taco=true";
        var beerURL = "https://api.punkapi.com/v2/beers/random"
        // Log the data in HTML
        
        $.ajax({
        url: tacoURL,
        method: "GET"
        }).then(function(response) {
        console.log(response);
        document.getElementById("viewTaco").innerHTML = ("Taco: " + response.name);	
        console.log(response.url)
        //document.getElementById("recipeLink").innerHTML = (href= response.url);
        $("#recipeLink").attr("href", response.url);
        })        
    
        $.ajax({
            url: beerURL,
            method: "GET"
        }).then(function(response2) {
            console.log(response2);
            console.log(response2);
            // $("#viewTaco").append(JSON.stringify(response.recipe));
            // $("#beer").append(JSON.stringify(response2));
            // $("#tacoName").append(JSON.stringify(response.slug));
            // $("#beerName").append(JSON.stringify(response2[0].name));
            console.log(response2[0].name);
            document.getElementById("viewBeer").innerHTML = ("Beer: " + response2[0].name + " Tagline: " + response2[0].tagline + " Description: " + response2[0].description);
            $("#beerPic").attr("src", response2[0].image_url);
        })
    });


    //Save to local stroage
    $("saveFaves").click(function(){
    var beer = response2[0];
    var beearName = beer.name;
    var beerTag = beer.tagline;
    $("#viewBeer").text("Beer: " + beerName);

    })
    //  retrieve from local storage

    //  add local storage to html

    //
    
    //  on click clear all  

    //  clear local storage

    //  

    //
