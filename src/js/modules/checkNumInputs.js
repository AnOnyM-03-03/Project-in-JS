export const checkNumInputs = (selector) => {
    
   const numInputs = document.querySelectorAll(selector);

   numInputs.forEach((numInput) => {
      //    событие инпута
      numInput.addEventListener('input', () => {
         //   пользователь вводит что-то, затем мы проверяем это на регулярном выражении и, если это не цифра то заменяем пустой строкой
         numInput.value = numInput.value.replace(/\D/, '');
      });
   });
};
