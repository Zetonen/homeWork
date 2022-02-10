let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 0 ')
    }
}

let sum = 0
let count = 0
if (n / 10 < 1) {
    alert(n + " - sum, " + 1 + " - count numbers")
} else {
    while (n >= 1) {
        count += 1
        sum += (n % 10)
        n = parseInt(n / 10)
    }
    alert(sum + " - sum, " + count + " - count numbers")
}