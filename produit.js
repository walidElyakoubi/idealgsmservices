document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const allProducts = {
        1: { name: "Produit 1", image: "images/produit-1.jpg", description: "Description du produit 1.", price: "11.99€" },
        2: { name: "Produit 2", image: "images/produit-2.jpg", description: "Description du produit 2.", price: "12.99€" },
        3: { name: "Produit 3", image: "images/produit-3.jpg", description: "Description du produit 3.", price: "13.99€" },
        4: { name: "Produit 4", image: "images/produit-4.jpg", description: "Description du produit 4.", price: "14.99€" },
        5: { name: "Produit 5", image: "images/produit-5.jpg", description: "Description du produit 5.", price: "15.99€" },
        6: { name: "Produit 6", image: "images/produit-6.jpg", description: "Description du produit 6.", price: "16.99€" },
        7: { name: "Produit 7", image: "images/produit-7.jpg", description: "Description du produit 7.", price: "17.99€" },
        8: { name: "Produit 8", image: "images/produit-8.jpg", description: "Description du produit 8.", price: "18.99€" },
        9: { name: "Produit 9", image: "images/produit-9.jpg", description: "Description du produit 9.", price: "19.99€" },
        10: { name: "Produit 10", image: "images/produit-10.jpg", description: "Description du produit 10.", price: "10.99€" },
        11: { name: "Produit 11", image: "images/produit-11.jpg", description: "Description du produit 11.", price: "11.99€" },
        12: { name: "Produit 12", image: "images/produit-12.jpg", description: "Description du produit 12.", price: "12.99€" },
        13: { name: "Produit 13", image: "images/produit-13.jpg", description: "Description du produit 13.", price: "13.99€" },
        14: { name: "Produit 14", image: "images/produit-14.jpg", description: "Description du produit 14.", price: "14.99€" },
        15: { name: "Produit 15", image: "images/produit-15.jpg", description: "Description du produit 15.", price: "15.99€" },
        16: { name: "Produit 16", image: "images/produit-16.jpg", description: "Description du produit 16.", price: "16.99€" },
        17: { name: "Produit 17", image: "images/produit-17.jpg", description: "Description du produit 17.", price: "17.99€" },
        18: { name: "Produit 18", image: "images/produit-18.jpg", description: "Description du produit 18.", price: "18.99€" },
        19: { name: "Produit 19", image: "images/produit-19.jpg", description: "Description du produit 19.", price: "19.99€" },
        20: { name: "Produit 20", image: "images/produit-20.jpg", description: "Description du produit 20.", price: "10.99€" },
        21: { name: "Produit 21", image: "images/produit-21.jpg", description: "Description du produit 21.", price: "11.99€" },
        22: { name: "Produit 22", image: "images/produit-22.jpg", description: "Description du produit 22.", price: "12.99€" },
        23: { name: "Produit 23", image: "images/produit-23.jpg", description: "Description du produit 23.", price: "13.99€" },
        24: { name: "Produit 24", image: "images/produit-24.jpg", description: "Description du produit 24.", price: "14.99€" },
        25: { name: "Produit 25", image: "images/produit-25.jpg", description: "Description du produit 25.", price: "15.99€" },
        26: { name: "Produit 26", image: "images/produit-26.jpg", description: "Description du produit 26.", price: "16.99€" },
        27: { name: "Produit 27", image: "images/produit-27.jpg", description: "Description du produit 27.", price: "17.99€" },
        28: { name: "Produit 28", image: "images/produit-28.jpg", description: "Description du produit 28.", price: "18.99€" },
        29: { name: "Produit 29", image: "images/produit-29.jpg", description: "Description du produit 29.", price: "19.99€" },
        30: { name: "Produit 30", image: "images/produit-30.jpg", description: "Description du produit 30.", price: "10.99€" },
        31: { name: "Produit 31", image: "images/produit-31.jpg", description: "Description du produit 31.", price: "11.99€" },
        32: { name: "Produit 32", image: "images/produit-32.jpg", description: "Description du produit 32.", price: "12.99€" },
        33: { name: "Produit 33", image: "images/produit-33.jpg", description: "Description du produit 33.", price: "13.99€" },
        34: { name: "Produit 34", image: "images/produit-34.jpg", description: "Description du produit 34.", price: "14.99€" },
        35: { name: "Produit 35", image: "images/produit-35.jpg", description: "Description du produit 35.", price: "15.99€" },
        36: { name: "Produit 36", image: "images/produit-36.jpg", description: "Description du produit 36.", price: "16.99€" },
        37: { name: "Produit 37", image: "images/produit-37.jpg", description: "Description du produit 37.", price: "17.99€" },
        38: { name: "Produit 38", image: "images/produit-38.jpg", description: "Description du produit 38.", price: "18.99€" },
        39: { name: "Produit 39", image: "images/produit-39.jpg", description: "Description du produit 39.", price: "19.99€" },
        40: { name: "Produit 40", image: "images/produit-40.jpg", description: "Description du produit 40.", price: "10.99€" },
        41: { name: "Produit 41", image: "images/produit-41.jpg", description: "Description du produit 41.", price: "11.99€" },
        42: { name: "Produit 42", image: "images/produit-42.jpg", description: "Description du produit 42.", price: "12.99€" },
        43: { name: "Produit 43", image: "images/produit-43.jpg", description: "Description du produit 43.", price: "13.99€" },
        44: { name: "Produit 44", image: "images/produit-44.jpg", description: "Description du produit 44.", price: "14.99€" },
        45: { name: "Produit 45", image: "images/produit-45.jpg", description: "Description du produit 45.", price: "15.99€" },
        46: { name: "Produit 46", image: "images/produit-46.jpg", description: "Description du produit 46.", price: "16.99€" },
        47: { name: "Produit 47", image: "images/produit-47.jpg", description: "Description du produit 47.", price: "17.99€" },
        48: { name: "Produit 48", image: "images/produit-48.jpg", description: "Description du produit 48.", price: "18.99€" },
        49: { name: "Produit 49", image: "images/produit-49.jpg", description: "Description du produit 49.", price: "19.99€" },
        50: { name: "Produit 50", image: "images/produit-50.jpg", description: "Description du produit 50.", price: "10.99€" },
        51: { name: "Produit 51", image: "images/produit-51.jpg", description: "Description du produit 51.", price: "11.99€" },
        52: { name: "Produit 52", image: "images/produit-52.jpg", description: "Description du produit 52.", price: "12.99€" },
        53: { name: "Produit 53", image: "images/produit-53.jpg", description: "Description du produit 53.", price: "13.99€" },
        54: { name: "Produit 54", image: "images/produit-54.jpg", description: "Description du produit 54.", price: "14.99€" },
        55: { name: "Produit 55", image: "images/produit-55.jpg", description: "Description du produit 55.", price: "15.99€" },
        56: { name: "Produit 56", image: "images/produit-56.jpg", description: "Description du produit 56.", price: "16.99€" },
        57: { name: "Produit 57", image: "images/produit-57.jpg", description: "Description du produit 57.", price: "17.99€" },
        58: { name: "Produit 58", image: "images/produit-58.jpg", description: "Description du produit 58.", price: "18.99€" },
        59: { name: "Produit 59", image: "images/produit-59.jpg", description: "Description du produit 59.", price: "19.99€" },
        60: { name: "Produit 60", image: "images/produit-60.jpg", description: "Description du produit 60.", price: "10.99€" },
        61: { name: "Produit 61", image: "images/produit-61.png", description: "Description du produit 61.", price: "11.99€" },
        62: { name: "Produit 62", image: "images/produit-62.png", description: "Description du produit 62.", price: "12.99€" },
        63: { name: "Produit 63", image: "images/produit-63.png", description: "Description du produit 63.", price: "13.99€" },
        64: { name: "Produit 64", image: "images/produit-64.png", description: "Description du produit 64.", price: "14.99€" },
        65: { name: "Produit 65", image: "images/produit-65.png", description: "Description du produit 65.", price: "15.99€" },
        66: { name: "Produit 66", image: "images/produit-66.png", description: "Description du produit 66.", price: "16.99€" },
        67: { name: "Produit 67", image: "images/produit-67.png", description: "Description du produit 67.", price: "17.99€" },
        68: { name: "Produit 68", image: "images/produit-68.png", description: "Description du produit 68.", price: "18.99€" },
        69: { name: "Produit 69", image: "images/produit-69.png", description: "Description du produit 69.", price: "19.99€" },
        70: { name: "Produit 70", image: "images/produit-70.png", description: "Description du produit 70.", price: "10.99€" },
        71: { name: "Produit 71", image: "images/produit-71.png", description: "Description du produit 71.", price: "11.99€" },
        72: { name: "Produit 72", image: "images/produit-72.png", description: "Description du produit 72.", price: "12.99€" },
        73: { name: "Produit 73", image: "images/produit-73.png", description: "Description du produit 73.", price: "13.99€" },
        74: { name: "Produit 74", image: "images/produit-74.png", description: "Description du produit 74.", price: "14.99€" },
        75: { name: "Produit 75", image: "images/produit-75.png", description: "Description du produit 75.", price: "15.99€" },
        76: { name: "Produit 76", image: "images/produit-76.jpg", description: "Description du produit 76.", price: "16.99€" },
        77: { name: "Produit 77", image: "images/produit-77.jpg", description: "Description du produit 77.", price: "17.99€" },
        78: { name: "Produit 78", image: "images/produit-78.jpg", description: "Description du produit 78.", price: "18.99€" },
    };

    const container = document.getElementById("product-container");

    if (productId && allProducts[productId]) {
        const product = allProducts[productId];
        container.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" style="max-width:300px">
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="catalogue.html" class="btn">Retour au catalogue</a>
        `;
    } else {
        container.innerHTML = "<p>Produit non trouvé.</p>";
    }
});
