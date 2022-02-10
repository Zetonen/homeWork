x = parseInt(prompt("x= "))

function choice(x) {
    if (x <= 0) {
        return -1 * x
    } else if (x < 2 && x > 0) {
        return Math.pow(x, 2)
    } else if (x >= 2) {
        return 4
    }
}
alert(choice(x))