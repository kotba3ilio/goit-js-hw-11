import { searchImages } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';
import iziToast from 'izitoast';

const searchInut = document.querySelector('#search');
const gallery = document.querySelector('.gallery');

function createLoader() {
  return '<div class="loader"></div>';
}

document.querySelector('.submit').addEventListener('click', event => {
  event.preventDefault();
  gallery.innerHTML = createLoader();
  const result = searchImages(searchInut.value);
  result
    .then(data => {
      setTimeout(() => {
        renderGallery(gallery, data.hits);
      }, 300);
    })
    .catch(error => {
      iziToast.error({ title: 'Error', message: error.message });
    });
});
