import { galleryItems } from './gallery-items.js';
// Change code below this line

// find gallery?
const galleryList = document.querySelector('.gallery');
// create card
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
// iteration massive
const makeGalleryArr = galleryItems.map(imageInfo => {
  return makeGalleryList(imageInfo);
});
// add in html
galleryList.innerHTML = makeGalleryArr.join('');
// add action

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
//
//
// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();
//
