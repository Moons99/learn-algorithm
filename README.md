## 位运算

```
&       与       校验权限    只有两个操作数相应的比特位都是 1 时，结果才为 1，否则为 0。
|       或       赋予权限    当两个操作数相应的比特位至少有一个 1 时，结果为 1，否则为 0。
^       异或      xxx       当两个操作数相应的比特位有且只有一个 1 时，结果为 1，否则为 0。
~       取反      xxx       反转操作数的比特位，即 0 变成 1，1 变成 0。
`>>`    右移      除以2      将 a 的二进制表示向右移 b (< 32) 位，丢弃被移出的位。
`<<`    左移      乘以2     	将 a 的二进制形式向左移 b (< 32) 比特位，右边用 0 填充。

```

## 数据结构

<details>
  <summary>Array(数组)</summary>

* 1.两数之和
* 26.删除有序数组中的重复项 
* 27.移除元素
* 125.验证回文串
* 167.两数之和 II - 输入有序数组
* 209.长度最小的子数组
* 283.移动零
* 344.反转字符串
* 349.两个数组的交集
* 977.有序数组的平方

</details>

<details>
  <summary>链表</summary>

* [203. 移除链表元素（removeElements）](https://leetcode.cn/problems/remove-linked-list-elements/)
* [141. 环形链表（hasCycle）](https://leetcode.cn/problems/linked-list-cycle/)
</details>

<details>
  <summary>栈</summary>

* [20. 有效的括号（isValid）](https://leetcode.cn/problems/valid-parentheses/)
* [71. 简化路径（simplifyPath）](https://leetcode.cn/problems/simplify-path/)
</details>

<details>
  <summary>树</summary>

</details>

## 算法思想
## 排序
[冒泡排序](sort/BubbleSort.js)  
[快速排序](sort/quickSort.js)  
[原地快排](sort/quickSort1.js)

## 二分

## 双指针


## 回溯和递归
[46. 全排列](https://leetcode.cn/problems/permutations/)  
[79. 单词搜索](https://leetcode.cn/problems/word-search/)


## 贪心
[860. 柠檬水找零](https://leetcode.cn/problems/lemonade-change/)

## 动态规划