document.addEventListener("DOMContentLoaded", function () {
    // Liste dynamique des offres
    const offres = [
        {
            name: "Kit Bluetooth X5",
            image: "images/kit-bluetooth.jpg",
            description: "Offre spéciale : 30% de réduction sur ce kit Bluetooth.",
            prix: "29.99€ au lieu de 42.99€"
        },
        {
            name: "Chargeur Rapide 20W",
            image: "images/chargeurs.jpg",
            description: "Promotion flash : Chargeur rapide avec -25% !",
            prix: "14.99€ au lieu de 19.99€"
        },
        {
            name: "Câble USB-C Ultra-Résistant",
            image: "images/cables.jpg",
            description: "Profitez de 2 câbles achetés = 1 offert !",
            prix: "9.99€"
        },
        {
            name: "Verre Trempé Premium",
            image: "images/anti-casse.jpg",
            description: "Protection écran -20% aujourd’hui seulement !",
            prix: "7.99€ au lieu de 9.99€"
        }
    ];

    // Sélection du conteneur des offres
    const offresContainer = document.getElementById("offres-container");

    // Générer les offres dynamiquement
    offres.forEach(offre => {
        const offreDiv = document.createElement("div");
        offreDiv.classList.add("offre-item");
        offreDiv.innerHTML = `
            <img src="${offre.image}" alt="${offre.name}">
            <h3>${offre.name}</h3>
            <p>${offre.description}</p>
            <p class="prix">${offre.prix}</p>
            <a href="contact.html" class="btn-acheter">Commander</a>
        `;
        offresContainer.appendChild(offreDiv);
    });
});
