import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import 'materialize-css';
import data from '../DATA.json';

console.log(data.restaurants);

const menu = document.querySelector('.menu');
const drawer = document.querySelector('.nav-list');
const explore = document.getElementById('explore');
const header = document.querySelector('.header');
const sticky = header.offsetTop;
const skipLink = document.querySelector('.skip-link');
const exploreResto = document.getElementById("explore-resto");

menu.addEventListener('click', () =>{
    drawer.classList.toggle('open');
});

skipLink.addEventListener('click', () => {
    $('html, body').animate({
        scrollTop: exploreResto.offset().top
    }, -1000);
})

function getResto(data) {
    let restaurantHTML = '';

    data.restaurants.forEach((item)=> {
        restaurantHTML += `
            <div tabindex="0" class="card">
                <div class="img-container">
                    <img tabindex="0" src="${item.pictureId}" alt="${item.name}" class="card-image" />
                    <span tabindex="0" class="card-location">
                        <i title="ratings" class="fa fa-map-marker-alt"></i>
                        <span>${item.city}</span>
                    </span>
                </div>

                <div tabindex="0" class="card-content">
                    <p class="rating"><i class="fa fa-star"></i> ${item.rating}</p>
                    <p class="card-content-title">${item.name}</p>
                    <p class="description">${item.description}</p>
                </div>
            </div>
        `;
    });
    explore.innerHTML = restaurantHTML;
}

window.onscroll = () => {
    scroll();
}
function scroll() {
    (window.pageYOffset > sticky ? header.classList.add("sticky") : header.classList.remove("sticky"))
}

getResto(data);