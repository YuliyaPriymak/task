let str = 'lambda';
let arr = [];
let arrOfStr = str.split('');


arr.push(arrOfStr.join('.'))

for (let i = 1; i < str.length; i++) {
    let start = str.slice(0, i) + '.';
    let end = str.slice(i, str.length);
    let sum = start + end;
    arr.push(sum)
}

for (let i = 3; i < str.length; i++) {
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

for (let i = 1; i < (str.length); i++) {
    for (let j = 0; j < (str.length - (i + 2)); j++) {
        let y = str.split('');
        let q = y.splice((j), arrOfStr.length - (j + i));
        y.splice(j, 0, ...(q.join('.')));
        arr.push(y.join(''))
    }
}

for (let i = 1; i < (str.length - 2); i++) {
    for (let j = 1; j < (str.length - i); j++) {
        let x = str.split('');
        let y = x.splice(j, x.length - (i + j));
        y.unshift('.');
        y.push('.');
        x.splice(j, 0, ...y);
        arr.push(x.join(''))
    }
}
console.log(arr, arr.length);
let arrWithUniqStr = [...new Set(arr.map(a => a))]
console.log(arrWithUniqStr, arrWithUniqStr.length);



