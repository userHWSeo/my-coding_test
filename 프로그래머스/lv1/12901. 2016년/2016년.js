function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    var answer = '';
    const randomDay = new Date(`${a} ${b}, 2016 00:00:00`);
    answer = days[randomDay.getDay()]
    return answer;
}