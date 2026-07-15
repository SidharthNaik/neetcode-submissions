class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Time Complexity = SlogS * N
        // Space Complexity = N * S
        
        const strMap = new Map<string, string[]>()
        for(let i= 0;i<strs.length;i++){
            const sortedChars = strs[i].split('').sort().join('')
            if(strMap.has(sortedChars)){
                strMap.get(sortedChars).push(strs[i])
            } else {
                strMap.set(sortedChars, [strs[i]])
            }
        }
        return Array.from(strMap.values())
    }
}
