# Weather React Application

This is a React web application that displays weather information for any city in the world.

## Features

The application offers the following features:

- Displays weather information such as temperature, humidity, wind speed, and a forecast for the following 5 days.
- The user can toggle between Celsius and Fahrenheit units.

## Technologies Used

In this project, the following technologies were used:

- React
- Bootstrap
- OpenWeather API

## Installation

To use this application, you must have Docker and Docker Compose installed on your computer. You can download and install Docker from [here](https://www.docker.com/get-started) and Docker Compose from [here](https://docs.docker.com/compose/install/).

To start the application, navigate to the root directory of the project in your terminal and run the following command:

```js
docker-compose up
```

This will build the Docker containers and start the development server. You can then access the application by visiting http://localhost:3000 in your web browser.

## Configuration

To use the OpenWeather API, you will need to obtain an API key from their website. You can sign up for a free API key [here](https://home.openweathermap.org/users/sign_up).

In the `docker-compose.yml` file, change the following environment variable under the `react-app` service:

```js
environment:
API_KEY: YOUR_API_KEY_HERE
```

Replace `YOUR_API_KEY_HERE` with your actual API key.

## Usage

To use the application, enter the name of a city in the search bar and press the "Search" button. The application will retrieve the current weather conditions and forecast for the city and display them on the screen.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

This project was created by Anastasiia Peliukhovska. The weather information is provided by the OpenWeather API.



