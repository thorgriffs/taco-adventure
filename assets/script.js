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
        })        
    
        $.ajax({
            url: beerURL,
            method: "GET"
        }).then(function(response2) {
            console.log(response2);
            console.log(response2);
            // $("#viewTaco").append(JSON.stringify(response));
            // $("#beer").append(JSON.stringify(response2));
            // $("#tacoName").append(JSON.stringify(response.slug));
            // $("#beerName").append(JSON.stringify(response2[0].name));
            console.log(response2[0].name);
        })
    });