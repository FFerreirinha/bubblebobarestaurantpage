import {content} from "./index"

const homeContent = () => {
    const homeContentHolder = document.createElement("div");
    homeContentHolder.classList.add("content-holder");
    homeContentHolder.id = "home-content-holder";
    content.appendChild(homeContentHolder);

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("title-text", "text");
    restaurantName.innerText = "Bubba's Bubblelicious Boba!"
    homeContentHolder.appendChild(restaurantName);

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("text");
    const aboutText = "Bubba's Bubblelicious Boba is your one stop for all your bubble tea needs! From classic boba with tapioca pearls to strawberry milk tea topped with silky flan, we have everything to satisfy your sweet cravings!";
    aboutContent.innerText = aboutText;
    homeContentHolder.appendChild(aboutContent);

    const contactContent = document.createElement("div");
    contactContent.classList.add("text");
    const contactText = "We are open: \nSunday: 8am - 8pm \nMonday: 6am - 6pm \nTuesday: 6am - 6pm \nWednesday: 6am - 6pm \nThursday: 6am - 10pm \nFriday: 6am - 10pm \nSaturday: 8am - 10pm";
    contactContent.innerText = contactText;
    homeContentHolder.appendChild(contactContent);

}


export {homeContent};