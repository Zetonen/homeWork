x = parseInt(prompt("x = "))

function sin_x(x) {
    if (x > 0) {
        return 2 * Math.sin(x)
    } else if (x < 0) {
        return 6 - x
    }
}
alert(sin_x(x))