var simplifyPath = function(path) {
    const stack = []
    let paths = path.split('/')
    for (let i = 0; i < paths.length; i++) {
        const p = paths[i]
        console.log(p)
        if (p === '..'){
            stack.pop()
        }else if (p && p !== '.'){
            stack.push(p)
        }
    }
    return '/'+stack.join('/')
};


console.log(simplifyPath("/home//foo/"));