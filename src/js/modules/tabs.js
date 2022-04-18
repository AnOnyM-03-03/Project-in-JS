export const showTabs = (
   headerSelector,
   tabSelector,
   contentSelector,
   activeClass
) => {
   const header = document.querySelector(headerSelector),
      tabs = document.querySelectorAll(tabSelector),
      contents = document.querySelectorAll(contentSelector);

   //   функция скрытия контентв
   function hideTabContent() {
      //    перебор контента и скытие его
      contents.forEach((content) => {
         content.style.display = 'none';
      });
      //   скрытие актиивной подложки
      tabs.forEach((tab) => {
         tab.classList.remove(activeClass);
      });
   }


//   ! ошибка

   //   перебор псевдомассива с контентом
   function showTabContent(i) {
      //    показ контента активного таба
      contents[i].style.display = 'block';
      //   contents[i].style.display = 'block';
      //   показ активной подложки
      tabs[i].classList.add(activeClass);
   }

   hideTabContent();
   showTabContent();


   //   ! ошибка

   //    делегирование событий
   //    прослушка на общего родителя всех табов
   header.addEventListener('click', (e) => {
      //    переменная для удобства с событием клика
      const target = e.target;
      //   условие, на проверку передаваемого класса "contains - return (true or false)"
      //   проверяем кликнули мы на таб
      // tabSelector.replace(/\./,'')- регулярное выражение на поиск точки и замены пустым местом
      if (
         target &&
         (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
      ) {
         //   перебор табов по номеру и порядку
         tabs.forEach((tab, i) => {
            if (target == tab || target.parentNode == tab) {
               hideTabContent();
               showTabContent(i);
            }
         });
      }
   });
};
