const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "/pages/home.html",
    "/pages/Ogolne.html": "/pages/Ogolne.html",
    "/pages/Kontakt.html": "/pages/Kontakt.html",
    "/pages/Jazz.html": "/pages/Jazz.html",
    "/pages/Rock.html": "/pages/Rock.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};
window.onpopstate = handleLocation;
window.route = route;
handleLocation();