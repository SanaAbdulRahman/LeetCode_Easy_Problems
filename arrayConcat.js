var getConcatenation = (nums) => {
    return [...nums, ...nums];
}

const arr = [1, 2, 1];
console.log(getConcatenation(arr));