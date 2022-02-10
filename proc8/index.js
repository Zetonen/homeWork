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


function addRightDigit(k, d1, d2) {
    k *= 10
    k += d1
    k *= 10
    return k += d2
}
alert(addRightDigit(k, d1, d2))