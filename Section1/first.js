console.log("Hello From The Udemy");

function addUpTo(n){
    let total = 0
    for(let i = 0; i <= n; i++)
    {
        total += i;
    }

    return total;
} 
// Faster?
function addUpTo2(n){
    return n * (n+1) / 2;
}

console.log(addUpTo(5));
console.log(addUpTo2(5));

// 속도와 메모리, 가독성이 얼마나 있는 것인가?
// 이번 유데미에서는 속도에 더 중점을 둔다.
let t1 = performance.now();
addUpTo(1000000000); // 10억의 연산
let t2 = performance.now();

let t3 = performance.now();
addUpTo2(1000000000); // 10억의 연산
let t4 = performance.now();

console.log('Time Elapsed: ',(t2 - t1) / 1000, 'seconds');

console.log('Time Elapsed: ',(t4 - t3) / 1000, 'seconds');

/* 시간을 비교하면 직관적이지만, 사용하는 기계별로 측정되는 시간의 차이가 있다.
 * 동일한 기계에 대해서도 시간적 차이도 발생한다.
 * 대신 컴퓨터가 처리하는 연산의 횟수를 세는 법도 있다. (발생되는 연산을 갯수단위로 환산한다.)
 * 전체적인 추세를 파악하기 위한 횟수이기 때문에, 412N과 N은 결국은 N이라고 보면 된다.
*/