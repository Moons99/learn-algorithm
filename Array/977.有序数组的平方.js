var sortedSquares = function(nums) {
    let left = 0,
        right = nums.length-1,
        arr = Array(nums.length),
        k = right
    while (right >= left){
        let l = nums[left] * nums[left]
        let r = nums[right] * nums[right]
        if (r > l){
            arr[k] = r
            right--
        }else {
            arr[k] = l
            left++
        }
        k--
    }
    return arr
};