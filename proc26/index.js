let key = true
while (key) {
    k = parseInt(prompt("k= "))
    if (k > 0) {
        key = false
    } else {
        alert('k must be > 0 ')
    }
}

function isPower5(k) {
    if (k >= 5) {
        while (k >= 5) {
            k /= 5
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
alert(isPower5(k))