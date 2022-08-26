//1 дз гласные буквы

// function vowels(word = 'привет'){   
//     let alphabet = 'аиоуыэеёюя';
//     let userWord = word.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < userWord.length; i++) {
//         for (let k = 0; k < alphabet.length; k++) {
//            if(userWord[i] == alphabet[k]) count++;
//         }
//     }
//     return `В слове ${word} найдено ${count} гласных букв`
// };
// console.log(vowels('ылвдподлывоаыдвлаодыв'));

//2 дз спрашивать команды
// let names = [];
// while(true){
//     let word = prompt('Введите команды add, del or stop и какое-то слово');
//     if(!word) continue;
//     word = word.toLowerCase();
//     let wordArr = word.split(', ');
//     if(wordArr[0] == 'add') names.push(wordArr[1]);
//     else if(wordArr[0] == 'del') {
//         let id = names.indexOf(wordArr[1]);
//         if(id == -1) continue;
//         names.splice(id, 1);
//     }
//     else if(wordArr[0] == 'stop') break;
//     else continue;
// }
// console.log(names);


//часы
//получаем элементы со страницы
const links = document.querySelectorAll('.tabsItem'),
      content = document.querySelectorAll('.tabsContentItem'),
      secondArrow = document.querySelector('.s'),
      minuteArrow = document.querySelector('.m'),
      hourArrow = document.querySelector('.h'),
      minutesBlock = document.querySelector('.minutes'),
      hoursBlock = document.querySelector('.hours');
//табы
for (let i = 0; i < links.length; i++) {
   links[i].addEventListener('click', function(e){
       e.preventDefault();//отменяет действие элемента по умолчанию
       for (let k = 0; k < links.length; k++) {
        //   links[i].classList.add(); //добвляет класс или классы
          links[k].classList.remove('active');//удаляет класс
          content[k].classList.remove('active');
        //   links[i].classList.toggle();//если класс  есть - удалит, если нет - добавит
        //   links[i].classList.contains(); //проверяет есть ли такой класс у элемента  
       }
       this.classList.add('active');
       content[i].classList.add('active');
   });
}
//рекурсия когда функция вызвает сама себя
//settimeout одноразовый таймер
//setinterval работает бесконечно
// let id;
function clock(){
    let date = new Date();
    let s = date.getSeconds();
    let m = date.getMinutes();
    let h = date.getHours();
    minutesBlock.textContent = m < 10 ? `0${m}` : m; 
    hoursBlock.textContent = h < 10 ? `0${h}` : h; 
    // secondArrow.style.transform = `rotate(${s * 6}deg)`;
    // secondArrow.style.transition = `1000ms linear`;
    secondArrow.animate([
      {transform: `rotate(${s * 6}deg)`},
      {transform: `rotate(${s * 6+6}deg)`},
    ], {
      duration: 1000,
      easing: 'linear',
      fill: 'forwards'
    });
    minuteArrow.style.transform = `rotate(${m * 6}deg)`;
    hourArrow.style.transform = `rotate(${h * 30}deg)`;
  setTimeout(clock, 1000)
  // if(s == 40) clearInterval(id);
   
}
clock();
// id = setInterval(clock, 1000);

// setTimeout(() => {
//   console.log('sdfsdf');
// }, 1000);
// setInterval(() => {
//   console.log('sdfsdf');
// }, 1000);

// for (let i = 0; i < 10; i++) {
//   setTimeout(function(){
//     console.log(i);
//   }, 1000);
  
// }


// stopwatch - секундомер

const indicator = document.querySelector('.tabsLink__span'),
      stopwatchHours = document.querySelector('.stopwatch__hours'),
      stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
      stopwatchSeconds = document.querySelector('.stopwatch__seconds'),
      stopwatchMlseconds = document.querySelector('.stopwatch__mlseconds'),
      stopwatchBtn = document.querySelector('.stopwatch__btn'),
      stopwatchList = document.querySelector('.stopwatch__list'),
      stopwatchResult = document.querySelector('.stopwatch__result');

// const audioBtn = document.querySelector('#check'),
//       audio = document.querySelector('.audio');      
let id;

stopwatchBtn.addEventListener('click', function(){
    if(this.textContent == 'start'){
      stopwatch();
      this.textContent = 'stop';
      indicator.classList.add('active');
    }
    else if(this.textContent == 'stop'){
      clearTimeout(id);
      this.textContent = 'clear';
      indicator.classList.remove('active');
      indicator.classList.add('active_clear');
      // audio.pause();
    }
    else if(this.textContent == 'clear'){
      this.textContent = 'start';
      stopwatchMlseconds.textContent = 0;
      stopwatchSeconds.textContent = 0;
      stopwatchMinutes.textContent = 0;
      stopwatchHours.textContent = 0;
      indicator.classList.remove('active_clear');
      stopwatchResult.innerHTML = ``;
    }
});
function stopwatch(){
    if(stopwatchMlseconds.textContent < 10) stopwatchMlseconds.textContent++;
    if(stopwatchMlseconds.textContent >= 10) {
      stopwatchMlseconds.textContent = 0;
      stopwatchSeconds.textContent++;
    }
    if(stopwatchSeconds.textContent >= 60) {
      stopwatchSeconds.textContent = 0;
      stopwatchMinutes.textContent++;
    }
    if(stopwatchMinutes.textContent >= 60){
      stopwatchMinutes.textContent = 0;
      stopwatchHours.textContent++;
    }
    // if(audioBtn.checked) audio.play();
    // else audio.pause();
    id = setTimeout(stopwatch, 100);
}

stopwatchList.addEventListener('click', function(){
  if(stopwatchBtn.textContent == 'stop'){
    let res = `${stopwatchHours.textContent} : ${stopwatchMinutes.textContent} : ${stopwatchSeconds.textContent} : ${stopwatchMlseconds.textContent}`;
    stopwatchResult.innerHTML += `<p>${res}</p>`;
  }
})

