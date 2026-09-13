class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        if(s.length<=1) return s.length;
        let start = 0, end = 1, maxLen = 1, maxFreq = 1
        const map = new Map<string, number>()
        map.set(s.charAt(0), 1)

        while(end<s.length){
            let windowSize = end-start+1            
            const currFreq = (map.get(s.charAt(end))??0)+1
            if(currFreq > maxFreq){
                maxFreq = currFreq
            }
            map.set(s.charAt(end), currFreq)
            if(windowSize-maxFreq <=k && windowSize > maxLen){
                maxLen = windowSize
            }
            while(start<end && windowSize-maxFreq >k){
                map.set(s.charAt(start), map.get(s.charAt(start))-1)
                start++
                windowSize--
            }
            end++
        }
        return maxLen
    }
}
