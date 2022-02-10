aX = parseInt(prompt("aX= "))
aY = parseInt(prompt("aY= "))

bX = parseInt(prompt("bX= "))
bY = parseInt(prompt("bY= "))

cX = parseInt(prompt("cX= "))
cY = parseInt(prompt("cY= "))

let dX = 0
let dY = 0

if (aX == bX) {
    dX = cX
} else if (aX == cX) {
    dX = bX
} else if (bX == cX) {
    dX = aX
}
if (aY == bY) {
    dY = cY
} else if (aY == cY) {
    dY = bY
} else if (bY == cY) {
    dY = aY
}
alert(dX + " " + dY)