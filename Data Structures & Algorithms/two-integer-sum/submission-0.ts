class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map<number, number>();
        for(let i=0;i<nums.length;i++){
            if(numsMap.has(nums[i])){
                return [numsMap.get(nums[i]), i]
            }
            numsMap.set(target-nums[i], i)
        }
        return []
    }
}
