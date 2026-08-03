class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // Get strs length then #
        // Length of individual string then # and the string
        const strsLen = strs.length
        let result = `${strsLen}#`
        for(let i=0;i<strsLen;i++){
            const strLen = strs[i].length
            result += `${strLen}#${strs[i]}`
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let strsLenStr = '', i = 0
        const result: string[] = []
        while(str[i]!= '#'){
            strsLenStr += str[i++]
        }
        i++
        const strsLen = parseInt(strsLenStr)
        for(let j=0; j < strsLen;j++){
            let sizeStr = ''
            while(str[i]!= '#'){
                sizeStr += str[i++]
            }
            i++
            const size = parseInt(sizeStr)
            let word = ''
            for(let k = i;k<i+size;k++){
                word+= str[k]
            }
            result.push(word)
            i += size
        }
        return result
    }
}
