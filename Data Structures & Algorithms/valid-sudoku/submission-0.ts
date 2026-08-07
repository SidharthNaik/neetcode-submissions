class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        function isPresentInSubbox(r: number, c: number){
            let startRow = Math.floor(r/3)*3, startCol = Math.floor(c/3)*3
            const numAtPos = board[r][c]
            for(let i=startRow;i<startRow+3;i++){
                for(let j = startCol;j<startCol+3;j++){
                    if(i === r && j === c){
                        continue
                    }
                    if(board[i][j] === numAtPos){
                        return true
                    }
                }
            }
            return false
        }

        function isPresentInRowCol(r: number, c: number){
            const num = board[r][c]
            for(let i=0;i<9;i++){
                if(i===r){
                    continue
                }
                if(num === board[i][c]){
                    return true
                }
            }
            for(let i=0;i<9;i++){
                if(i===c){
                    continue
                }
                if(num === board[r][i]){
                    return true
                }
            }
            return false
        }

        for(let i =0;i<9;i++){
            for(let j = 0; j<9; j++){
                if(board[i][j] !== '.'){
                    if(isPresentInSubbox(i,j) || isPresentInRowCol(i,j)){
                        return false
                    }
                }
            }
        }
        return true
    }

    
}
