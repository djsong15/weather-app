const submitBtn = document.querySelector('#submit-btn');
const input = document.querySelector('#location-input');

async function getWeather(location) {
    if (location) {
        location = location.toLowerCase().replace(' ', '_');
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=981d41ec437c477d9f042719232907&q=${location}`);
        const data = await response.json();
        console.log(data);
        return data;
    } else return null;
}

async function populateWeather(input) {
    try {
        const locOutput = document.querySelector('#location');
        const tempfOutput = document.querySelector('#tempf');
        const tempcOutput = document.querySelector('#tempc');
        const weatherData = await getWeather(input.value);

        locOutput.textContent = weatherData.location.name;
        tempfOutput.textContent = `${weatherData.current.temp_f} °F`;
        tempcOutput.textContent = `${weatherData.current.temp_c} °C`;
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    submitBtn.addEventListener('click', () => populateWeather(input));
});

