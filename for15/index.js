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
let sum = a
for (let i = 1; i < n; i++) {
    sum *= a
}
alert("sum = " + sum)