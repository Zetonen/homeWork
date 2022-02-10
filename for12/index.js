let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 0')
    }
}
if (n == 1) {
    alert("sum = " + 1.1)
} else {
    let sum = 1.1
    for (let i = 2; i <= n; i++) {
        sum *= 1 + i / 10
    }
    alert("sum = " + sum.toFixed(1))
}