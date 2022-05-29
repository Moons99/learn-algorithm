var intersection = function(nums1, nums2) {
    // 业务写法
    // return[...new Set(nums1.filter(i => nums2.includes(i)))]

    let res = new Set()
    let num1Set = new Set(nums1)
    for (let i of nums2) {
        if (num1Set.has(i)){
            res.add(i)
        }
    }
    return [...res]
};
