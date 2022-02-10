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
    alert("sum = " + 1)
} else {
    let sum_all = 1
    let sum_element = 1
    for (let i = 2; i <= n; i++) {
        sum_element = 1
        for (let j = 1; j <= i; j++) {
            sum_element *= j
        }
        sum_all += sum_element
    }
    alert("sum = " + sum_all)
}