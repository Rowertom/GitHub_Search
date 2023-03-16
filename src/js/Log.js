export class Log {
    constructor() {
    }

    counterMessage(reposCount) {
        return (reposCount > 0) ? `Найдено ${reposCount} репозиториев` : 'По вашему запросу репозиториев не найдено';
    }
}