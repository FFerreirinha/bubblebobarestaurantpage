import "./styles.css"
import BobaShop from ".//imgs/bobashop_bg.jpg"
import {homeContent} from "./home-page"

const content = document.getElementById("content");
const bobashop = new Image();

bobashop.src = BobaShop;
bobashop.id = "bobashop-background";

content.appendChild(bobashop);

homeContent();

export {content};