/*
Check if a number can be reached by either multiplying by 3 or adding 5, starting with 1
*/
function solution(num) {
    function find(cur, history) {
        if (cur == num) {
            return history
        } else if (cur > num) return null
        else {
            return (
                find(cur * 3, `( ${history} * 3)`) ||
                find(cur + 5, `( ${history} + 5 )`)
            )
        }
    }
    return find(1, "1")
}
// console.log(solution(13))

let range = (start, end, step) => {
    if(step === undefined)
        step = 1
    let arr = []    
    for(let i = start; i < end; i += step){
        arr.push(i)
    }
    return arr;
}

console.log(range(1, 10, 2))