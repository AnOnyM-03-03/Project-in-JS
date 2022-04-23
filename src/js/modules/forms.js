export const form = () => {
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
   const massage = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Упс... возникла ошибка',
   };
   // очистка инпутов
   const clearInputs = () => {
      inputs.forEach((input) => {
         input.value = '';
      });
   };
   //    функция которая отвечает за отправку запроса
   // async - указывает что запрос асинхронный    await- говорит о том, что запрос нужно дождаться
   const postData = async (url, data) => {
      document.querySelector('.status').textContent = massage.loading;
      let res = await fetch(url, {
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
         let statusMassage = document.createElement('div');
         statusMassage.classList.add('status');
         form.appendChild(statusMassage);
         // собираем данный из введеной формы
         const formData = new FormData(form);
         // отправляем запрос на сервер по адресу с данными из formData
         postData('assets/server.php', formData)
            .then((res) => {
               console.log(res);
               statusMassage.textContent = massage.success;
            })
            .catch(() => (statusMassage.textContent = massage))
            .finally(() => {
               clearInputs();
               setTimeout(() => {
                  statusMassage.remove();
               }, 5000);
            });
      });
   });
};
