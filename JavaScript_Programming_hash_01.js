function solution(participant, completion) {
    /*
    for(let i in participant) {
        if(completion.includes(participant[i]) == false) return participant[i];
        completion.splice(completion.indexOf(participant[i]), 1);
    }
    */

    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}

function solution(participant, completion) {
    var answer = '';
    var list = new Map();
    var num = 0;
    for(var i = 0; i < participant.length; i++){
        if(list.has(participant[i])) num = list.get(participant[i]);
        list.set(participant[i], num+1);
        num = 0;
    }
    for(var i = 0; i < completion.length; i++){
        num = list.get(completion[i]);
        list.set(completion[i], num -1);
    }
    for(var i = 0; i < list.size; i++){
        if(list.get(participant[i]) != 0){
            answer = participant[i];
        }
    }

    return answer;
}
