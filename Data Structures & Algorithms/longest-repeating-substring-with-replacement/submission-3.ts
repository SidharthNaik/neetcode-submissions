class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        if(s.length<=1) return s.length;
        let start = 0, end = 1, maxLen = 1
        const map = new Map<string, number>()
        map.set(s.charAt(0), 1)

        while(end<s.length){
            let windowSize = end-start+1
            map.set(s.charAt(end), (map.get(s.charAt(end))??0)+1)
            let {highest, others} = this.calcHighOthFromMap(map)
            if(others <=k && windowSize > maxLen){
                maxLen = windowSize
            }
            while(start<end && others>k){
                map.set(s.charAt(start), map.get(s.charAt(start))-1)
                start++
                const newCount = this.calcHighOthFromMap(map)
                others = newCount.others
            }
            end++
        }
        return maxLen
    }
    
    calcHighOthFromMap(map: Map<string, number>){
        let highest = 0, others=0
        for(let i of map.keys()){
            if(highest < map.get(i)){
                others += highest
                highest = map.get(i)
            } else {
                others += map.get(i)
            }
        }
        return {highest, others}
    }
}
