let key = true
while (key) {
    a = parseInt(prompt("a= "))
    b = parseInt(prompt("b= "))
    if (a > 0 && b > 0) {
        key = false
    } else {
        alert('a and b must be > 0 ')
    }
}
while (b !== 0) {
    b = a % (a = b)
}
alert(a)