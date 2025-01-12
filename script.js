const card = [
    {
    title: "Adhoc (WLAN)",
    image: "images/adhoc.png",
    },
    {
    title: "Infrastructure (WLAN)",
    image: "images/infrastructure_WLAN.png",
    },
    {
    title: "Point-to-Point WLAN",
    image: "images/pointopoint_wlan.png",
    },
    {
    title: "DHCP Anfrage",
    image: "images/dhcp.png",
    },
    {
    title: "DORA DHCP",
    image: "images/dora.png",
    },
    {
    title: "DHCP Leaseerneuerung",
    image: "images/leaseerneuerung.png",
    },
    {
    title: "DNS Domänen",
    image: "images/dna.png",
    },
    {
    title: "DNS Namensauflösung",
    image: "images/dns2.png",
    },
    {
    title: "Simplex, Half- und Fullduplex",
    image: "images/duplex.png",
    },
    {
    title: "TCP Handshake",
    image: "images/handshake.png",
    },
    {
    title: "IPv4 Header",
    image: "images/ipv4_header.png",
    },
    {
    title: "IPv6 Header",
    image: "images/ipv6_header.png",
    },
    {
    title: "Vielfachzugriffverfahren",
    image: "images/multiplex.png",
    },
    {
    title: "Netzausdehnung",
    image: "images/netzausdehnung.png",
    },
    {
    title: "Netzklassen",
    image: "images/netzklassen.png",
    },
    {
    title: "OSI-Modell",
    image: "images/osi.png",
    },
    {
    title: "Ports",
    image: "images/ports.png",
    },
    {
    title: "TCP (Protokolle)",
    image: "images/tcp.png",
    },
    {
    title: "UDP (Protokolle)",
    image: "images/udp.png",
    },
    {
    title: "TCP/IP",
    image: "images/tcp_ip.png",
    },
    {
    title: "Topologien",
    image: "images/topologien.png",
    },
    {
    title: "TCP Verbindungsaufbau",
    image: "images/verbindungsaufbau.png",
    },
    {
    title: "strukturierte Verkabelung",
    image: "images/verkabelung.png",
    },
    {
    title: "Paketvermittlung/Leitungsvermittlung",
    image: "images/vermittlung.png",
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
