# Weather Application

A modern weather application built with React and Vite that allows users to search for weather information for any city.
Build using Open Weather API

## Features

- **City Search**: Search weather information for any city worldwide
- **Real-time Weather Data**: Displays current weather conditions including temperature, humidity, and more
- **Loading State**: Shows a loading animation while fetching data
- **Error Handling**: Displays user-friendly error messages when searches fail
- **Responsive Design**: Clean and responsive UI for a better user experience

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: CSS
- **Linting**: ESLint

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── App.jsx              # Main application component
├── Components/
│   ├── SearchForm.jsx   # Weather search input component
│   ├── WeatherCard.jsx  # Displays weather information
│   ├── LoadingPage.jsx  # Loading state display
│   ├── StatusMessage.jsx # Status notifications
│   └── ErrorLandingPage.jsx # Error display
├── App.css              # Main styling
└── index.css            # Global styles
```

## How to Use

1. Enter a city name in the search form
2. Click search or press Enter
3. View the weather information for that city
4. Handle any errors gracefully with helpful messages
