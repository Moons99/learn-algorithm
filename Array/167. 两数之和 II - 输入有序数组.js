var twoSum = function(numbers, target) {
    let left = 0,
        right = numbers.length-1
    while (right > left){
        if (numbers[right] + numbers[left] > target){
            right--
        }else if (numbers[right] + numbers[left] < target){
            left++
        }else {
            return [left+1, right+1]
        }
    }
};