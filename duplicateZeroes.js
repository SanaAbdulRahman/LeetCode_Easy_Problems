const duplicateZeroes = function (arr) {
    //  console.log(arr.length);
    for (let i = (arr.length) - 1; i >= 0; i--) {
        //console.log("i :", i);
        if (arr[i] === 0) {
            // console.log("arr[i]", arr[i]);

            for (j = (arr.length) - 1; j > i; j--) {
                console.log("arr[j] : ", arr[j]);
                console.log("arr[j-1] : ", arr[j - 1]);
                arr[j] = arr[j - 1];
                console.log("arr", arr);
            }
        }
    }
}

const a = [1, 0, 2, 3, 0, 4, 5, 0]
duplicateZeroes(a);