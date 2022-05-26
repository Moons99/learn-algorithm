let arr = [213,54,12,35,6,45,765,653,247,123,567,234,97,999]

const BubbleSort = (arr) =>{
    let len = arr.length -1
    for (let j = 0; j < len; j++) {
        for (let i = 0; i < len - j; i++) {
            if(arr[i] > arr[i+1]){
                [arr[i] ,arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
    }

    return arr
}
console.log(BubbleSort(arr));