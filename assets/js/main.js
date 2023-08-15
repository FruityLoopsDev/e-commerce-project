/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle('show');
        });
    };
};

showMenu('nav-toggle', 'nav-menu');
/*===== SEARCH BAR SHOW =====*/
const toggleSearch = (search, button) => {
    const searchBar = document.getElementById(search),
        searchButton = document.getElementById(button);

    searchButton.addEventListener('click', () => {
        //We add the show-search class, so that the search bar
        searchBar.classList.toggle('show-search');
    });
};

toggleSearch('search-bar', 'search-button');

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    //Active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

