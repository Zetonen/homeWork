a = (prompt("a= "))
b = (prompt("b= "))
c = (prompt("c= "))
d = (prompt("d= "))

function minMax(x, y) {
    if (parseFloat(x) > parseFloat(y)) {
        return [y, x]
    } else {
        return [x, y]
    }
}

[a, b] = minMax(a, b);
[c, d] = minMax(c, d);
[b, d] = minMax(b, d);
[a, c] = minMax(a, c);
alert(a + ' - min, ' + d + ' - max ')