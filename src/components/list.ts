import {
  addBinary,
  addBinaryInitial,
  addBinaryParse,
  isPalindrome,
  isPalindromeInitial,
  isValid,
  isValidInitial,
  lengthOfLastWord,
  lengthOfLastWordInitial,
  longestCommonPrefix,
  longestCommonPrefixInitial,
  mergeTwoLists,
  mergeTwoListsInitial,
  mergeTwoListsParse,
  plusOne,
  plusOneInitial,
  removeDuplicates,
  removeDuplicatesInitial,
  removeElement,
  removeElementInitial,
  removeElementParse,
  romanToInt,
  romanToIntInitial,
  searchInsert,
  searchInsertInitial,
  searchInsertParse,
  strStr,
  strStrInitial,
  strStrParse,
  twoSum,
  twoSumInitial,
  twoSumParse,
} from "./index";

const URL = "https://leetcode.com/problems/";
export const FIRSTRUN = 67;

export const listData = [
  {
    f: twoSumParse,
    f_view: twoSum,
    id: "1",
    name: "1. Two Sum",
    link: `${URL}two-sum/`,
    initial: twoSumInitial,
    initialType: "ListNode",
  },
  {
    f: isPalindrome,
    id: "9",
    name: "9. Palindrome Number",
    link: `${URL}palindrome-number/`,
    initial: isPalindromeInitial,
    initialType: "number",
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
  {
    f: isValid,
    id: "20",
    name: "20. Valid Parentheses",
    link: `${URL}valid-parentheses/`,
    initial: isValidInitial,
  },
  {
    f: mergeTwoListsParse,
    f_view: mergeTwoLists,
    id: "21",
    name: "21. Merge Two Sorted Lists",
    link: `${URL}merge-two-sorted-lists/`,
    initial: mergeTwoListsInitial,
  },
  {
    f: removeDuplicates,
    id: "26",
    name: "26. Remove Duplicates from Sorted Array",
    link: `${URL}remove-duplicates-from-sorted-array/`,
    initial: removeDuplicatesInitial,
    initialType: "arrayNumber",
  },
  {
    f: removeElementParse,
    f_view: removeElement,
    id: "27",
    name: "27. Remove Element",
    link: `${URL}remove-element/`,
    initial: removeElementInitial,
  },
  {
    f: strStrParse,
    f_view: strStr,
    id: "28",
    name: "28. Find the Index of the First Occurrence in a String",
    link: `${URL}find-the-index-of-the-first-occurrence-in-a-string/`,
    initial: strStrInitial,
  },
  {
    f: searchInsertParse,
    f_view: searchInsert,
    id: "35",
    name: "35. Search Insert Position",
    link: `${URL}search-insert-position/`,
    initial: searchInsertInitial,
  },
  {
    f: lengthOfLastWord,
    id: "58",
    name: "58. Length of Last Word",
    link: `${URL}ength-of-last-word/`,
    initial: lengthOfLastWordInitial,
  },
  {
    f: plusOne,
    id: "66",
    name: "66. Plus One",
    link: `${URL}plus-one/`,
    initial: plusOneInitial,
    initialType: "arrayNumber",
  },
  {
    f: addBinaryParse,
    f_view: addBinary,
    id: "67",
    name: "67. Add Binary",
    link: `${URL}add-binary/`,
    initial: addBinaryInitial,
  },
];
