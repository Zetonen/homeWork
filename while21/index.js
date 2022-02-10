let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 0) {
        key = false
    } else {
        alert('n must be > 0 ')
    }
}

let numb = false

if (n / 10 < 1) {
    if (n % 2 != 0) {
        alert(true)
    } else if (n % 2 == 0) {
        alert(false)
    }
} else {
    while (n >= 1) {
        if (n % 2 != 0) {
            numb = true
            break
        } else {
            n = parseInt(n / 10)
        }
    }
    alert(numb)
}