function solution(sizes) {
    var answer = 0;
    let width = [];
    let height = [];
    
    // 기존 가로/세로 상관 없이 가장 짧은 부분을 임의로 가로라고 정한 후 정렬
    for(let i = 0; i < sizes.length; i++){
        sizes[i].sort((a,b)=>{
            return a - b ;
        })
        width.push(sizes[i][0]);
        height.push(sizes[i][1])
    }
    // sizes의 가로만 가져와 큰 순서대로 정렬
    width.sort((a,b)=>{
        return b - a;
    })
    // sizes의 세로만 가져와 큰 순서대로 정렬
    height.sort((a,b)=>{
        return b - a;
    })
    // 가장 큰 가로와 세로를 곱하며 answer에 할당
    answer = width[0] * height[0]
    
    return answer;
}