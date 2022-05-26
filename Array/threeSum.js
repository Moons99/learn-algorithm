const threeSum = (nums) =>{
    let list = []
    if (nums.length < 3) return []
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length-2; i++) {
        let l = i+1,
            r = nums.length-1
        // 如果遇到重复的数字，则跳过
        if(i>0 &&nums[i]===nums[i-1]) {
            continue
        }

        while (l< r){
            if (nums[l]+nums[r]+nums[i]===0){
                list.push([nums[l],nums[r],nums[i]])
                r--
                l++
                while(l < r && nums[l] ===nums[l-1]){
                    l++
                }
                while(l < r && nums[r] ===nums[r+1]){
                    r--
                }
            }else if (nums[l]+nums[r]+nums[i]>0){
                r--
                while(l < r && nums[r] ===nums[r+1]){
                    r--
                }
            }else {
                l++
                while(l < r && nums[l] ===nums[l-1]){
                    l++
                }
            }
        }
    }

    return list
}

console.log(threeSum([-1,0,1,2,-1,-4]))