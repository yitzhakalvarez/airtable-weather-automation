// Grab input

let event = input.config();


// Make the request

let weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${event.city}&appid={API KEY}&units=imperial`);

let weatherData = await weather.json();

console.log(weatherData);


output.set('description', weatherData.weather[0].main);
output.set('temperature', weatherData.main.temp);
output.set('weatherData', weatherData.main);