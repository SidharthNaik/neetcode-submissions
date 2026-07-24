class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>()
        let maxFreq = 0
        
        for(let num of nums){
            let freq = (map.get(num)??0)+1
            if(freq>maxFreq){
                maxFreq= freq
            }
            map.set(num, freq)
        }

        const buckets = Array.from({ length: maxFreq }, () => []);
        for(const [key, value] of map){
            buckets[value-1].push(key)
        }

        const result = []
        for(let i = buckets.length-1;i>=0;i--){
            if(buckets[i].length){
                result.push(...buckets[i])
                if(result.length>=k){
                    break
                }
            }
        }
        return result
    }
}



