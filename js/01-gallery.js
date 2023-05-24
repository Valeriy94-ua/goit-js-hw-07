import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const makeGalleryList = ({ original, preview, description }) => {
  return `<li class="gallery__item">
            <a class="gallery__link" data-source="${original}" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
};

const makeGalleryArr = galleryItems.map(imageInfo => {
  return makeGalleryList(imageInfo);
});

galleryList.innerHTML = makeGalleryArr.join('');

const galleryLinks = document.querySelectorAll('.gallery__link');

galleryLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const instance = basicLightbox.create(`
      <img
      src="${event.target.dataset.source}" 
      alt="${event.target.alt}" 
      width = "800" height = "600" >
    `);
    instance.show();
  });
});
