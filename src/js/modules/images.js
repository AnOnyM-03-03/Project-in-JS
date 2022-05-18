export const images = () => {
   const imgPopup = document.createElement('div'),
      workSection = document.querySelector('.works'),
      bigImage = document.createElement('img');
   const scroll = calcScroll();

   imgPopup.classList.add('popup');
   workSection.append(imgPopup);
   imgPopup.append(bigImage);

   imgPopup.style.justifyContent = 'center';
   imgPopup.style.alignItems = 'center';
   imgPopup.style.display = 'none';

   function popupDisplayFlex() {
      imgPopup.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scroll}px`;
   }
   function popupDisplayNone() {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
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

   function calcScroll() {
      const div = document.createElement('div');
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      const scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      return scrollWidth;
   }

   window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         document.body.style.marginRight = `0px`;

         popupDisplayNone();
      }
   });
};
