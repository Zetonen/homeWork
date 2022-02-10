x = parseInt(prompt("x= "))

function choice(x) {
    if (Math.abs(x) > 2) {
        return 2 * x
    } else {
        return -3 * x
    }
}
alert(choice(x))