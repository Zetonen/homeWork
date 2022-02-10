let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 0')
    }
}
let sum = 0
for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
        sum += 1 + i / 10
        console.log("+")
    } else {
        sum -= 1 + i / 10
        console.log("-")

    }
}
alert("sum = " + sum.toFixed(1))