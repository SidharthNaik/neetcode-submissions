class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        // Sort position and speed based on position descending order

        const carMap = position.map((pos, i) => {
            return {
                position: pos,
                speed: speed[i]
            }
        })
        let result = 0
        const sortedCarMap = carMap.sort((a,b) => b.position - a.position )
        let fleetStack = [sortedCarMap[0]]
        console.log(sortedCarMap)
        for(let i = 1; i < sortedCarMap.length; i++){
            const reachingTime = ((target - sortedCarMap[i].position)/sortedCarMap[i].speed)
            const oldestReachingTime = ((target - fleetStack[0].position)/fleetStack[0].speed)
            if(reachingTime <= oldestReachingTime){
                fleetStack.push(sortedCarMap[i])
            } else {
                result++
                fleetStack = [sortedCarMap[i]]
            }
        }
        result++
        return result
    }
}
