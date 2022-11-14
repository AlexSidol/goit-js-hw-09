import Notiflix from 'notiflix';


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     if (shouldResolve) {
       resolve({position, delay});
  } else {
    reject ({position, delay});
  }
  }, delay) 
});
 
}

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onBtnClick);



function onBtnClick(evt) { 
  evt.preventDefault();
  let delay = Number(evt.currentTarget.delay.value);
  let step = Number(evt.currentTarget.step.value);
  let amount = Number(evt.currentTarget.amount.value);

  for (let index = 0; index < amount; index += 1) {
    
    createPromise(index+1, delay)
     .then(({index, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${index} in ${delay}ms`);
  })
  .catch(({ index, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${index} in ${delay}ms`);
  });
    delay = delay + step;
  }
}
