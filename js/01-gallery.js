import { galleryItems } from './gallery-items.js';
// Change code below this line

// =======================================================================
// Создай галерею с возможностью клика по её элементам и просмотра 
// полноразмерного изображения в модальном окне.Посмотри демо видео работы 
// галереи.
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. 
// Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй
//  CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы
// библиотеки.
// Открытие модального окна по клику на элементе галереи.Для этого ознакомься с 
// документацией и примерами.
// Замена значения атрибута src элемента < img > в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров 
// библиотеки basicLightbox.
// ===========================================================================


const galleryBox = document.querySelector('.gallery');
const imageGallery = createImageGallery(galleryItems);

galleryBox.insertAdjacentHTML ('beforeend', imageGallery);
galleryBox.addEventListener('click', onImgClick);


function createImageGallery(items) {
    
    return items.map(({ preview, original, description }) => {
        return `
         <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
             </a>
        </div>
        `
    }).join('');
}


function onImgClick(event) {
    event.preventDefault()

    const dataSource = event.target.dataset.source;
    
   const instance = basicLightbox.create(    
    `
    <img src= "${dataSource}" width="800" height="600">
    `)
    instance.show()
    
    
    window.addEventListener('keydown',(event) =>  {

    if (event.key === 'Escape'||' ') {
       instance.close();   
         }
    });
    
}



