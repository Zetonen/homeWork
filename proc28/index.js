let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 1 ')
    }
}

function isPrime(n) {
    let step = true
    let count = 2
    if (n == 2) {
        alert(false)
    } else {
        while (count < n) {
            if (n % count == 0) {
                step = false
                break
            }
            count += 1
        }
        return step
    }
}
alert(isPrime(n))