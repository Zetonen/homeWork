let key = true
while (key) {
    k = parseInt(prompt("k= "))
    n = parseInt(prompt("n= "))
    if (k > 0 && n > 0) {
        key = false
    } else {
        alert('k and n must be > 0 ')
    }
}

function digitCount(k, n) {
    let count = 0
    let numb = 0
    if (k / 10 < 1) {
        return 1
    } else {
        while (k >= 1) {
            n -= 1
            numb = k % 10
            k = parseInt(k / 10)
            if (n == 0) {
                return numb
            }
        }
        return -1
    }
}
alert(digitCount(k, n))