export const images = () => {
   const imgPopup = document.createElement('div'),
      workSection = document.querySelector('.works'),
      bigImage = document.createElement('img');

   imgPopup.classList.add('popup');
   workSection.append(imgPopup);
   imgPopup.append(bigImage);

   imgPopup.style.justifyContent = 'center';
   imgPopup.style.alignItems = 'center';
   imgPopup.style.display = 'none';

   function popupDisplayFlex() {
      imgPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
   }
   function popupDisplayNone() {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
   }

   workSection.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;

      if (target && target.classList.contains('preview')) {
         popupDisplayFlex();
         const path = target.parentNode.getAttribute('href');
         bigImage.setAttribute('src', path);
      }

      if (target && target.matches('div.popup')) {
         popupDisplayNone();
      }
   });
};
