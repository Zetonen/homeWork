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
for (let i = 1; i <= 2 * n - 1; i += 2) {
    sum += i
}
alert("sum = " + sum)