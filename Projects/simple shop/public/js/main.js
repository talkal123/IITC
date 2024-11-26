const products = [
    { name: "Product 1", price: 50, description: "This is the first product" },
    { name: "Product 2", price: 75, description: "This is the second product" },
    { name: "Product 3", price: 100, description: "This is the third product" },
    { name: "Product 4", price: 150, description: "This is the fourth product" },
    { name: "Product 5", price: 200, description: "This is the fifth product" },
    { name: "Product 6", price: 250, description: "This is the sixth product" }
];
let cart = []; // // מערך ריק שיכיל את המוצרים שנוספו לעגלה



function displayProducts() { // פונקציה להציג את המוצרים בדף
    const productDivs = document.querySelectorAll('.product'); // בוחר את כל ה-divים עם ה-class 'product'
    for (let i = 0; i < productDivs.length; i++) { // עבור כל div שנבחר, עדכן את התוכן שלו עם פרטי המוצר
        const product = products[i]; // בחר את המוצר מהמערך לפי אינדקס
        const productDiv = productDivs[i]; // בחר את ה-div המתאים

        productDiv.innerHTML =         // עדכון התוכן של ה-div עם פרטי המוצר וכפתור הוספה לעגלה
        ` 
            <h2>${product.name}</h2> <!-- שם המוצר -->
            <p>Price: $${product.price}</p> <!-- מחיר המוצר -->
            <p>${product.description}</p> <!-- תיאור המוצר -->
            <button onclick="addToCart(${i})">Add to Cart</button> <!-- כפתור להוספה לעגלה -->
        `;
    }
}


function addToCart(index) { // פונקציה להוסיף מוצר לעגלה
    // בחר את ה-div שבו יוצגו פרטי המוצרים בעגלה
    const product = products[index]; // בחר את המוצר מהמערך לפי אינדקס
    cart.push(product); // הוסף את המוצר לעגלת הקניות
    updateCart(); // עדכן את תצוגת עגלת הקניות
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    cartItemsDiv.innerHTML = ''; // ניקוי התוכן הקודם
    let total = 0; // משתנה לסכום הכולל של העגלה

    cart.forEach((product, index) => { // עבור כל מוצר בעגלה, הוסף אותו לתצוגה
        cartItemsDiv.innerHTML += `
            <div>
                <h3>${product.name}</h3> <!-- שם המוצר -->
                <p>Price: $${product.price}</p> <!-- מחיר המוצר -->
                <button onclick="removeFromCart(${index})">Remove from Cart</button> <!-- כפתור להסרת מוצר מהעגלה -->
            </div>
        `;
        total += product.price; // הוסף את מחיר המוצר לסכום הכולל
    });

    cartTotalDiv.innerHTML = `<h3>Total: $${total}</h3>`; // עדכן את תצוגת הסכום הכולל בעגלה
}


function removeFromCart(index) { // פונקציה להסרת מוצר מהעגלה
    cart.splice(index, 1); // הסרת הפריט מהעגלה
    updateCart(); // עדכון עגלת הקניות
}


displayProducts(); // הצגת המוצרים בדף
