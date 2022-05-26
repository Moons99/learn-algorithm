var exist = function(board, word) {
    let row = board.length,
        col = board[0].length
    for (let i = 0; i <row ; i++) {
        for (let j = 0; j < col; j++) {
            let res =  find(i,j,0) //查询起点
            if (res) return res
        }
    }

    let find = (i, j, cur) =>{
        // 判断终止
        if (i>=row || i<0) return false
        if (j>=col || i<0) return false

        let temp = board[i][j]

        if ( temp !== word[cur] ) return false

        if (cur === word.length-1) return true

        board[i][j] = null
        // 查找结果
        const res = find(i+1,j,cur) ||
            find(i-1,j,cur) ||
            find(i,j+1,cur) ||
            find(i,j-1,cur)
        //撤回
        board[i][j] = temp
        return res
    }
};