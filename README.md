# StratchOffMap
 
## Overview

This project is an interactive world map that allows users to click on different countries to highlight them and keep track of the clicked places. The application uses HTML, CSS, and JavaScript to provide an engaging user experience.

## Features

- **Interactive SVG World Map**: Hover over countries to see their names, and click to toggle their selection.
- **Persistent State**: Selected countries are saved in local storage, so they remain highlighted even after the page is refreshed.
- **Responsive Design**: The layout adjusts to different screen sizes, stacking vertically on smaller screens.
- **Hover Info**: Displays country names when hovered over.

## File Structure

.

├── index.html

├── styles.css

├── includedCountries.JSON

└── mapInteractions.js

## Getting Started

### Prerequisites

- A modern web browser
- A local server (optional for serving HTML files)

### Installation

1. Clone the repository to your local machine
2. Navigate to the project directory:

### Usage

1. Open the `index.html` file in your web browser
2. Interact with the world map by hovering over and clicking on different countries. The selected countries will be highlighted in blue, and a list of clicked places will be displayed on the right.

## Code Explanation

### HTML (`index.html`)

- Contains the structure of the page, including the title, main container, SVG world map, hover info, and clicked places list.
- Links to the CSS and JavaScript files.

### CSS (`styles.css`)

- Styles for the entire application, including the layout, colors, hover effects, and responsiveness.

### JSON (`includedCountries.css`)

- A json list of all countries included in the svg from https://simplemaps.com/world

### JavaScript (`mapInteractions.js`)

- Functions for loading and saving clicked places to local storage.
- Event listeners for mouseover, mouseout, and click events on the SVG paths.
- Functions to update the colors of clicked places and the list of clicked places.

## Customization

### Changing Colors

To change the default and clicked colors of the countries, modify the `fill` properties in the CSS and JavaScript files:
- Default color: `.world-map path { fill: green; }`
- Clicked color: `country.style.fill = 'blue';` in `mapInteractions.js`

### Adding More Features

Feel free to extend the functionality by adding more features such as:
- Displaying additional information about each country.
- Implementing different ways to visualize the data.
- Adding animations or transitions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is open-source and available under the MIT License.

## Acknowledgements

- The SVG world map was created using simpleMaps[https://simplemaps.com/resources/svg-world].
- Inspiration and guidance from various online tutorials and documentation.
