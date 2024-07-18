// Function to load clicked places from local storage
function loadClickedPlaces() {
    const clickedPlaces = localStorage.getItem('clickedPlaces');
    return clickedPlaces ? JSON.parse(clickedPlaces) : [];
}

// Function to save clicked places to local storage
function saveClickedPlaces(places) {
    localStorage.setItem('clickedPlaces', JSON.stringify(places));
}

// Function to update the colors of clicked places
function updateClickedPlacesColors() {
    const clickedPlaces = loadClickedPlaces();
    document.querySelectorAll('.world-map path').forEach(function(country) {
        const countryClass = country.getAttribute('class');
        const countryName = country.getAttribute('name');
        const identifier = countryClass || countryName;

        if (clickedPlaces.includes(identifier)) {
            country.style.fill = 'blue'; // Change color for clicked places
        } else {
            country.style.fill = 'green'; // Default color
        }
    });
}

// Function to update the list of clicked places
function updateClickedPlacesList() {
    const clickedPlaces = loadClickedPlaces();
    const clickedPlacesList = document.getElementById('clickedPlacesList');
    clickedPlacesList.innerHTML = '';

    clickedPlaces.forEach(function(place) {
        const placeItem = document.createElement('div');
        placeItem.textContent = place;
        clickedPlacesList.appendChild(placeItem);
    });
}

// Initialize clicked places and update colors and list
updateClickedPlacesColors();
updateClickedPlacesList();

document.querySelectorAll('.world-map path').forEach(function(country) {
    country.addEventListener('mouseover', function(event) {
        const hoverInfo = document.getElementById('hoverInfo');
        const countryClass = this.getAttribute('class');
        const countryName = this.getAttribute('name');

        hoverInfo.textContent = countryClass || countryName || 'Unknown';
        hoverInfo.style.display = 'block';
    });

    country.addEventListener('mouseout', function() {
        const hoverInfo = document.getElementById('hoverInfo');
        hoverInfo.style.display = 'none';
    });

    country.addEventListener('click', function() {
        const countryClass = this.getAttribute('class');
        const countryName = this.getAttribute('name');
        const identifier = countryClass || countryName;

        let clickedPlaces = loadClickedPlaces();
        
        if (clickedPlaces.includes(identifier)) {
            clickedPlaces = clickedPlaces.filter(place => place !== identifier);
        } else {
            clickedPlaces.push(identifier);
        }

        saveClickedPlaces(clickedPlaces);
        updateClickedPlacesColors();
        updateClickedPlacesList();
    });
});
