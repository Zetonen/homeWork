key = true
alert("numbers from 1 to 8")
while (key) {
    x1 = parseInt(prompt("x1= "))
    y1 = parseInt(prompt("y1= "))
    x2 = parseInt(prompt("x2= "))
    y2 = parseInt(prompt("y2= "))
    if (x1 >= 1 && x1 <= 8 && x2 >= 1 && x2 <= 8 && y1 >= 1 && y1 <= 8 && y2 >= 1 && y2 <= 8) {
        key = false
    } else {
        alert('Invalid input. try again')
    }
}

function leftRight(x1, y1, x2, y2) {
    if (x1 == x2 && y1 == y2) {
        return true
    } else if (x1 - 2 == x2 || x1 + 2 == x2) {
        if (y1 + 1 == y2 || y1 - 1 == y2) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

function upDown(x1, y1, x2, y2) {
    if (x1 == x2 && y1 == y2) {
        return true
    } else if (y1 - 2 == y2 || y1 + 2 == y2) {
        if (x1 + 1 == x2 || x1 - 1 == x2) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}
if (leftRight(x1, y1, x2, y2) || upDown(x1, y1, x2, y2)) {
    alert("True")
} else {
    alert("False")
}