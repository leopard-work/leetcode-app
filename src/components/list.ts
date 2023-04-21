import { romanToInt, romanToIntInitial } from "./roman-to-int";
import {
  longestCommonPrefix,
  longestCommonPrefixInitial,
} from "./longest-common-prefix";
import { twoSum, twoSumInitial, twoSumParse } from "./two-sum";

const URL = "https://leetcode.com/problems/";
export const FIRSTRUN = 1;

export const listData = [
  {
    f: twoSumParse,
    f_view: twoSum,
    id: "1",
    name: "1. Two Sum",
    link: `${URL}two-sum/`,
    initial: twoSumInitial,
  },
  {
    f: romanToInt,
    id: "13",
    name: "13. Roman to Integer",
    link: `${URL}roman-to-integer/`,
    initial: romanToIntInitial,
  },
  {
    f: longestCommonPrefix,
    id: "14",
    name: "14. Longest Common Prefix",
    link: `${URL}longest-common-prefix/`,
    initial: longestCommonPrefixInitial,
    initialType: "array",
  },
];
