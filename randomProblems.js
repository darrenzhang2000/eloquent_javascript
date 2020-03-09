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
    if (step === undefined) step = 1
    let arr = []
    for (let i = start; i < end; i += step) {
        arr.push(i)
    }
    return arr
}

// console.log(range(1, 10, 2))

let arrayToList = arr => {
    list = null
    for (i = arr.length; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list 
}

L = [1, 2, 3]
// console.log(arrayToList(L))

let listToArray = list =>{
    arr = []
    for(let node = list; node; node = node.rest){
        arr.push(node.value)
    }
    return arr
}


function unless(test, then){
    if(!test){
        then()
    }
}

function fail(){
    console.log("failed")
}

// for(let i = 0; i < 10; i++){
//     unless(i % 3 !== 0, ()=>{
//         console.log(`${i} is divisible by 3`)
//     })
// }

let flattening = (array2d) =>{
    return array2d.reduce((result, curArr) => result.concat(curArr), [])  
} 

var flatten1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(flattening(flatten1))

