let key = true
while (key) {
    n = parseInt(prompt("n= "))
    if (n > 1) {
        key = false
    } else {
        alert('n must be > 1 ')
    }
}

let stepSecond = 2
let stepFirst = 1
let step = 0
while (stepSecond <= n) {
    if (stepSecond == n) {
        say = true
        break
    } else {
        step = stepSecond
        stepSecond += stepFirst
        stepFirst = step
    }
}
alert(stepSecond)