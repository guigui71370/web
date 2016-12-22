// GESTION DU MENU

document.getElementById("header__icon").onclick = function btnMenu() {
    document.body.classList.toggle('with--sidebar');
}

document.getElementById("contenuSite").onclick = function cacherMenu() {
    document.body.classList.remove('with--sidebar');
}

document.onclick = function detectHideMenu(e) {
	var parent = e.target.parentElement;
	if(parent.tagName == "LI") {
		document.body.classList.remove('with--sidebar');
	}
}

// GESTION DE LA BOUTIQUE

document.getElementsByClassName('btn_all')[0].onclick = function afficherAll(e) {
	e.preventDefault();
	var divs = document.querySelectorAll('.boutiqueIMG .images > div');
	var btnToRemoveActive = document.querySelectorAll('.box .btn_active');

	document.getElementsByClassName('btn_active')[0].classList.remove('btn_active');
	this.classList.add('btn_active');
	for (var i=0; i < divs.length; i++) {
		divs[i].classList.remove('hide');
		divs[i].classList.add('displayAllIMG');
	}
	document.getElementsByClassName('posTop')[0].style.display = 'block';
	document.getElementsByClassName('posBottom')[0].style.display = 'block';
}

document.getElementsByClassName('btn_Original')[0].onclick = function afficherOriginal(e) {
	e.preventDefault();
	var divsToHide = document.querySelectorAll('.boutiqueIMG .images > div:not(.categ_Original)');
	var divsToDisplay = document.querySelectorAll('.boutiqueIMG .images > .categ_Original');

	document.getElementsByClassName('btn_active')[0].classList.remove('btn_active');
	this.classList.add('btn_active');
	for (var i=0; i < divsToHide.length; i++) {
	    divsToHide[i].classList.add('hide');
	}
	for (var i=0; i < divsToDisplay.length; i++) {
		divsToDisplay[i].classList.remove('hide');
		//divsToHide[i].classList.add('displayAllIMG');
	}
	document.getElementsByClassName('posTop')[0].style.display = 'block';
	document.getElementsByClassName('posBottom')[0].style.display = 'block';
}

document.getElementsByClassName('btn_Colored')[0].onclick = function afficherColored(e) {
	e.preventDefault();
	var divsToHide = document.querySelectorAll('.boutiqueIMG .images > div:not(.categ_Colored)');
	var divsToDisplay = document.querySelectorAll('.boutiqueIMG .images > .categ_Colored');

	document.getElementsByClassName('btn_active')[0].classList.remove('btn_active');
	this.classList.add('btn_active');
	for (var i=0; i < divsToHide.length; i++) {
	    divsToHide[i].classList.add('hide');
	}
	for (var i=0; i < divsToDisplay.length; i++) {
		divsToDisplay[i].classList.remove('hide');
		divsToHide[i].classList.add('displayAllIMG');
	}
	document.getElementsByClassName('posBottom')[0].style.display = 'block';
	document.getElementsByClassName('posTop')[0].style.display = 'none';
}

// MODALS

//GESTION DE L'OUVERTURE DES MODALS
var btnModals = document.querySelectorAll("[data-toggle='modal']"); //Récupère tous les boutons qui doivent ouvrir une modal
for (var i=0; i < btnModals.length; i++) { //Pour chacun des boutons
	btnModals[i].onclick = function afficherModal(e){ //Quand on clique sur ces boutons
		e.preventDefault(); //Ne pas exécuter l'action par défaut
		var modalToDisplay = this.getAttribute("data-target"); //Récupération de la modal à afficher
		afficherModalById(modalToDisplay);
	}
}

//GESTION DES MODALS POUR ACHAT
var btnModalsAchats = document.querySelectorAll("[data-target='#shopModal']");
for(var i=0; i < btnModalsAchats.length; i++) {
	btnModalsAchats[i].onclick = function getInfosModalAchats(e) {
		e.preventDefault();
		var modalToDisplay = this.getAttribute("data-target");
		var infosParent = this.parentElement.parentElement;
		var nomSabre = infosParent.querySelectorAll('h5')[0].innerHTML;
		var prixSabre = infosParent.querySelectorAll('.box a:first-child')[0].innerHTML;

		var nomSabreAct = document.querySelectorAll("#shopModal .title-plumbus");
		nomSabreAct[0].innerHTML = nomSabre;

		var prixSabreAct = document.querySelectorAll("#shopModal .price-plumbus");
		prixSabreAct[0].innerHTML = prixSabre;

		afficherModalById(modalToDisplay);
	}
}

//GESTION DES MODALS POUR POSTES
titresPostes = new Array("Secretary", "Salesperson", "Accountant");
descsPostes = new Array("We are looking for a Secretary to improve our organization", "We are looking for a Salesperson to enlarge our sales department.", "We are looking for an Accountant to help us with the paperwork.");

var btnModalsPostes = document.querySelectorAll("[data-target='#posteModal']");
for(var i=0; i < btnModalsPostes.length; i++) {
	btnModalsPostes[i].onclick = function getInfosModalPostes(e) {
		e.preventDefault();
		var modalToDisplay = this.getAttribute("data-target");
		var idPoste = this.getAttribute("data-poste");

		var titrePostAct = document.querySelectorAll("#posteModal .title-poste");
		titrePostAct[0].innerHTML = titresPostes[idPoste];

		var descPostAct = document.querySelectorAll("#posteModal .description-poste");
		descPostAct[0].innerHTML = descsPostes[idPoste];

		afficherModalById(modalToDisplay);
	}
}

function afficherModalById(idModal) { //On crée une fonction pour pouvoir être modulable !
	var modalsToHide = document.querySelectorAll('.modal-open'); //Récupération de la liste des modals à cacher
	for (var i=0; i < modalsToHide.length; i++) { //Pour chaque modal à cacher
		modalsToHide[i].classList.remove('modal-open'); //Leur retirer la classe qui leur permet de s'afficher
		document.body.classList.remove('modalIsOpen');
	}
	if(idModal !== null) {
		document.querySelectorAll(idModal)[0].classList.add('modal-open');
		document.body.classList.add('modalIsOpen');
		//GESTION DE LA FERMETURE DES MODALS
		document.querySelectorAll(idModal)[0].onclick = function(e) {
			if(e.target.className == document.querySelectorAll(idModal)[0].className || e.target.className == "close") {
				document.querySelectorAll(idModal)[0].classList.remove('modal-open');
				document.body.classList.remove('modalIsOpen');
			}
		}
	}
}

/*
TO-DO : Mettre les commentaires en anglais
*/
