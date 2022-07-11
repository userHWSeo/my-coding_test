function solution(n)
{
    var answer = 0;
    const arr = String(n).split('');
    arr.map((a)=> answer += Number(a))    
    return answer;
}