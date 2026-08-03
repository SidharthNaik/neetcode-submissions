class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const arrLen = nums.length
        let leftSum = [nums[0]], rightSum = [nums[arrLen-1]]
        // Loop across from both sides and multiply current with prev and save to next
        // Memoization
        // At i take saved result of i+1 & i-1 & multiply
        for(let i = 1;i < arrLen; i++){
            leftSum.push(leftSum[i-1]*nums[i])
            rightSum.push(rightSum[i-1]*nums[arrLen - 1 - i])
        }
        rightSum = rightSum.reverse()
        const result = [rightSum[1]]
        for(let i = 1;i<arrLen-1;i++){
            result.push(leftSum[i-1]* rightSum[i+1])
        }
        result.push(leftSum[arrLen-2])
        return result
    }
}
