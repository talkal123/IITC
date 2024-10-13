console.log('main.js');


const formElement = document.querySelector("form")
const containerElement = document.querySelector(".container")
const listBtnElement = document.querySelector("#get-list")
const ulElement = document.getElementById("name-list")

// console.log(formElement);
// console.log(containerElement);
// console.log(listBtnElement);
console.log(ulElement);


function formSubmit(formObject) {
    // בנה את ה-URL
    const url = `https://random-d.uk/api/v2/${formObject.number}.jpg`; // השתמש במרכאות

    console.log(url);

    // צור אלמנט תמונה
    const imageElement = document.createElement("img");
    imageElement.src = url;

    // נקה את התוכן הקודם של containerElement
    containerElement.innerHTML = "";
    
    // הוסף את התמונה לאלמנט
    containerElement.appendChild(imageElement);
}

const renderNames = (namesArray) => {
    namesArray.forEach(name => {
        const liElement = document.createElement("li")
        liElement.innerText = name
        ulElement.appendChild(liElement)
        // console.log(name);
    });
}

const getDuckList = () => {
    const proxyUrl = "https://corsproxy.io/?";
    const targetUrl = 'https://random-d.uk/api/v2/list';

    fetch(proxyUrl + encodeURIComponent(targetUrl))
        .then(response => response.json())
        .then(data => {
            // console.log('Images:', data.images);
            // console.log('GIFs:', data.gifs);
            renderNames(data.gifs);
        })
        .catch(error => {
            console.error('Error fetching duck list:', error);
        });
}

formElement.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(formElement);
    // console.log(formData);

    const formObject = Object.fromEntries(formData);
    // console.log(formObject);

    formSubmit(formObject);
})

listBtnElement.addEventListener("click", () => {
    getDuckList()
})