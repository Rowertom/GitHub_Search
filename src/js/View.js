export class View {
    constructor() {
        this.searchList = document.getElementById('searchList');
        this.header = document.getElementById('header');

        this.repoBlock = this.createElement('div', 'contentBlock')
        this.repoCounter = this.createElement('span', 'counter');
        this.shortSearch = this.createElement('span', 'shortMessage');
        this.header.append(this.repoBlock);
        this.repoBlock.append(this.shortSearch);
        this.repoBlock.append(this.repoCounter);
    }

    createElement(elementTag, elementClass) {
        const element = document.createElement(elementTag);
        if (elementClass) {
            element.classList.add(elementClass);
        }
        return element;
    }

    createRepos(repoData) {
        const repoElement = this.createElement('div', 'main__searchList__repo');
        repoElement.innerHTML = `<a href=${repoData.html_url} class='main__searchList__repo__link' target='_blank'>${repoData.description}</a>
        <span class='main__searchList__repo__content'>Создал <b>${repoData.owner.login}</b></span>
        <a href=${repoData.owner.html_url}class='main__searchList__repo__contentUser>Репозитории создателя ${repoData.owner.html_url}</a>`;

        this.searchList.append(repoElement);
    }

    clearRepos() {
        this.searchList.innerHTML = '';
    }

    clearRepoBlock() {
        this.repoBlock.removeChild(this.shortSearch);
    }
    setRepoCounter(message) {
        this.repoCounter.textContent = message;
    }

    setShortSearch(message) {
        this.shortSearch.textContent = message;
    }
}