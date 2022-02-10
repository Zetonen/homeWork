let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 0 ')
    }
}

function digitCountSum(k) {
    if (k / 10 < 1) {
        alert(k + " - sum, " + 1 + " - count")
    } else {
        let sum = 0
        let count = 0
        while (k >= 1) {
            count += 1
            sum += k % 10
            k = parseInt(k / 10)
        }
        alert(sum + " - sum, " + count + " - count")
    }
}
digitCountSum(n)