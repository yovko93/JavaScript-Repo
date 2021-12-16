import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { getUserData } from './utility.js';
import { logout as apiLogout } from './api/data.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { profilePage } from './views/profile.js';


const main = document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click', logout);
setUserNav();

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page('/profile', decorateContext, profilePage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    ctx.user = getUserData();

    next();
}

function setUserNav() {
    const user = getUserData();

    if (user) {
        [...document.querySelectorAll('a.user')].forEach(a => a.style.display = 'block');
        [...document.querySelectorAll('a.guest')].forEach(a => a.style.display = 'none');
    } else {
        [...document.querySelectorAll('a.user')].forEach(a => a.style.display = 'none');
        [...document.querySelectorAll('a.guest')].forEach(a => a.style.display = 'block');
    }

}

function logout() {
    apiLogout();
    setUserNav();
    page.redirect('/');
}