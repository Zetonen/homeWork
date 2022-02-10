let key = true
while (key) {
    year = parseInt(prompt("x= "))
    if (year > 0) {
        key = false
    }
}


function leapНear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year && 400 == 0) {
                return 366
            } else {
                return 365
            }
        } else {
            return 366
        }
    } else {
        return 365
    }
}
alert(leapНear(year))