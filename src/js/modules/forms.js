import { checkNumInputs } from './checkNumInputs';

export const form = (state) => {
   const forms = document.querySelectorAll('form'),
      inputs = document.querySelectorAll('input');
   const phoneInputs = document.querySelectorAll('input[name="user_phone"]');
   // фнукция для каждого инпута
   phoneInputs.forEach((phoneInput) => {
      //    событие инпута
      phoneInput.addEventListener('input', () => {
         //   пользователь вводит что-то, затем мы проверяем это на регулярном выражении и, если это не цифра то заменяем пустой строкой
         phoneInput.value = phoneInput.value.replace(/\D/, '');
      });
   });
   //   Объект сообщений который будет показывавться пользователю
   const message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Упс... возникла ошибка',
   };
   // очистка инпутов
   const clearInputs = () => {
      inputs.forEach((input) => (input.value = ''));
   };
   //    функция которая отвечает за отправку запроса
   // async - указывает что запрос асинхронный    await- говорит о том, что запрос нужно дождаться
   const postData = async (url, data) => {
      document.querySelector('.status').textContent = message.loading;
      const res = await fetch(url, {
         method: 'POST',
         body: data,
      });
      
      return await res.text();
   };
   //    фунция для каждой формы
   forms.forEach((form) => {
      //    событие отпраки
      form.addEventListener('submit', (e) => {
         e.preventDefault();
         // блок с ошибкой если что-то пошло не так
         const statusmessage = document.createElement('div');
         statusmessage.classList.add('status');
         form.appendChild(statusmessage);
         // собираем данные из введеной формы
         const formData = new FormData(form);
        // проверяем действительно ли это последнее окно и если это так, то мыперебираем и  добавляем к обЪекту выбранные образцы и отправляем на сервер
         if (form.getAttribute('data-calc') === 'end') {
            for (let key in state) {
               formData.append(key, state[key]);
            }
         }
         // отправляем запрос на сервер по адресу с данными из formData
         postData('assets/server.php', formData)
            .then((res) => {
               console.log(res);
               statusmessage.textContent = message.success;
            })
            .catch(() => (statusmessage.textContent = message))
            .finally(() => {
               clearInputs();
               setTimeout(() => {
                  statusmessage.remove();
               }, 5000);
            });
      });
   });
};
