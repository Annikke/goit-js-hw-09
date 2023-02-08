import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  firstDelay: document.getElementsByName('delay')[0],
  delayStep: document.getElementsByName('step')[0],
  amount: document.getElementsByName('amount')[0],
  submitBtn: document.querySelector('button'),
};

refs.submitBtn.addEventListener('click', eve => {
  eve.preventDefault();
  for (let i = 1; i <= Number(refs.amount.value); i++) {
    let position = i;
    let delay =
      Number(refs.firstDelay.value) +
      Number(refs.delayStep.value) * (position - 1);
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject(new Error(`Promise rejected for position: ${position}`));
      }
    }, delay);
  });
}
