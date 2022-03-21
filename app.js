import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load
// fetch all dogs
// render and append all dog cards to the container

window.addEventListener('load', async() => {
    //request all dogs
    //wait for reply
    const dogsArray = await getDogs();

    for (let dog of dogsArray) {
        const dogEl = renderDogCard(dog);

        dogListContainer.append(dogEl);
    }     

});