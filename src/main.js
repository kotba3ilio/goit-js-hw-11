import { searchImages } from './js/pixabay-api';
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';

const searchInut = document.querySelector('#search');
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryItem(item) {
  return `<li><a class="gallery-link" href="${item.largeImageURL}"><img class="gallery-image" src="${item.previewURL}" alt="${item.tags}"/></a></li>`;
}

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
        if (data.hits.length == 0) {
          throw new Error(
            'Sorry, there are no images matching your search query. Please try again!'
          );
        }
        const galleryItems = data.hits
          .map(item => {
            return createGalleryItem(item);
          })
          .join('');
        gallery.innerHTML = galleryItems;
        lightbox.refresh();
      }, 300);
    })
    .catch(error => {
      iziToast.error({ title: 'Error', message: error.message });
    });
});
