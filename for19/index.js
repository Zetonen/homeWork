let key = true
while (key) {
    n = parseFloat(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 0')
    }
}
if (n == 1) {
    alert("sum = " + 1)
} else {
    let sum = 1
    for (let i = 2; i <= n; i++) {
        if (n - i >= 1) {
            sum *= i
        } else {
            sum *= n
        }
        console.log(sum, i)
    }
    alert("sum = " + sum)
}