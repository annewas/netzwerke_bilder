const card = [
    {
    title: "Projektmerkmale",
    image: "images/projekt_merkmale.jpg",
    },
    {
    title: "Erfolgsfaktoren Projekt",
    image: "images/projekt_erfolgsfaktoren.jpg",
    },
    {
    title: "magisches Dreieck",
    image: "images/magischesDreieck.jpg",
    },
    {
    title: "Lastenheft",
    image: "images/lastenheft.jpg",
    },
    {
    title: "Pflichtenheft",
    image: "images/pflichtenheft.jpg",
    },
    {
    title: "Linienorganisation",
    image: "images/linienorga.jpg",
    },
    {
    title: "Stabsorganisation",
    image: "images/stabsorga.jpg",
    },
    {
    title: "Matrixorganisation",
    image: "images/matrixorga.jpg",
    },
    {
    title: "Wasserfallmodell",
    image: "images/wasserfall.jpg",
    },
    {
    title: "erweitertes Wasserfallmodell",
    image: "images/wasserfall_erweitert.jpg",
    },
    {
    title: "Spiralmodell",
    image: "images/spiralmodell.png",
    },
    {
    title: "V-Modell",
    image: "images/vmodell.jpg",
    },
];

const container = document.getElementById("container");
let currentCardIndex = 0;

const showCard = () => {
console.log(card.length)
container.innerHTML = ''; // Leert den Container
const item = card[currentCardIndex]; //aktuelle Karte 

const cardElement = document.createElement("div"); //Element für Text anlegen
cardElement.classList.add("card"); //Klasse für CSS-Sytling
cardElement.innerHTML = currentCardIndex+1 + "/" + card.length + "<br>" + "<br>" + item.title; //Text laden

//Karte "drehen"
cardElement.addEventListener("click", () => {
    if (cardElement.innerHTML === currentCardIndex+1 + "/" + card.length + "<br>" + "<br>" + item.title) {
        cardElement.innerHTML = currentCardIndex+1 + "/" + card.length + "<br>" + "<br>";
        //Bild anzeigen
        const imgElement = document.createElement("img");
        imgElement.src = item.image;
        imgElement.alt = item.title;
        imgElement.style.maxWidth = "100%";
        cardElement.appendChild(imgElement);
    } else {
        cardElement.innerHTML = currentCardIndex+1 + "/" + card.length + "<br>" + "<br>" + item.title;
    }
});

container.appendChild(cardElement);

const backButton = document.createElement("button");
backButton.textContent = "Zurück";
//backButton.classList.add("button");
backButton.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex - 1) % card.length;
    showCard();
});

container.appendChild(backButton);

// Buttons erstellen
const nextButton = document.createElement("button");
nextButton.textContent = "Weiter";
//nextButton.classList.add("button");
nextButton.addEventListener("click", () => {
    currentCardIndex = (currentCardIndex + 1) % card.length;
    showCard();
});

container.appendChild(nextButton);



/* container für die Buttons, damit sie nebeneinander angeordnet werden können (hier stattdessen im CSS über inline-block gelöst)
const buttonContainer = document.createElement("div")
buttonContainer.classList.add("buttonContainer")
buttonContainer.appendChild(nextButton);
buttonContainer.appendChild(backButton);

container.appendChild(buttonContainer) */


};

// Erste Karte anzeigen
showCard();
