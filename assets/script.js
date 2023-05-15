const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/* Recuperation des 2 elements corespondants aux 2 flêches*/
const arrowLeft = document.getElementById("arrow_left")
const arrowRight = document.getElementById("arrow_right")

var index = 0

/* On va ecouter le click sur la flêche de gauche*/
arrowLeft.addEventListener('click', function () {

	/* click à gauche, on va chercher l'index pour l'image précédente*/
	index = index - 1
	/* Si on depasse du tableau, on repart sur la dernière image*/
	if (index < 0) {
		index = slides.length - 1;
	}
	selectDot(index)

	/* On selectionne l'élement correspondant à l'image courante, et on remplace par la nouvelle image*/
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[index].image

	document.getElementById("text").innerHTML=slides[index].tagLine
});

/* On va ecouter le click sur la flêche de droite*/
arrowRight.addEventListener('click', function () {

	/* click à droite, on va chercher l'index pour l'image suivante*/
	index = index + 1;

	/* Si on depasse du tableau, on repart sur la première image*/
	if (index >= slides.length) {
		index = 0
	}
	selectDot(index)

	/* On selectionne l'élement correspondant à l'image courante, et on remplace par la nouvelle image*/
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[index].image
	
	document.getElementById("text").innerHTML=slides[index].tagLine
});

function selectDot(index) {
	const dot = document.querySelectorAll(".dot")
	dot.forEach(element => {
		element.className = "dot"
	});

	dot[index].className = "dot dot_selected"
	
}