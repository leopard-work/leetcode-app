import { romanToInt, romanToIntInitial } from "./roman-to-int";
import {
  longestCommonPrefix,
  longestCommonPrefixInitial,
} from "./longest-common-prefix";

const URL = "https://leetcode.com/problems/";
export const FIRSTRUN = 0;

export const listData = [
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
    initialType: 'array'
  },
];
