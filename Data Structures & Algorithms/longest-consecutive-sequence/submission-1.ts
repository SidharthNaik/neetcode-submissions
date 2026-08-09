class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length === 0) return 0
        const sortedNums = nums.sort((a,b) => a-b)
        let longestSeq = 1
        let i=0
        while(i<nums.length-1){
            let seqLen = 1;
            while(i<nums.length-1 && nums[i+1]<=nums[i]+1){
                if(nums[i+1] === nums[i]+1){
                    seqLen++
                }
                i++
            }
            if(seqLen > longestSeq){
                longestSeq = seqLen
            }
            i++
        }
        return longestSeq
    }
}
