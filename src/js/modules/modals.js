export const modals = () => {
   // функция с параметрами для popup

   function bindModals(triggerSelector, modalSelector, closeSelector) {
      const trigger = document.querySelectorAll(triggerSelector);
      const modal = document.querySelector(modalSelector);
      const close = document.querySelector(closeSelector);
      // событие клика и показа окна
      trigger.forEach((item) => {
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
   }
   // функция с временным окном которое показываеться через 60 сек
   function showModal(selector, time) {
      setTimeout(function () {
         document.querySelector(selector).style.display = 'block';
         document.body.style.overflow = 'hidden';
      }, time);
   }
   bindModals(
      '.popup_engineer_btn',
      '.popup_engineer',
      '.popup_engineer .popup_close'
   );
   bindModals('.phone_link', '.popup', '.popup .popup_close');
   showModal('.popup', 60000);
};
