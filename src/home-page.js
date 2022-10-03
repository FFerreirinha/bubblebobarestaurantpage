import {content} from "./index"

const homeContent = () => {
    const homeContentHolder = document.createElement("div");
    homeContentHolder.classList.add("content-holder");
    homeContentHolder.id = "home-content-holder";
    content.appendChild(homeContentHolder);

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("title-text");
    restaurantName.innerText = "Bubba's Bubblelicious Boba!"
    homeContentHolder.appendChild(restaurantName);


}


export {homeContent};