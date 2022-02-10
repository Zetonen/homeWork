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

function leftDown(x1, y1, x2, y2) {
    if (x1 == x2 && y1 == y2) {
        return true
    } else if (x1 == x2 || y1 == y2) {
        return false
    } else {
        while (x1 > 1 && y1 > 1) {
            x1 -= 1
            y1 -= 1
            if (x1 == x2 && y1 == y2) {
                return true
            }
        }
        if (x1 == x2 && y1 == y2) {
            return true
        } else {
            return false
        }
    }
}

function rightDown(x1, y1, x2, y2) {
    if (x1 == x2 && y1 == y2) {
        return true
    } else if (x1 == x2 || y1 == y2) {
        return false
    } else {
        while (x1 < 8 && y1 > 1) {
            x1 += 1
            y1 -= 1
            if (x1 == x2 && y1 == y2) {
                return true
            }
        }
        if (x1 == x2 && y1 == y2) {
            return true
        } else {
            return false
        }
    }
}

function rightUp(x1, y1, x2, y2) {
    if (x1 == x2 && y1 == y2) {
        return true
    } else if (x1 == x2 || y1 == y2) {
        return false
    } else {
        while (x1 < 8 && y1 < 8) {
            x1 += 1
            y1 += 1
            if (x1 == x2 && y1 == y2) {
                return true
            }
        }
        if (x1 == x2 && y1 == y2) {
            return true
        } else {
            return false
        }
    }
}

function leftUp(x1, y1, x2, y2) {
    if (x1 == x2 && y1 == y2) {
        return true
    } else if (x1 == x2 || y1 == y2) {
        return false
    } else {
        while (x1 > 1 && y1 < 8) {
            x1 -= 1
            y1 += 1
            if (x1 == x2 && y1 == y2) {
                return true
            }
        }
        if (x1 == x2 && y1 == y2) {
            return true
        } else {
            return false
        }
    }
}
if (leftDown(x1, y1, x2, y2) || rightDown(x1, y1, x2, y2) || rightUp(x1, y1, x2, y2) || leftUp(x1, y1, x2, y2)) {
    alert("True")
} else {
    alert("False")
}