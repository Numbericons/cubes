function isSumOfCubes(s) {
    let arr = s.split(" ");

    for (let i=0; i < s.length; i++) {
        console.log(arr[i]);
    }
}

let x = isSumOfCubes("0 9026315 -827&()"); // "0 0 Lucky";
let y = isSumOfCubes("9026315 -827&()") // "Unlucky"

console.log(`First result should be '0 0 Lucky' and is ${x}`);
console.log(`Second result should be 'Unlucky' and is ${y}`);