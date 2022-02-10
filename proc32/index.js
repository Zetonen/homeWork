let key = true
while (key) {
    d = parseInt(prompt("k= "))
    if (d > 0 && d < 360) {
        key = false
    } else {
        alert('d must be > 0 and < 360 ')
    }
}

function degToRad(d) {
    return (d * 3.14 / 180).toFixed(6)
}


alert(degToRad(d))