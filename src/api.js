import axios from 'axios';

const API_key = '37724895-812305347465977ce91c5a0e1';

async function getUrl(query, page) {
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=${API_key}&q=${query}&image_type=photo&per_page=40&page=${page}&orientation=horizontal&safesearch=true`
  );
  return data.hits;
}

export { getUrl };
