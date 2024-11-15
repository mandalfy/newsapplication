# News Fetcher

A simple web application that fetches and displays top news headlines from an external API. 

## Project Structure

- **index.html** - The main HTML file that structures the webpage.
- **main.js** - Contains JavaScript code for fetching and displaying news articles.
- **styles.css** - Defines the styling for the webpage.
- **README.md** - This file, providing information about the project.

## Features

- Fetches the latest news articles using the News API.
- Displays each article with an image, title, description, and link to the full article.
- Shows a fallback message when no articles are available or if there's an error.

## How to Use

1. Clone the repository.
2. Open `index.html` in a web browser.
3. The app will automatically load and display the top news headlines.

## Setup

This project uses the [News API](https://newsapi.org/) to fetch articles. You’ll need an API key to access the news data.

1. Replace the `apiKey` parameter in `main.js` with your News API key:
   ```javascript
   const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY");
   ```

2. Run the app by opening `index.html` in a browser.

## Dependencies

- **News API** - A REST API to fetch real-time news data.

## Troubleshooting

- If the news articles don't load, make sure your API key is correct.
- Check the console for any error messages.

## License

This project is open-source. Feel free to use and modify it as per your requirements.
