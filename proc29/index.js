let key = true
while (key) {
    k = parseInt(prompt("k= "))
    if (k > 0) {
        key = false
    } else {
        alert('k must be > 0 ')
    }
}

function digitCount(k) {
    let count = 0
    if (k / 10 < 1) {
        return 1
    } else {
        while (k >= 1) {
            count += 1
            k = parseInt(k / 10)
        }
        return count
    }
}
alert(digitCount(k))