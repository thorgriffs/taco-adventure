// JavaScript Document

//API for Taco
<<<<<<< HEAD
// http://taco-randomizer.herokuapp.com/random/?full-taco=true

document.getElementById('buttonCombo').onclick = function getTacoAndBeer() {
	
=======
http://taco-randomizer.herokuapp.com/random/?full-taco=true

>>>>>>> ca49ea963a8db272b06059f381be544e0b1eb753
//call fetch
	var api_url = "http://taco-randomizer.herokuapp.com/random/?full-taco=true";
	async function getTaco (){
//response text
	const response = await fetch(api_url);
//complete data stream		
	const data = await response.json();
	const {tacoName} = data;
<<<<<<< HEAD
	console.log(data.base_layer.name)	
=======
>>>>>>> ca49ea963a8db272b06059f381be544e0b1eb753
//display in browser as text		
	document.getElementById("viewTaco").innerHTML = ("Taco: " + data.base_layer.name);	
	}

getTaco();

<<<<<<< HEAD


//API for Beer
// http://https://api.punkapi.com/v2/beers/random
=======
//API for Beer
http://https://api.punkapi.com/v2/beers/random
>>>>>>> ca49ea963a8db272b06059f381be544e0b1eb753

//call fetch
fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
	const beer = beers[0].name;
	//test in console
	console.log(beer)
	//display in browser as text
	document.getElementById("viewBeer").innerHTML = ("Beer: " + beer);
})
<<<<<<< HEAD
	
	}

//Save Favorites
localStorage.getItem("beer", "data.base_layer.name");

=======
>>>>>>> ca49ea963a8db272b06059f381be544e0b1eb753





