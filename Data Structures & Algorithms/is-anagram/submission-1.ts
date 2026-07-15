class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const sCharMap = new Map<string, number>()
        const tCharMap = new Map<string, number>()

        for(let i=0;i<s.length;i++){
            const sChar = s.charAt(i)
            const tChar = t.charAt(i)
            sCharMap.set(sChar, (sCharMap.get(sChar)??0)+1)
            tCharMap.set(tChar, (tCharMap.get(tChar)??0)+1)
        }

        if(sCharMap.size !== tCharMap.size){
            return false;
        }

        for(let key of sCharMap.keys()){
            if(!tCharMap.has(key) || tCharMap.get(key) !== sCharMap.get(key)){
                return false
            }
        }

        return true
    }
}
