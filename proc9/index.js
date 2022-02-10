let key = true
while (key) {
    k = parseInt(prompt("k= "))
    d1 = parseInt(prompt("d1= "))
    d2 = parseInt(prompt("d2= "))
    if (k > 0 && d1 >= 0 && d1 <= 9 && d2 >= 0 && d2 <= 9) {
        key = false
    } else {
        alert('n must be > 0 and 0<=d<=9')
    }
}


function addLeftDigit(k, d1, d2) {
    let arr = []
    let arrNew = [d1, d2]
    while (k >= 1) {
        arr.push(k % 10)
        k = parseInt(k / 10)
    }
    while (arr.length >= 1) {
        arrNew.push(arr.pop())
    }
    return arrNew.join('')
}
alert(addLeftDigit(k, d1, d2))