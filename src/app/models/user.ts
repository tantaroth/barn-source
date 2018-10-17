export interface User {
    id: number;
    name: string;
}

export class User {

    constructor(
        public id: number,
        public name: string,
    ) { }

}
