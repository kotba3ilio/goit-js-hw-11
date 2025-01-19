import SimpleLightbox from 'simplelightbox';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryItem(item) {
  return `<li><a class="gallery-link" href="${item.largeImageURL}"><img class="gallery-image" src="${item.previewURL}" alt="${item.tags}"/></a></li>`;
}

export function renderGallery(gallery, images) {
  if (images.length == 0) {
    throw new Error(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }
  const galleryItems = images
    .map(item => {
      return createGalleryItem(item);
    })
    .join('');
  gallery.innerHTML = galleryItems;
  lightbox.refresh();
}
