let key = true
while (key) {
    r = parseFloat(prompt("r= "))
    if (r > 0 && r < 360) {
        key = false
    } else {
        alert('r must be > 0 and < 360 ')
    }
}

function radToDeg(r) {
    return (r * 180 / 3.14).toFixed(6)
}


alert(radToDeg(r))