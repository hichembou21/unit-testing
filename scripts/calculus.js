
class Calculus {

    operation(a, b, op) {
        if (typeof(a) !== 'number' || typeof(b) !== 'number') {
            return NaN;
        }
        switch (op) {
            case '+':
                return a+b;
                break;
            case '-':
                return a-b;
                break;
            case '*':
                return a*b;
                break;
            case '/':
                return a/b;
                break;
            default:
                throw new Error('wrong operand given');
                break;
        }
    }
}