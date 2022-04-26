export const timer = (id, deadline) => {
   const addZero = (num) => {
      if (num <= 9) {
         return '0' + num;
      } else {
         return num;
      }
   };
   // функция которая получает кол-во времени и выдавать сколько осталось до конца
   const getTimeRemaining = (endTime) => {
      const total = Date.parse(endTime) - Date.parse(new Date()),
         seconds = Math.floor((total / 1000) % 60),
         minutes = Math.floor((total / 1000 / 60) % 60),
         hours = Math.floor((total / (1000 * 60 * 60)) % 24),
         days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
         total,
         days,
         hours,
         minutes,
         seconds,
      };
   };

   const setClock = (selector, endTime) => {
      const timer = document.querySelector(selector),
         days = document.querySelector('#days'),
         hours = document.querySelector('#hours'),
         minutes = document.querySelector('#minutes'),
         seconds = document.querySelector('#seconds'),
         timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
         const t = getTimeRemaining(endTime);
         days.textContent = addZero(t.days);
         hours.textContent = addZero(t.hours);
         minutes.textContent = addZero(t.minutes);
         seconds.textContent = addZero(t.seconds);

         if (t.total <= 0) {
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';

            clearInterval(timeInterval);
         }
      }
   };

   setClock(id, deadline);
};
