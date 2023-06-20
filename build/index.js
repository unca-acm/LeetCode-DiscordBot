import { LeetCode } from "leetcode-query";
const leetcode = new LeetCode();
const user = await leetcode.user("dsyost");
console.log(user.recentSubmissionList);
