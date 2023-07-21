function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    resolve({position, delay});
  } else {
    reject({position, delay});
  }
    }, delay);
  });
  
}
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit);
 
function onSubmit(event) {
  event.preventDefault();
  const {delay, step, amount} = event.target.elements;

  let currentDelay = Number(delay.value);

  for(let i = 1; i <= Number(amount.value); i += 1) {

    createPromise(i, currentDelay)
    .then(({position, delay}) => {
      window.alert(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      window.alert(`❌ Rejected promise ${position} in ${delay}ms`);
});

currentDelay += Number(step.value);
  }
}

