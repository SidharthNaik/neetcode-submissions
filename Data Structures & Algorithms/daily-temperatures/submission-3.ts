class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        // MaxStack Approach
        // Keep a MaxStack from the right end
        // number and pos
        // if higher than current sub curr pos - that pos and then add to result
        const tempsLen = temperatures.length;
        if(tempsLen === 1) return [0];
        const result = [0]
        const tempStack = [temperatures[tempsLen-1]]
        const posStack = [tempsLen-1]
        let size = 0
        for(let i = tempsLen-2; i>=0; i--){
            const temp = temperatures[i]
            while(size >=0 && tempStack[size] <= temp){
                tempStack.pop()
                posStack.pop()
                size--
            }
            if(size<0){
                result.push(0)
            } else {
                result.push(posStack[size] - i)
            }
            size++
            tempStack.push(temp)
            posStack.push(i)
        }
        return result.reverse()
    }
}
