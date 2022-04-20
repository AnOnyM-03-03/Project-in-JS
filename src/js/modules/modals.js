export const modals = () => {
   // функция с параметрами для popup

   function bindModals({ triggerSelector, modalSelector, closeSelector }) {
      const triggers = document.querySelectorAll(triggerSelector);
      const modal = document.querySelector(modalSelector);
      const close = document.querySelector(closeSelector);
      // событие клика и показа окна
      triggers.forEach((item) => {
         item.addEventListener('click', (e) => {
            if (e.target) {
               // отключение стандартного поведения в данном случае ссылки
               e.preventDefault();
            }
            // добавляем дисплей блок для окна
            modal.style.display = 'block';
            // ставим для body запрет на прокрутку
            document.body.style.overflow = 'hidden';
         });
      });
      // событие нажатия на крестик
      close.addEventListener('click', (e) => {
         modal.style.display = 'none';
         document.body.style.overflow = '';
      });
      // событие для окна
      modal.addEventListener('click', (e) => {
         if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
         }
      });
      //   скрытие окна при нажатии клавиши Escape
      window.addEventListener('keydown', (e) => {
         if (e.keyCode === 27) {
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

   bindModals(popupArgs);
   bindModals(phonePopupArgs);
   showModal('.popup', 60000);
};
