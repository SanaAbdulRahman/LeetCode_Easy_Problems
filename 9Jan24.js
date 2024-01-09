//9. Palindrome Number

var isPalindrome = function (x) {
    let xStr = x.toString();
    let reversedX = xStr.split('').reverse().join('');

    return xStr === reversedX;
}

const num1 = 121;
const num2 = -121;
const num3 = 10;

console.log(isPalindrome(num1));
console.log(isPalindrome(num2));
console.log(isPalindrome(num3));

