import {addMobileMenuListeners} from './mobile-menu.js';

addHeader();


function addHeader() {
    fetch('components/header.html')
        .then(response => response.text())
        .then(text => document.getElementById('header').innerHTML = text)
        .then(makeActive)
        .then(addMobileMenuListeners)
        .then(window.scrollTo(0, 0));
}

function makeActive() {
    let header = document.getElementById('header');
    let pages = header.classList;

    for (let page of pages) {
        let activeLink = document.getElementById(page);
        activeLink.classList.add('has-background-primary', 'has-text-weight-bold');
    }
}