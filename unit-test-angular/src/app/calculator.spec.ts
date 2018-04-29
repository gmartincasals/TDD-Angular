import { Calculator } from './calculator';

describe('Test for Calculator', () => {

    let calculator;
    beforeEach( () => {
        calculator = new Calculator;
    });
    describe('Test for multiply', () => {
        it('should return nine', () => {
            // Act
            const result = calculator.multiply(3, 3);
            // Assert
            expect(result).toEqual(9);
        });
        it('should return four', () => {
            // Act
            const result = calculator.multiply(1, 4);
            // Assert
            expect(result).toEqual(4);
        });
    });
    describe('Test for divide', () => {
        it('divide for a number', () => {
            // Act & Assert
            expect(calculator.divide(6, 3)).toEqual(2);
            expect(calculator.divide(5, 2)).toEqual(2.5);
        });
        it('divide for a zero', () => {
            // Act & Assert
            expect(calculator.divide(6, 0)).toBeNull();
            expect(calculator.divide(5, 0)).toBeNull();
            expect(calculator.divide(231421, 0)).toBeNull();
            expect(calculator.divide(10, 0)).toBeNull();
        });
    });
    describe('Test for matchers', () => {
        it('test for a matchers', () => {
            const name = 'Nicolas';
            // const name2;
            expect(name).toBeDefined();
            //expect(name2).toBeUndefined();

            expect(1 + 3 === 4).toBeTruthy();
            expect(1 + 1 === 4).toBeFalsy();

            expect(5).toBeLessThan(10);
            expect(20).toBeGreaterThan(10);

            expect('1234567').toMatch(/123/);
            expect(['oranges', 'apple', 'pears']).toContain('oranges');
        });
    });
});
