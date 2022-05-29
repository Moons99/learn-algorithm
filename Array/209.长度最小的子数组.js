var minSubArrayLen = function(target, nums) {

    let slow = 0,
        fast = 0,
        sum = 0,
        len = nums.length,
        res = len +1
    while (fast < len){
        sum += nums[fast++]
        while (sum >= target){
            let subLen = fast- slow
            res = (res < subLen) ? res : subLen
            sum -= nums[slow++]
        }
    }
    return (res > len)? 0 : res
};

minSubArrayLen(target = 7, nums = [2,3,1,2,4,3])