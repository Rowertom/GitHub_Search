const REPOS_ON_PAGE = 10;
const URL = 'https://api.github.com/';

export class Api {

    constructor() {
    }

    async loadRepos(searchValue) {
        return await fetch(`${URL}search/repositories?q=${searchValue}&per_page=${REPOS_ON_PAGE}`);
    }
}
