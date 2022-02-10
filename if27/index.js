x = parseInt(prompt("x= "))

function choice(x) {
    if (x < 0) {
        return 0
    } else if (x % 2 >= 0 && x % 2 < 1) {
        return 1
    } else if (x % 2 >= 1 && x % 2 < 2) {
        return -1
    }
}
alert(choice(x))