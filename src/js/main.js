import './slider';
import { showTabs, modals, form, changeModalState, images } from './modules';
import { showTabs, modals, form, changeModalState, timer } from './modules';

window.addEventListener('DOMContentLoaded', () => {
   // переменная в которой хранятся объекты отправки на сервер
   let modalState = {};
   let deadLine = '2022-06-29';

   const glazingArgs = {
      headerSelector: '.glazing_slider',
      tabSelector: '.glazing_block',
      contentSelector: '.glazing_content',
      activeClass: 'active',
   };
   const sliderArgs = {
      headerSelector: '.decoration_slider',
      tabSelector: '.no_click',
      contentSelector: '.decoration_content >div >div',
      activeClass: 'after_click',
   };

   const balconsArgs = {
      headerSelector: '.balcon_icons',
      tabSelector: '.balcon_icons_img',
      contentSelector: '.big_img >img',
      activeClass: 'do_image_more',
      display: 'inline-block',
   };

   showTabs(glazingArgs);
   showTabs(sliderArgs);
   showTabs(balconsArgs);
   modals();
   //    а в свою очередь параметр state записывается в созданный объект modalState
   changeModalState(modalState);
   form(modalState);
   images();
   timer('.container1', deadLine);
});
