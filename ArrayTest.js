function solution(numbers) {
    var answer = [];
    for(var i = 0; i < numbers.length-1; i++){
        for(var j = i+1; j < numbers.length; j++){
            if(!answer.includes(numbers[i]+numbers[j])){
                answer.push(numbers[i]+numbers[j]);
            }
        }
    }
    answer.sort((a,b)=>a-b);
    return answer;
}

function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
