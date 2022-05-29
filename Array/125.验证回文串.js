var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi,'').toLowerCase()

    let left = 0,
        right = str.length-1
    while (left < right){
        if (str[left] !== str[right]){
            return false
        }
        right--
        left++
    }
    return true
};