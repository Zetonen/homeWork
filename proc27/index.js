let key = true
while (key) {
    k = parseInt(prompt("k= "))
    n = parseInt(prompt("n= "))
    if (k > 0 && n > 1) {
        key = false
    } else {
        alert('k must be > 0 and n > 1')
    }
}

function isPowerN(k, n) {
    if (k >= n) {
        while (k >= n) {
            k /= n
        }
        if (k == 1) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }

}
alert(isPowerN(k, n))