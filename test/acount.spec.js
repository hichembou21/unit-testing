
describe('Acount class', function () {

    let instance;

    beforeEach(function () {
        instance = new Acount();
    });

    describe('deposit method', function () {
       
        it('should increase the acount balance', function () {
           let spy = spyOn(instance.calculus, 'operation').and.returnValue(130);
        
           instance.deposit(30);
           expect(instance.balance).toBe(130);
        //    expect(instance.calculus.operation).toHaveBeenCalledTimes(1);
           expect(instance.calculus.operation).toHaveBeenCalledWith(100, 30, '+');
           
        });
    });
});