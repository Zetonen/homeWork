let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 0 ')
    }
}

let arr = []
let numb = 1
if (n / 10 < 1) {
    alert(n)
} else {
    while (n >= 1) {
        arr.push(n % 10)
        n = parseInt(n / 10)
    }
    alert(arr)
}