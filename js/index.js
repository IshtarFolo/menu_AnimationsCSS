/*==================================
- Animation apres click sur bouton -
====================================*/
/*==============
-   VARIABLES  - 
================*/

let boutons = document.querySelectorAll('div'); //le bouton fait avec le span
let interieurClick = document.querySelectorAll('li.remplissage'); //Recuperation du li a masquer avec clip-path

/*====================================
--      Ecouteurs d'evenements      --
======================================*/
for (i = 0; i < boutons.length; i++)
{
    //On ecoute si le bouton est clique
    boutons[i].addEventListener('mousedown', animer);
    //Ecouteur pour la fin de l'animation
    boutons[i].addEventListener('animationend', arretAnim);
}


/*===============================
-           FONCTIONS           -
=================================*/

/*Fonction qui anime la div .remplissage*/
function animer(event) {
    for (i = 0; i < interieurClick.length; i++)
    {
        //Donne classe clique au li interieur pour animer le clip-path
        interieurClick[i].classList.add('clique');
    }    
}

/*Fonction pour arreter l'animation*/
function arretAnim() {
    for(i = 0; i < interieurClick.length; i++)
    {
        //On enleve la classe .clique apres que l'animation ait pris fin
        interieurClick[i].classList.remove('clique');
    }
}