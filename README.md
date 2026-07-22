# 🌤 Weather App

A simple and responsive Weather Application built using **HTML**, **CSS**, and **JavaScript** that fetches real-time weather information using the **OpenWeatherMap API**.

Users can search for any city and view the current weather conditions instantly.

---

## 📸 Preview

> Add a screenshot of your application here after completing the project.

Example:

![Weather App Screenshot](images/screenshot.png)

---

## 🚀 Features

- 🔍 Search weather by city name
- 🌡️ Displays current temperature
- 🌥️ Shows weather condition
- 💧 Displays humidity
- 🌬️ Displays wind speed
- 🤒 Shows "Feels Like" temperature
- 📈 Displays atmospheric pressure
- 🌤️ Dynamic weather icon from OpenWeatherMap
- 🎨 Modern Glassmorphism UI
- 📱 Responsive Design

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- OpenWeatherMap API

---

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
├── sky.jpg
└── README.md
```

---

## ⚙️ How It Works

1. User enters the city name.
2. JavaScript captures the input.
3. A request is sent to the OpenWeatherMap API using the Fetch API.
4. The API returns weather information in JSON format.
5. JavaScript extracts the required information.
6. The webpage updates dynamically without reloading.

---

## 📡 API Used

OpenWeatherMap Current Weather API

Example Request

```text
https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=YOUR_API_KEY&units=metric
```

---

## 📄 Sample Response

```json
{
  "name": "Pune",
  "main": {
    "temp": 24.11,
    "humidity": 89,
    "pressure": 1005
  },
  "weather": [
    {
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "wind": {
    "speed": 11.18
  }
}
```

---

## 💻 Installation

Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
```

Open the project

```bash
cd weather-app
```

Run the project

Simply open **index.html** in your browser.

Or use the **Live Server** extension in Visual Studio Code.

---

## 🔑 API Key Setup

1. Create an account on OpenWeatherMap.
2. Generate your API key.
3. Open `script.js`.
4. Replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with

```javascript
const API_KEY = "YOUR_ACTUAL_API_KEY";
```

---

## 📚 Concepts Learned

During this project, I learned:

- Working with REST APIs
- Using the Fetch API
- Async/Await
- Handling JSON responses
- DOM Manipulation
- Event Listeners
- Template Literals
- Updating UI dynamically
- Error Handling
- Responsive Web Design

---

## 🔮 Future Improvements

- 📍 Current Location Weather
- 🌅 Sunrise & Sunset Time
- 🌙 Dark Mode
- 🌤️ 5-Day Weather Forecast
- 🌧️ Dynamic Background based on weather
- ⭐ Search History
- ⌨️ Search on Enter key
- ⏳ Loading Animation
- ❌ Better Error Messages
- 🌎 Country Flag
- 💨 Air Quality Index

---

## 🤝 Contributing

Contributions are welcome!

Feel free to fork this repository, improve it, and submit a Pull Request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Bhushan**

B.Tech Computer Science Student

Learning Web Development • JavaScript • Bac

GitHub: https://github.com/Bhushan450

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!
