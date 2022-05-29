var reverseString = function(s) {
    let left = 0,
        right = s.length-1
    while (right > left){
        [s[left],s[right]] = [s[right],s[left]]
        right--
        left++
    }
};