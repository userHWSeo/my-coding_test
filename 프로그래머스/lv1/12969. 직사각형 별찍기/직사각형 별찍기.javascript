process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    // 줄을 표현해야 함으로 b(m) 값을 먼저 for문에 적용
    for(let i = 0; i < b; i++){
        let sum = "";
        // *을 찍기 위해 a(n)값을 for문에 적용
        for(let i = 0; i < a; i++){
            sum += "*";
        }
        console.log(sum)
    }
});

// 변수 sum을 사용하여 *을 n값 만큼 모아 안 쪽 for문이 끝나면 console.log(sum)을 실행하도록 함
// 이후 바깥 for문에서 m값 만큼 세로 줄을 만들어 줌