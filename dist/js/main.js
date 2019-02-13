// Bouton
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll("nav-item"); // Permet de choisir tous les boutons (Menu, a propos...)

// Set Initial State of Menu
let showMenu = false; //menu fermé

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    //si le menu n'est pas fermé (donc ouvert) alors on affiche tout
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true; // Car le menu devrait être ouvert mtn
  } else {
    //Si le menu est ouvert et qu'on le ferme on veut faire tout disparaitre (inverse du if d'au dessus)
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false; //Ferme et cache le menu ainsi que les <a>
  }
}

// Sortir de l'image en appuyant sur espace
function fermerESC(evt) {
  if (evt.keyCode == 27) {//27 is the code for escape
      windows.close();
  }
}
