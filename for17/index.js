let key = true
a = parseInt(prompt("a= "))
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 0')
    }
}
let sum = 1
for (let i = 1; i <= n; i++) {
    sum += Math.pow(a, i)
}
alert("sum = " + sum)