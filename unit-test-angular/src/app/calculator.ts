export class Calculator {

    multiply(ope1: number, ope2: number): number {
        return  ope1 * ope2;
    }

    divide(ope1: number, ope2: number): number {
        if (ope2 === 0) {
            return null;
        }
        return ope1 / ope2;
    }
}
