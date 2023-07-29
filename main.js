async function getWeather(location) {
    location = location.toLowerCase().replace(' ', '_');
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=981d41ec437c477d9f042719232907&q=${location}`);
    const data = await response.json();
    console.log(data);
}

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('#submit');
    const input = document.querySelector('#location');
    submitBtn.addEventListener('click', () => {
        getWeather(input.value);
    });
})