export const modals = () => {
   // функция с параметрами для popup
   // добавили closeClickOverlay-для отмены клика на подложку
   function bindModals({
      triggerSelector,
      modalSelector,
      closeSelector,
      closeClickOverlay = true,
   }) {
      const triggers = document.querySelectorAll(triggerSelector);
      const modal = document.querySelector(modalSelector);
      const close = document.querySelector(closeSelector);

      const windows = document.querySelectorAll('[data-modal]');
      function modalNone() {
         modal.style.display = 'none';
      }
      function styleOverflow() {
         document.body.style.overflow = '';
      }
      // событие клика и показа окна
      triggers.forEach((item) => {
         item.addEventListener('click', (e) => {
            if (e.target) {
               // отключение стандартного поведения в данном случае ссылки
               e.preventDefault();
            }

            windows.forEach((window) => {
               window.style.display = 'none';
            });
            // добавляем дисплей блок для окна
            modal.style.display = 'block';
            // ставим для body запрет на прокрутку
            document.body.style.overflow = 'hidden';
         });
      });
      // событие нажатия на крестик
      close.addEventListener('click', (e) => {
         windows.forEach((window) => {
            window.style.display = 'none';
         });

         modal.style.display = 'none';
         document.body.style.overflow = '';
      });
      // событие для окна
      modal.addEventListener('click', (e) => {
         if (e.target === modal && closeClickOverlay) {
            windows.forEach((window) => {
               window.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
         modalNone();
         styleOverflow();
      });
      // событие для окна
      modal.addEventListener('click', (e) => {
         if (e.target === modal) {
            modalNone();
            styleOverflow();
         }
      });
      //   скрытие окна при нажатии клавиши Escape
      window.addEventListener('keydown', (e) => {
 master
         if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
         }
      });
   }
   // функция с временным окном которое показываеться через 60 сек
   function showModal(selector, time) {
      setTimeout(function () {
         document.querySelector(selector).style.display = 'block';
         document.body.style.overflow = 'hidden';
      }, time);
   }
   
   const popupArgs = {
      triggerSelector: '.popup_engineer_btn',
      modalSelector: '.popup_engineer',
      closeSelector: '.popup_engineer .popup_close',
   };

   const phonePopupArgs = {
      triggerSelector: '.phone_link',
      modalSelector: '.popup',
      closeSelector: '.popup .popup_close',
   };

   const calcCost = {
      triggerSelector: '.popup_calc_btn',
      modalSelector: '.popup_calc',
      closeSelector: '.popup_calc_close',
   };

   const calcProfile = {
      triggerSelector: '.popup_calc_button',
      modalSelector: '.popup_calc_profile',
      closeSelector: '.popup_calc_profile_close',
      closeClickOverlay: false,
   };
   const calcEnd = {
      triggerSelector: '.popup_calc_profile_button',
      modalSelector: '.popup_calc_end',
      closeSelector: '.popup_calc_end_close',
      closeClickOverlay: false,
   };

   bindModals(popupArgs);
   bindModals(phonePopupArgs);
   bindModals(calcCost);
   bindModals(calcProfile);
   bindModals(calcEnd);
   showModal('.popup', 60000);
};
