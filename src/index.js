import L from "leaflet";
import bycatch from "./images/bycatch.jpg";
import westsu from "./images/westsu.jpg";

// map initialization
const map = L.map('map', {
    center: {lat: 64, lng: -154},
    zoom: 3.5,
});
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let markerPopupData = [
    { // Bering Sea
        lat: 60, lng: -171,
        header: 'Stop Wasteful Bycatch',
        imgSrc: bycatch,
        imgAlt: 'Docked trawl vessels',
        learnMoreLink: '',
        takeActionLink: 'https://salmonstate.org/bycatch'
    },
    { // Susitna River
        lat: 63, lng: -147,
        header: 'Defend the West Su',
        imgSrc: westsu,
        imgAlt: 'Individual reeling in fish on riverside',
        learnMoreLink: 'https://westsuwild.org/',
        takeActionLink: 'https://westsuwild.org/take-action'
    },
    { // Juneau
        lat: 58, lng: -134,
        header: 'Oppose Transboundary Mining',
        imgSrc: '',
        imgAlt: '',
        learnMoreLink: 'https://salmonbeyondborders.org/',
        takeActionLink: 'https://salmonbeyondborders.org/take-action'
    },
    { // Bristol Bay
        lat: 57, lng: -159,
        header: 'Defend Bristol Bay',
        imgSrc: '',
        imgAlt: '',
        learnMoreLink: 'https://bristolbayforever.org/',
        takeActionLink: 'https://bristolbayforever.org/legislative-protections/'
    },
    { // Tongass Forest
        lat: 57, lng: -135,
        header: 'Protect Tongass National Forest',
        imgSrc: '',
        imgAlt: '',
        learnMoreLink: '',
        takeActionLink: 'https://secure.ngpvan.com/sMkVxE-lJ06voF5K6eHHqg2'
    }
];

function generateMarkerPopup(data) {
    const marker = L.marker([data.lat, data.lng]).addTo(map);
    const popup = L.popup().setContent(
        `<div class='tooltip'>
            <h2>${data.header}</h2>
            <img src='${data.imgSrc}' alt='${data.imgAlt}'></img>
            <p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            ${data.learnMoreLink ? `<a class='learn-more' href='${data.learnMoreLink}' target='_blank'>Learn More</a>` : ''}
            <button class='take-action'><a href=${data.takeActionLink}target='_blank'>Take Action</a></button>
        </div>`
    );
    marker.bindPopup(popup);
    marker.on('mouseover', () => marker.openPopup());
}

function generateAllMarkerPopups() {
    markerPopupData.forEach(data => generateMarkerPopup(data));
}

generateAllMarkerPopups();
