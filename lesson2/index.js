let arr = ['a', 'b', 'c']
alert("1) " + arr)
arr.forEach(element => {
    alert("2) " + element)
});
arr = ['a', 'b', 'c', 'd']
alert("3) " + arr[0] + '+' + arr[1] + ',' + arr[2] + '+' + arr[3])
arr = [2, 5, 3, 9]
let sum = arr[0] * arr[1] + arr[2] * arr[3]
alert('4) ' + sum)
let obj = { a: 1, b: 2, c: 3 }
alert('5) ' + obj.c + ' - ' + obj[3])