let arr = [213,54,12,35,6,45,765,653,247,123,567,234,97,999]
const quickSort = (arr) =>{
    if (arr.length < 2) return arr
    let left = [],
        right = [],
        flag = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > flag){
            right.push(arr[i])
        }else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(flag,quickSort(right))
}

console.log(quickSort(arr));