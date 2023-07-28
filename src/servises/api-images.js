import axios from 'axios';

export const fetchImages = async (name, page) => {
  const KEY = '37071230-d6b04d3068f1a0950a5b376a5';
  const BASE_URL = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(
      `${BASE_URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    return Promise.reject(
      new Error('An error has occurred, please try again!')
    );
  }
};
