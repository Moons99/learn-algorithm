var IsValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const ele = s.charAt(i)
        switch (ele) {
            case "(" :
                stack.push(')')
                break
            case "{" :
                stack.push('}')
                break
            case "[" :
                stack.push(']')
                break
            default:
                if (ele != stack.pop()) return false
                break
        }
    }
    return stack.length === 0
};




// var IsValid = function (s){
//
//     let stack = [],
//         obj = {
//             "(":")",
//             "{":"}",
//             "[":"]",
//         }
//     let len = s.length
//     if (len%2 !== 0) return false
//
//     for (let i = 0; i < len; i++) {
//         const ele = s[i]
//         if (ele in obj){
//             stack.push(ele)
//         }else {
//             if (ele != obj[stack.pop()]){
//                 return false
//             }
//         }
//     }
//     return !stack.length
// }

console.log(IsValid('{()}'));