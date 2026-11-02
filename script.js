// ==================================
// HORLOGE
// ==================================

function mettreAJourHeure() {

    const maintenant = new Date();

    const heures = maintenant
        .getHours()
        .toString()
        .padStart(2, "0");

    const minutes = maintenant
        .getMinutes()
        .toString()
        .padStart(2, "0");

    document.getElementById("heure").textContent =
        heures + ":" + minutes;
}


mettreAJourHeure();

setInterval(mettreAJourHeure, 1000);


// ==================================
// APPARITION DES SECTIONS
// ==================================

const sections = document.querySelectorAll(".section");


const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function(section) {

    observer.observe(section);

});


// ==================================
// NAVIGATION ACTIVE
// ==================================

const liensNavigation =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function() {

    let sectionActuelle = "";

    sections.forEach(function(section) {

        const positionSection =
            section.offsetTop - 250;

        if (window.scrollY >= positionSection) {

            sectionActuelle = section.id;

        }

    });


    liensNavigation.forEach(function(lien) {

        lien.classList.remove("active");

        if (
            lien.getAttribute("href") ===
            "#" + sectionActuelle
        ) {

            lien.classList.add("active");

        }

    });

});
// ==================================
// OUVERTURE DES PROJETS
// ==================================

const projets = document.querySelectorAll(".projet");


projets.forEach(function(projet) {

    const entete = projet.querySelector(".projet-entete");


    entete.addEventListener("click", function() {

        // Vérifie si le projet est déjà ouvert
        const estOuvert = projet.classList.contains("ouvert");


        // Ferme les autres projets
        projets.forEach(function(autreProjet) {

            autreProjet.classList.remove("ouvert");

        });


        // Si celui-ci était fermé, on l'ouvre
        if (!estOuvert) {

            projet.classList.add("ouvert");

        }

    });

});