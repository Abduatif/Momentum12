import { timeDay } from "./utiles/timeofDay.js";
export function greeting () {
    const greetingElement = document.querySelector('.greeting')

   

    greetingElement.textContent = 'Good ' + timeDay();

}

