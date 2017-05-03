import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { name: "Winston", id: 0 },
            { name: "Widowmaker", id: 1 },
            { name: "Genji", id: 2 },
            { name: "Hanzo", id: 3 },
            { name: "Dva", id: 4 },
            { name: "Mei", id: 5 },
            { name: "Soldier 76", id: 6 },
            { name: "Roadhog", id: 7 },
            { name: "Bastion", id: 8 },
            { name: "Anna", id: 9 }
        ];
        return { heroes };
    }
}
