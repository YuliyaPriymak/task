let str = 'lambda';
let arr = [];
let strArr = str.split('');


// let newStr = (array) => {
//     arr.push(array.join('.'))
//     console.log(arr);
//     return arr;
// }

// let xxx = (a) => {
//     let start = str.slice(0, a)+'.';
//     let end = str.slice(a, str.length);
//     let all = start+end;
//     arr.push(all)
//     console.log(arr);
//     return arr
// }
for (let a=0; a<=str.length; a++){
    let start = str.slice(0, a)+'.';
    let end = str.slice(a, str.length);
    let all = start+end;
    arr.push(all)
}
console.log(arr);


