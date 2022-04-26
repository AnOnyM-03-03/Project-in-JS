import { checkNumInputs } from './checkNumInputs';

export const changeModalState = (state) => {
   // форма окна калькулятора
   const windowForms = document.querySelectorAll('.balcon_icons_img'),
      windowWidths = document.querySelectorAll('#width'),
      windowHeights = document.querySelectorAll('#height'),
      windowTypes = document.querySelectorAll('#view_type'),
      windowProfiles = document.querySelectorAll('.checkbox');

   checkNumInputs('#width');
   checkNumInputs('#height');

   function bindActionToElems({ event, elems, prop }) {
      elems.forEach((elem, i) => {
         elem.addEventListener(event, () => {
            //  switch - для проверки,куда кликнул пользователь
            switch (elem.nodeName) {
               case 'SPAN':
                  state[prop] = i;
                  break;
               case 'INPUT':
                   
                  if (elem.getAttribute('type') === 'checkbox') {
                     i === 0
                        ? (state[prop] = 'Холодное')
                        : (state[prop] = 'Теплое');
                     elems.forEach((box, j) => {
                        box.checked = false;

                        if (i == j) {
                           box.checked = true;
                        }
                     });
                  } else {
                     state[prop] = elem.value;
                  }
                  break;
               case 'SELECT':
                  state[prop] = elem.value;
                  break;
            }
         });
      });
   }

   const windowForm = {
      event: 'click',
      elems: windowForms,
      prop: 'form',
   };
   const windowWidth = {
      event: 'input',
      elems: windowWidths,
      prop: 'width',
   };
   const windowHeight = {
      event: 'input',
      elems: windowHeights,
      prop: 'height',
   };

   const windowType = {
      event: 'change',
      elems: windowTypes,
      prop: 'type',
   };
   const windowProfile = {
      event: 'change',
      elems: windowProfiles,
      prop: 'profile',
   };

   bindActionToElems(windowForm);
   bindActionToElems(windowWidth);
   bindActionToElems(windowHeight);
   bindActionToElems(windowType);
   bindActionToElems(windowProfile);
};
