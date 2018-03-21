/**
 * Décrit un groupe de case
 */

describe('jasmine syntax', function () {
    /**
     * Un test case avec une description de son scénario
     */

    describe('Class Calculus', function () {

        describe('operation method', function () {
        let t;

        beforeEach(function(){
            t = new Calculus;
        });
        
        it('should addition two numbers', function () {
            expect(t.operation(10, 5, '+')).toBe(15);  
        });

        it('should soustract two numbers', function () {
            expect(t.operation(10, 5, '-')).toBe(5);  
        });

        it('should multiplicat two numbers', function () {
            expect(t.operation(10, 5, '*')).toBe(50);  
        });

        it('should divise two numbers', function () {
            expect(t.operation(10, 5, '/')).toBe(2);  
        });

        it('should return NaN when a or b', function () {
            expect(t.operation('bloup', 5, '/')).toBeNaN();
            expect(t.operation('bloup', 5, '+')).toBeNaN();  
            expect(t.operation('bloup', 5, '-')).toBeNaN();  
            expect(t.operation('bloup', 5, '*')).toBeNaN();  
        });

        it('should not crash when dividing by zero', function () {
            expect(t.operation(10, 0, '/')).toBe(Infinity);  
        });

        it('should throw Error when wrong operator', function () {
            expect(() => t.operation(0, 0, 'bloup')).toThrow(new Error('wrong operand given'));  
        });

    });

    });
});