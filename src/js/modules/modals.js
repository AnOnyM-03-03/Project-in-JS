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
      const scroll = calcScroll();

      function closeModal() {
         modal.style.display = 'none';
         document.body.style.overflow = '';
      }

      // событие клика и показа окна
      triggers.forEach((item) => {
         item.addEventListener('click', (e) => {
            if (e.target) {
               // отключение стандартного поведения в данном случае ссылки
               e.preventDefault();
            }
            if (
               document.querySelector(
                  `${modalSelector} input:not([type='radio'])`
               )
            ) {
               document
                  .querySelector(`${modalSelector} input:not([type='radio'])`)
                  .focus();
            }

            windows.forEach((window) => {
               window.style.display = 'none';
            });
            // добавляем дисплей блок для окна
            modal.style.display = 'block';
            // ставим для body запрет на прокрутку
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
         });
      });
      // событие нажатия на крестик
      close.addEventListener('click', (e) => {
         windows.forEach((window) => {
            window.style.display = 'none';
         });

         closeModal();
         document.body.style.marginRight = `0px`;
      });
      // событие для окна
      modal.addEventListener('click', (e) => {
         if (e.target === modal && closeClickOverlay) {
            windows.forEach((window) => {
               window.style.display = 'none';
            });

            closeModal();
            document.body.style.marginRight = `0px`;
         }
      });

      //   скрытие окна при нажатии клавиши Escape
      window.addEventListener('keydown', (e) => {
         if (e.key === 'Escape') {
            document.body.style.marginRight = `0px`;

            closeModal();
         }
      });
   }

   // функция с временным окном которое показываеться через 60 сек
   function showModal(selector, time) {
      setTimeout(function () {
         document.querySelector(selector).style.display = 'block';
         document.body.style.overflow = 'hidden';
         const scroll = calcScroll();
         document.body.style.marginRight = `${scroll}px`;
      }, time);
   }

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
   showModal('.popup[data-modal]', 2000);
};
