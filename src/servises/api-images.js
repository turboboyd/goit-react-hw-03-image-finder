function fetchImages(name, page) {
  const KEY = '37071230-d6b04d3068f1a0950a5b376a5';


  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(res => {
        if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error('Пусто 2'));
    })
}

const api = {
  fetchImages,
};

export default api;
