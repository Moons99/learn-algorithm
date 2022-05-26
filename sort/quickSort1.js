let arr = [213,54,12,35,6,45,765,653,247,123,567,234,97,999]
const quickSort1 = (arr, start =0 , end = arr.length-1) =>{
    if (start < end){
        let index = quick(arr, start, end)
        quickSort1(arr, start, index-1)
        quickSort1(arr,index, end)
    }
    return arr
}

const quick = (arr, start, end) =>{
    let init = start,
        flag = arr[init]
    start++
    while (start<= end){
        while (arr[end]> flag){
            end--
        }
        while (arr[start]< flag){
            start++
        }
        if (start< end){
            [arr[start],arr[end]] = [arr[end],arr[start]]
            start++
            end--
        }
    }
    [arr[init],arr[start-1]] = [arr[start-1],arr[init]]
    return start
}



console.log(quickSort1(arr))