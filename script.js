document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Empêche le lien de recharger la page
        dropdownMenu.classList.toggle("show");
    });

    // Fermer le menu si on clique ailleurs
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove("show");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Afficher le menu lors du survol
    dropdown.addEventListener('mouseover', () => {
        dropdownMenu.style.display = 'block';
    });

    // Cacher le menu lorsqu'on quitte le survol
    dropdown.addEventListener('mouseout', () => {
        dropdownMenu.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.classList.add('show');  // Ajoute la classe pour afficher
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.classList.remove('show'); // Retire la classe pour cacher
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const qrButton = document.getElementById("generate-qr");
    const qrCanvas = document.getElementById("qr-canvas");
    const qrImage = document.getElementById("qr-image");
    const downloadLink = document.getElementById("download-qr");

    qrButton.addEventListener("click", function() {
        // Récupérer le nom du produit depuis l'URL
        const params = new URLSearchParams(window.location.search);
        const productName = params.get("product") || "Produit inconnu";

        // Générer un code unique avec timestamp
        const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
        const uniqueCode = `Ideal GSM Service | ${productName} | ${timestamp}`;

        // Générer le QR Code
        const qr = new QRious({
            element: qrCanvas,
            value: uniqueCode,
            size: 200
        });

        // Afficher l'image du QR Code
        qrImage.src = qrCanvas.toDataURL("image/png");
        qrImage.style.display = "block";

        // Ajouter le lien de téléchargement
        downloadLink.href = qrCanvas.toDataURL("image/png");
        downloadLink.style.display = "block";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuList = document.getElementById("menu-list");

    menuToggle.addEventListener("click", function() {
        menuList.classList.toggle("active");
    });
});
