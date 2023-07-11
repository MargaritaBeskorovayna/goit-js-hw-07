import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery")
const item = galleryItems.map(({preview,original,description})=>
    {return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}"
        alt="${description}" />
    </a>
 </li>`}).join("");
 list.insertAdjacentHTML("beforeend",item);
list.addEventListener("click",(event)=>event.preventDefault())
const lightbox = new SimpleLightbox('.gallery a', {
captionsData:"alt",
captionDelay:250 });
