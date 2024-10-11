import Dropdown from "./dropdown.js";

function initialLoad () {
    const body = document.querySelector('body');
    const dropdown = Dropdown();
    
    dropdown.changeTitle('Social Links');
    dropdown.addArticles([{'YouTube': 'https://www.youtube.com'}, {'Google': 'https://www.google.com'}]);
    body.appendChild(dropdown.getComponent);
};

initialLoad();