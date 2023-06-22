import { LeetCode } from "leetcode-query";
const leetcode = new LeetCode();
const user = await leetcode.user("dsyost");
export function test() {
    console.log(user.recentSubmissionList);
}
