a1 = (prompt("a1= "))
b1 = (prompt("b1= "))
c1 = (prompt("c1= "))
a2 = (prompt("a2= "))
b2 = (prompt("b2= "))
c2 = (prompt("c2= "))

function sortInc(a, b, c) {
    if (parseFloat(a) >= parseFloat(b) && parseFloat(a) >= parseFloat(c)) {
        if (parseFloat(b) >= parseFloat(c)) {
            return [c, b, a]
        } else {
            return [c, c, a]
        }
    } else if (parseFloat(b) > parseFloat(a) && parseFloat(b) > parseFloat(c)) {
        if (parseFloat(a) >= parseFloat(c)) {
            return [c, a, b]
        } else {
            return [a, c, b]
        }
    } else if (parseFloat(c) > parseFloat(a) && parseFloat(c) > parseFloat(b)) {
        if (parseFloat(a) >= parseFloat(b)) {
            return [b, a, c]
        } else {
            return [a, b, c]
        }
    }
}

[a1, b1, c1] = sortInc(a1, b1, c1);
[a2, b2, c2] = sortInc(a2, b2, c2);

alert(a1 + ' -  ' + b1 + ' -  ' + c1)
alert(a2 + ' -  ' + b2 + ' -  ' + c2)