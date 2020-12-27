function solution(board, moves) {
    var answer = 0;
    var list = [];

    for(var i = 0; i < moves.length; i++){
        for(var j = 0; j <board.length; j++){
            if(board[j][moves[i]-1] != 0){
                list.push(board[j][moves[i]-1]);
                if(list.length > 1 && list[list.length-1] == list[list.length-2]){
                    list.pop();
                    list.pop();
                    answer += 2;

                }

                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    return answer;
}

const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};
