import { LeetCode, UserProfile, Problem } from "leetcode-query";

const leetcode = new LeetCode();

export async function getUserProfile(name: string): Promise<UserProfile> {
    return await leetcode.user(name);
}

export async function getProblem(name: string): Promise<Problem>{
    return await leetcode.problem(name);
}
