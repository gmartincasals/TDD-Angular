export class Person {
    constructor(
        public name: string,
        public lastname: string,
        public age: number,
        public weight: number,
        public height: number
    ) {}

    calcIMC(): string {
        const result = Math.round(this.weight / ((this.height) * (this.height)));
        if (result < 0) {
            return 'no found';
        } else if (result >= 0 && result < 18) {
            return 'down';
        } else if (result >= 18 && result <= 24) {
            return 'normal';
        } else if (result >= 25 && result <= 26) {
            return 'overweigth';
        } else if (result >= 27 && result <= 29) {
            return 'overweigth level 1';
        } else if (result >= 30 && result <= 39) {
            return 'overweigth level 2';
        } else if (result >= 40 ) {
            return 'overweigth level 3';
        }
    }
}
