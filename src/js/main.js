import './slider';
import { showTabs, modals } from './modules';

window.addEventListener('DOMContentLoaded', () => {
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

   showTabs(glazingArgs);
   showTabs(sliderArgs);
   modals();
});
