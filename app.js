import { time } from "./script/time.js"; 
import { greeting } from "./script/greeting.js";
import { input} from "./script/input.js";
import { weather } from "./script/weather.js";
import { sliderBG }  from  "./script/silider.js";
import {  refresh } from "./script/refresh.js";


refresh();
sliderBG();
weather();
input();
greeting();
setInterval(time, 1000);