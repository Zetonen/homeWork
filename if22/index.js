let key = true
while (key) {
    x = parseInt(prompt("x= "))
    y = parseInt(prompt("y= "))
    if (x == 0 || y == 0) {
        alert("OX or OY = 0, enter again")
    } else {
        key = false
    }
}
if (y > 0 && x > 0) {
    alert("1")
} else if (y > 0 && x < 0) {
    alert("2")
} else if (y < 0 && x < 0) {
    alert("3")
} else if (y < 0 && x > 0) {
    alert("4")
}