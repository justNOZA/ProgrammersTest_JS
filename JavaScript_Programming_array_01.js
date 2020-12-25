function solution(array, commands) {
    var answer = [];
    var list = [];
    for(var i = 0; i < commands.length; i++){
        list = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b);
        answer[i] = list[commands[i][2]-1];
    }
    return answer;
}

/* 정상 동작 */
score.sort(function(a, b) { // 오름차순
    return a - b;
    // 1, 2, 3, 4, 10, 11
});

score.sort(function(a, b) { // 내림차순
    return b - a;
    // 11, 10, 4, 3, 2, 1
});

//설정을 하지 않으면 문자열로 인식해서 80이 9보다 뒤로 정렬이된다.

//-------------------------------------------------------------------------------------------
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)

        return newArray[position - 1]
    })
}
