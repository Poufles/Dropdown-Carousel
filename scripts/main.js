import Dropdown from "../components/dropdown/dropdown.js";

function InitialLoad () {
    const separator = document.querySelector('#separator');
    const dropdown = Dropdown();
    
    dropdown.changeTitle('Social Links');
    dropdown.addArticles([{'YouTube': 'https://www.youtube.com'}, {'Google': 'https://www.google.com'}]);
    separator.appendChild(dropdown.getComponent);
};

InitialLoad();