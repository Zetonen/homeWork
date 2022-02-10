aX = parseInt(prompt("aX= "))
aY = parseInt(prompt("aY= "))
bX = parseInt(prompt("bX= "))
bY = parseInt(prompt("bY= "))
cX = parseInt(prompt("cX= "))
cY = parseInt(prompt("cY= "))

let abX = 0
let acX = 0
let abY = 0
let acY = 0


if (aX >= bX) {
    abX = aX - bX
} else {
    abX = aX - bX
}
if (aX >= cX) {
    acX = aX - cX
} else {
    acX = aX - cX
}
if (aY >= bY) {
    abY = aY - bY
} else {
    abY = aY - bY
}
if (aY >= cY) {
    acY = aY - cY
} else {
    acY = aY - cY
}

let abXY = Math.sqrt(Math.pow(abX, 2) + Math.pow(abY, 2))
let acXY = Math.sqrt(Math.pow(acX, 2) + Math.pow(acY, 2))
console.log(abXY)
console.log(acXY)

if (abXY < acXY) {
    alert("B closer than C , AB = " + abXY)
} else if (abXY > acXY) {
    alert("C closer than B, AC = " + acXY)
} else if (abXY == acXY) {
    alert("the distance is the same, AB = " + abXY + ' , AC = ' + acXY)
}