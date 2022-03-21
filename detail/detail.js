import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

// on load
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container
window.addEventListener('load', async() => {
   //decide which dog to load
    const data = new URLSearchParams(window.location.search);
    const dogId = data.get('id');

// request a dog
    const requestedDog = await getDog(dogId);

    const requestedDogEl = renderDogDetail(requestedDog);

    dogDetailContainer.append(requestedDogEl);
});