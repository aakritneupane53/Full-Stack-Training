# Movie Discovery Application

A React-based movie discovery application built with Vite that allows users to search for movies and browse trending content.

## Features

- **Movie Search**: Search for movies by title
- **Trending Movies**: View currently trending movies
- **Movie Grid**: Browse movies in a responsive grid layout
- **Genre Classification**: Movies organized by genres
- **Loading State**: User feedback during data fetching
- **Error Handling**: Graceful error messages and handling

## Tech Stack

- React
- Vite
- CSS
- ESLint

## Installation

```bash
npm install
npm run dev
```

## Project Structure

- `src/App.jsx` - Main application component
- `src/Components/` - Reusable React components
  - `MovieCard.jsx` - Individual movie display
  - `MovieGrid.jsx` - Movie grid layout
  - `Searchbar.jsx` - Search functionality
  - `Trending.jsx` - Trending movies section
  - `Loading.jsx` - Loading indicator
  - `Error.jsx` - Error display
- `src/assets/genres.js` - Genre data

## Usage

1. Launch the application
2. Search for movies or browse trending content
3. View movie details in the grid layout
