import { timeDay } from "./utiles/timeofDay.js";
export function sliderBG() {
    const slidePrev = document.querySelector('.slide-prev')
    const sliderNext = document.querySelector('.slide-next')
    const body =document.querySelector('body')
    let num = 1;

    sliderNext.addEventListener('click', async () => {
        if (num >= 20) num = 1;
           num += 1;
           
           const number = addZero(num);
        
           const url = makeUrl(number);
           changeBg(url);       
    })
    slidePrev.addEventListener('click', () => {
        num -= 1;
        if(num <=0) num = 20;

        const number = addZero(num);

        const url = makeUrl(number)
        changeBg(url);
    })

    

    function changeBg(url) {
    body.style.background = `url(${url})`
    }

    function addZero(number, day) {
        if(number <= 9 && number > 0) {
            return '0' + number;
        }
        return number;
    }
    function makeUrl(number) {
        const day = timeDay();
        return `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${day}/${number}.jpg`
    }
}

