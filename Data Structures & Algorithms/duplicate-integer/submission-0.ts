class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numMap = new Set<number>()
        for(let num of nums){
            if(numMap.has(num)){
                return true
            }
            numMap.add(num)
        }
        return false
    }
}
