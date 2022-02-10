let key = true
while (key) {
    p = parseInt(prompt("p= "))
    if (p > 0 && p < 50) {
        key = false
    } else {
        alert('p must be > 0 and <50')
    }
}

let runS = 10
let day = 1
while (runS < 200) {
    runS = runS + runS + runS / 100 * p
    day += 1
}
alert('day = ' + day + " length = " + runS.toFixed(2))