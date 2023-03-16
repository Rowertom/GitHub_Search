export class Search {
    constructor(view, log, api) {

        this.view = view;
        this.log = log;
        this.api = api;

        this.searchInput = document.getElementById('search__text');

        this.searchInput.addEventListener('keyup', this.debounce(this.searchRepos.bind(this), 500));
    }

    searchRepos() {
        if (this.searchInput.value) {
            if(this.searchInput.value.length > 10){

                this.api.loadRepos(this.searchInput.value).then(response => {
                    let repos;
                    let reposCount;
                    if (response.ok) {
                        this.view.clearRepos();
                        response.json().then((res) => {
                            if (res.items) {
                                repos = res.items;
                                reposCount = res.total_count;
                                repos.forEach(repo => this.view.createRepos(repo));
                            } else {
                                this.view.clearRepos();
                            }
                            this.view.setRepoCounter(this.log.counterMessage(reposCount));
                        });
                    } else {
                        alert('Error 1' + response.status);
                    }
                })
            }else {
                this.view.clearRepos();
                this.view.setRepoCounter('');
                this.view.setShortSearch(`Short question search ${this.searchInput.value.length} symbols , need 10 and more symbols`);
            }
        }else {
            location.reload();
        }
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
}
