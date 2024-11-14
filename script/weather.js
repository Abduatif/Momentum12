export function weather() {
    const input = document.querySelector('.weather .city');
  
    function initail() {
      const city = getFromLocalStorage('city') || 'Almalyk';
  
      if(city) {
        setToLocalStorage('city', city);
      }
  
      input.value = city;
      fetchAndRender(city)
      setToLocalStorageFromInput(input);
    }
  
  
    initail();
  }
  
  function setToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }
  
  function getFromLocalStorage(key) {
    return localStorage.getItem(key);
  }
  
  function setToLocalStorageFromInput(inp) {
    let timeout;
  
    inp.addEventListener('input', (e) => {
      setToLocalStorage('city', e.target.value);
  
      clearTimeout(timeout)
  
      timeout = setTimeout(async () => {
        fetchAndRender(e.target.value);
      }, 1000);
  
    })
  }
  async function fetchAndRender(city) {
    const url = URL(city)

    const data = await getData(url);
    
    renderWeather(data);
  }
  
  function clearElements(icon, elements) {
    const regex = /\bowf-[\w-]+\b/g;
  
    icon.classList.forEach(className => {
      if (className.match(regex)) {
        icon.classList.remove(className);
      }
    });
  
    elements.forEach(element => {
      element.textContent = '';
    });
  }
  
  function renderWeather(data) {
    const icon = document.querySelector('.weather-icon');
    const error = document.querySelector('.weather-error');
    const temperature = document.querySelector('.temperature');
    const weatherDesc = document.querySelector('.weather-description');
    const wind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
  
    
    clearElements(icon, [error,temperature,weatherDesc,wind,humidity]);
    
    if(data.cod) {
      error.textContent = data.message;
    }
    const clas = 'owf-' + data.weather[0]?.id;
    icon.classList.add(clas);
  
    temperature.textContent = Math.round(data.main.temp - 273.15) + '° C';
    weatherDesc.textContent = data.weather[0].description;
    wind.textContent = data.wind.speed + ' m/s';
    humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
  }
  
  async function getData(url) {
    const response = await fetch(url);
  
    const data = await response.json();
  
    return data;
  }
  
  function URL(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5b86ed4a9143b8a6ee4cbe2197c600d`
  }
  // d5b86ed4a9143b8a6ee4cbe2197c600d
  // 