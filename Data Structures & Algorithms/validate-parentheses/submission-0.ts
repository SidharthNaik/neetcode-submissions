class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const complement = {
            "{": "}",
            "[": "]",
            "(": ")"
        }
        const arr = new Array<string>()
        // scan through
        for(let i of s){
            // push to stack if it is opening bracket
            if( i === '{' || i === '[' || i==='('){
                arr.push(i)
            }
            if(i === '}' || i === ']' || i === ')'){
                if(arr.length <=0) return false
                const pop = arr.pop()
                if(complement[pop] !== i) return false
            }
            // closing bracket - peek and check if complementary then remove
            // if false return false
            // at end
            // if stack empty return true
        }
        if(arr.length === 0) return true;
        else return false;
    }
}
