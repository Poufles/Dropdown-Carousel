/**
    * This creates a new dropdown component.
    * @param {string} title - A parameter that accepts string to add the title.
    **/
function Dropdown(title = 'Title') {
    const template =
        `
        <section class="dropdown-menu">
            <div class="title-container">
                <p id="title">${title}</p>
                <span id="arrow">&#x2193</span>
            </div>
        </section>
        `;

    const component = document.createElement('div');
    const dropdown = document.querySelectorAll('.dropdown');
    let dropdownCount = 1;

    dropdown.forEach(component => {
        dropdownCount++;
    });
    
    component.classList.add('dropdown');
    component.setAttribute('id', `dropdown-${dropdownCount}`);
    component.innerHTML = template;

    /**
    * This changes the current title of the dropdown.
    * @param {string} title - A parameter that accepts string to change the title.
    **/
    const changeTitle = (title) => {
        const dropDownTitle = component.querySelector('#title');

        dropDownTitle.innerHTML = `${title}`;
    };

    /**
    * This adds new options/articles to the dropdown.
    * @param {Array} array - Array containing an object with title and href/link.
    **/
    const addArticles = (array) => {
        const dropdownSection = component.querySelector('section');
        const titleContainer = component.querySelector('.title-container');
        const articleContainer = document.createElement('div');

        array.forEach(item => {
            const key = Object.keys(item);
            const value = Object.values(item);
            const articleElement = document.createElement('article');
            const anchorElement = document.createElement('a');

            anchorElement.textContent = key;
            anchorElement.href = value;
            articleElement.appendChild(anchorElement);
            articleElement.setAttribute('id', `article-${key}`);
            articleContainer.appendChild(articleElement);
        });

        articleContainer.classList.add('article-container');
        dropdownSection.appendChild(articleContainer);

        titleContainer.addEventListener('mouseup', () => {
            articleContainer.classList.toggle('active');
        });
    };

    const getComponent = component;

    return {
        changeTitle,
        addArticles,
        getComponent,
    };
};

export default Dropdown;