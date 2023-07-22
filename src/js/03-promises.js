import Notiflix from 'notiflix';
function createPromise(position, delay) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay)
    );
  }

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);
 
function onSubmit(event) {
  event.preventDefault();
  let step = Number(formEl.elements.step.value);
    let delay = Number(formEl.elements.delay.value);
    let amount = Number(formEl.elements.amount.value);

  for(let i = 1; i <= amount; i += 1) {

    createPromise(i + 1, i * delay + step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

  }
}
