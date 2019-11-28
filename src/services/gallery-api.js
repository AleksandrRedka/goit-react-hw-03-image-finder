import axios from 'axios';

const API_KEY = '14420013-646f294a2258892fb35b029ee';
const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=`;

// eslint-disable-next-line
export const fetchGallery = (searchValue, page) =>
  axios.get(
    `${BASE_URL}+${searchValue}&page=${page}&per_page=12&key=${API_KEY}`,
  );
