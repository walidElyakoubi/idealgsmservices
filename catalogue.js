document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("cat");

    const categoryTitle = document.getElementById("category-title");
    if (category) {
        // Afficher le nom de la catégorie avec la première lettre en majuscule
        categoryTitle.textContent = "Produits de la catégorie : " + category.replace(/-/g, " ");
    } else {
        categoryTitle.textContent = "Tous les produits";
    }

    // Exemple de données produits pour chaque catégorie
    const productsData = {
        "kit-sans-fil": [
            { id: 1, name: "Kit sans fil X1", image: "images/kit-sans-fil.jpg", description: "Un kit sans fil de qualité.", price: "49,99€" },
            { id: 2, name: "Kit sans fil Y2", image: "images/kit-sans-fil2.jpg", description: "Expérience sans fil ultime.", price: "59,99€" }
        ],
        "kit-bluetooth": [
            { id: 3, name: "Kit Bluetooth Pro", image: "images/kit-bluetooth.jpg", description: "Connectivité Bluetooth avancée.", price: "39,99€" }
        ],
        "chargeurs": [
            { id: 4, name: "Chargeur Rapide 20W", image: "images/chargeurs.jpg", description: "Charge rapide pour tous vos appareils.", price: "29,99€" }
        ],
        "cables": [
            { id: 5, name: "Câble USB-C 1m", image: "images/cables.jpg", description: "Câble durable et rapide.", price: "9,99€" }
        ],
        "anti-casse": [
            { id: 6, name: "Protection Anti-casse", image: "images/anti-casse.jpg", description: "Protection efficace contre les chocs.", price: "19,99€" }
        ],
        "coques": [
            { id: 7, name: "Coque en silicone", image: "images/coque-silicone.jpg", description: "Coque en silicone élégante et protectrice.", price: "14,99€" }
        ]
    };

    const container = document.getElementById("products-container");
    
    // Si une catégorie est spécifiée, on affiche uniquement les produits de cette catégorie
    if (category && productsData[category]) {
        productsData[category].forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-item");
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.image}" alt="${product.name}">
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
                <a href="produit.html?id=${product.id}" class="btn">Voir le détail</a>
            `;
            container.appendChild(productDiv);
        });
    } else {
        // Si aucune catégorie n'est spécifiée ou qu'il n'y a pas de produits dans cette catégorie, afficher tous les produits
        Object.keys(productsData).forEach(categoryKey => {
            productsData[categoryKey].forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product-item");
                productDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.description}</p>
                    <p class="price">${product.price}</p>
                    <a href="produit.html?id=${product.id}" class="btn">Voir le détail</a>
                `;
                container.appendChild(productDiv);
            });
        });
    }
});
