import axios from 'axios';

const API_KEY = 'SUA_API_KEY';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city) => {
  const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`);
  return response.data;
};