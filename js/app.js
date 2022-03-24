document.addEventListener("DOMContentLoaded", () => {
	/*APP*/
	console.log("charged")
	/* optimiser le chargement du js et créer un objet pour gérer les 3 fonctions 10/20 */

	let items = document.querySelectorAll("img");
	let suivant = document.querySelector("button:nth-child(2)");
	let precedent = document.querySelector("button:nth-child(1)");
	let nbSlide = items.length;
	let count = 0;

	let Slide = {
		suivant(){
			items[count].classList.remove('active')
			if (count < nbSlide - 1) {
				count++;
			} else {
				count = 0;
			}
			items[count].classList.add('active')
			console.log(count);
		},
		precedent(){
			items[count].classList.remove('active')
			if (count > 0) {
				count--;
			} else {
				count = nbSlide - 1;
			}
			items[count].classList.add('active');
		},
		keydown(e){
			console.log(e)
			if (e.keyCode === 37) {
				Slide.precedent();
			} else if (e.keyCode === 39) {
				Slide.suivant();
			}
		}
	}
	
	suivant.addEventListener('click', Slide.suivant);
	precedent.addEventListener('click', Slide.precedent);
	document.addEventListener('keydown', Slide.keydown);

});