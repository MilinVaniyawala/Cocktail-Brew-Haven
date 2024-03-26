# Cocktail Explorer

Cocktail Explorer is a web application that allows users to explore a wide variety of cocktails, find detailed information about each cocktail, and discover nearby stores where they can purchase ingredients.

## Files

- **views/layouts/header.ejs**: Defines the header section of the HTML layout, including navigation links and meta tags.
- **views/layouts/footer.ejs**: Defines the footer section of the HTML layout, including copyright information and script tags.
- **views/index.ejs**: The main landing page of the application, showcasing a welcome section and an about section.
- **views/cocktail/index.ejs**: Displays all cocktails available in the application along with options to filter by alcohol type.
- **views/cocktail/cocktailDetail.ejs**: Provides detailed information about a specific cocktail, including its name, category, alcohol type, glass type, main ingredients, and instructions.
- **views/cocktail/stores.ejs**: Displays nearby stores where users can purchase ingredients for a specific cocktail.
- **config/config.js**: Configuration file containing API endpoints for the Cocktail API and Google Maps API.
- **controllers/indexController.js**: Controller file for the main landing page, rendering the index view.
- **models/cocktail.js**: Model file containing functions to fetch cocktail data, alcohol types, cocktails by alcohol type, cocktail by ID, and nearby stores.
- **routes/cocktailRoute.js**: Express routes for handling requests related to cocktails, including displaying all cocktails, filtering by alcohol type, displaying cocktail details, and finding nearby stores.
- **routes/indexRoute.js**: Express route for the home page.
- **app.js**: Main entry point of the application, sets up the Express server, defines routes, and configures middleware.

## Technologies Used

- **HTML**: Used for structuring the web pages.
- **CSS**: Used for styling the web pages.
- **JavaScript**: Used for interactivity and dynamic content.
- **EJS (Embedded JavaScript)**: Used as a templating language to generate HTML markup with JavaScript.
- **Node.js**: Used for server-side JavaScript execution.
- **Express.js**: Used as the web application framework for Node.js.
- **Axios**: Used for making HTTP requests.
- **Bootstrap**: Used for responsive design and UI components.
- **dotenv**: Used for environment variable management.

## Setup

To run the Cocktail Explorer web application locally, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js if you haven't already.
3. Install the required dependencies by running `npm install`.
4. Set up your environment variables by creating a `.env` file and adding necessary variables (e.g., `PORT`, `COCKTAIL_API`, `GOOGLE_API`).
5. Start the server by running `npm start`.
6. Access the application in your web browser at `http://localhost:PORT` (replace PORT with the appropriate port number).

## Usage

- Navigate to the homepage (`/`) to get started.
- Explore the different cocktails available by clicking on the "Cocktails" link in the navigation menu.
- Click on a specific cocktail to view detailed information about it, including its ingredients and instructions.
- Use the "Find Nearby Stores" link to locate stores where you can purchase ingredients for a specific cocktail.

## Credits

- **Image Credits**: Images used in the application are sourced from Unsplash and Icons8.
- **Data Credits**: Data about cocktails and stores may be sourced from external APIs or databases.
