let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 0 ')
    }
}

function inxDigits(k) {
    let arr = []
    while (k >= 1) {
        arr.push(k % 10)
        k = parseInt(k / 10)
    }
    return arr.join('')
}
if (n / 10 < 1) {
    alert(n)
} else {
    alert(inxDigits(n))
}