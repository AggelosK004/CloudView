☁️ CloudView

CloudView is a modern, responsive weather dashboard built with React and Material UI. It features a stunning "Glassmorphism" aesthetic, real-time weather data, a 5-day forecast, and a personalized favorites system.

🚀 View Live Demo

✨ Features

Real-Time Weather: Fetches current temperature, weather conditions, and icons via the OpenWeatherMap API.

📅 5-Day Prognosis: View a clean summary of the weather for the upcoming week.

❤️ Favorites System: Save your favorite cities to a sidebar drawer for quick access. Data is persisted using LocalStorage.

📱 Fully Responsive:

Mobile: Vertical stacking, simplified layouts, and "native app" feel (no scroll bounce).

Desktop: Expansive row layouts and side-by-side data visualization.

🎨 Glassmorphism UI: A translucent, frosted-glass interface set against a dynamic sky background.

🛡️ Smart Validation: The search bar restricts input to English characters to prevent API errors.

🛠️ Tech Stack

Frontend: React.js (Custom Hooks, Functional Components)

UI Framework: Material UI (MUI)

Data Source: OpenWeatherMap API

State Management: React useState & useEffect + LocalStorage

Styling: CSS3 (Flexbox, Backdrop-Filter)

⚙️ Installation & Setup

If you want to run this project locally on your machine:

Clone the repository:

git clone [https://github.com/AggelosK004/CloudView.git](https://github.com/AggelosK004/CloudView.git)
cd CloudView

Install Dependencies:

npm install

Configure API Key:

Create a file named .env in the root folder.

Add your OpenWeatherMap API key:

REACT_APP_API_KEY=your_api_key_here

Run the App:

npm start

Open http://localhost:3000 to view it in your browser.

📂 Project Structure

The project follows a clean, component-based architecture:

src/
├── components/ # UI Components (View Layer)
│ ├── WeatherDashboard.jsx
│ ├── WeatherDisplay.jsx
│ ├── ForecastDisplay.jsx
│ ├── FavoritesDrawer.jsx
│ ├── SearchBar.jsx
│ └── Footer.jsx
│
├── hooks/ # Custom Hooks (Logic Layer)
│ ├── useWeather.js # API calls and loading state
│ └── useFavorites.js # LocalStorage and favorites logic
│
├── services/ # API Service functions
│ └── WeatherService.jsx
│
└── App.js # Main Orchestrator

🛡️ Security Note

This project uses environment variables (.env) to secure the API key. The .env file is included in .gitignore to prevent accidental exposure in the repository history.

Created by AggelosK004
