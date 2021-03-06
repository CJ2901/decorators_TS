import powers from "../data/powers";

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number,
    ) {}

    get power() : string { /* return string */
        return powers.find( power => power.id === this.powerId )?.desc || 'No se encontrĂ³';
    }

}

export class Hero2{}