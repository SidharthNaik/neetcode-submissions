class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        if(tokens.length<=0) return 0;

        let stack: number[] = [];

        for (let token of tokens) {
            if (token === "+" || token === "-" || token === "*" || token === "/") {
                const operand2 = stack.pop()!;
                const operand1 = stack.pop()!;
                switch(token){
                    case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(Math.trunc(operand1 / operand2));
                    break;
                }
            } else {
                stack.push(parseInt(token));
            }
        }
        return stack[0];
    }
}