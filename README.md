# Weather Application

A responsive weather application built using React and Vite. This app fetches real-time weather data from the OpenWeatherMap API and provides weather details such as temperature, humidity, wind speed, and a descriptive forecast for a given city.

## Features

- Responsive design optimized for both desktop and mobile devices.
- Search functionality to query weather data for any city.
- Displays temperature, humidity, wind speed, and city information.
- Fetches live data from OpenWeatherMap API.
- Simple and intuitive user interface.

## Prerequisites

Ensure you have the following installed on your local development environment:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (package managers)
- A text editor or IDE like [Visual Studio Code](https://code.visualstudio.com/)

## Installation

Follow these steps to run the application locally:

1. Clone the repository:

   git clone https://github.com/your-username/weather-app.git
   cd weather-app

2. Install dependencies:

   npm install

   # OR

   yarn install

3. Add your OpenWeatherMap API key:

   - Go to [OpenWeatherMap](https://openweathermap.org/) and sign up to get an API key.
   - Open the `Weather` component located in the `src` directory.
   - Replace the placeholder API key in the URL with your own:

     const { data, loading, errorMsg } = useFetchHook(
     `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=YOUR_API_KEY`
     );

4. Start the development server:

   npm run dev

   # OR

   yarn dev

5. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

1. **Search for a City:**

   - Enter the name of a city in the search bar and press Enter or click the search icon.

2. **Responsive View:**

   - The application is fully responsive. On smaller screens, the weather details span the full width of the container.

3. **Error Handling:**
   - If a city is not found or there is an error with the API, an error message will be displayed.

## Customization

- **Styling:**
  Modify styles in the `src/assets/styles.css` file.

- **API Configuration:**
  Update the OpenWeatherMap API URL and parameters in the `Weather.jsx` file to suit your requirements.

## Deployment

To deploy the application for production:

1. Build the project:

   npm run build

   # OR

   yarn build

2. Serve the production build:

   npm run preview

   # OR

   yarn preview

3. Deploy the `dist/` folder to your preferred hosting service (e.g., Netlify, Vercel, or AWS).

## License

This project is licensed under the MIT License. Feel free to modify and use it as per your needs.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/)
- [Poppins Font](https://fonts.google.com/specimen/Poppins)
