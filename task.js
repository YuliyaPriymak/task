let str = 'lambda';
let arr = [];

arr.push(str.split('').join('.'))

for (let a = 1; a < str.length; a++) {
    let start = str.slice(0, a) + '.';
    let end = str.slice(a, str.length);
    let sum = start + end;
    arr.push(sum)
}


for (let i = 2; i < str.length; i++) {
    let start = str.slice(0, i).split('').join('.');
    let end = str.slice(i, str.length);
    let sum = start + end
    arr.push(sum)
}

for (let i = str.length - 1; i > 1; i--) {
    let end = str.slice(str.length - i).split('').join('.')
    let start = str.slice(0, str.length - i);
    let sum = start + end
    arr.push(sum)
}

console.log(arr, arr.length);
let uniqArr = [...new Set(arr.map(a => a))]
console.log(uniqArr, uniqArr.length);


