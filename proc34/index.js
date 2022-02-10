let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0 && n < 360) {
        key = false
    } else {
        alert('n must be > 0  ')
    }
}

function fact(n) {
    if (n == 1) {
        return 1
    } else {
        let sum = 1
        for (let i = 2; i <= n; i++) {
            if (n - i >= 1) {
                sum *= i
            } else {
                sum *= n
            }
        }
        return sum
    }
}

alert(fact(n))