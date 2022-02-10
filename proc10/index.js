a = (prompt("a= "))
b = (prompt("b= "))
c = (prompt("c= "))
d = (prompt("d= "))



function swap(x, y) {
    return [y, x]
}

[a, b] = swap(a, b);
[c, d] = swap(c, d);
[b, c] = swap(b, c);
alert('a = ' + a + ', b = ' + b + ', c = ' + c + ', d = ' + d)