let secondsHours = 60 * 60
let secondsDays = secondsHours + 24
let secondsMonth = parseInt(prompt('day in month = ')) * secondsDays
alert('14) ' + secondsHours + " - seconds in hours, " + secondsDays + " - seconds in Days, " + secondsMonth + " - seconds in Month")
let date = new Date()
alert("15) " + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())
let numb = Math.pow(parseInt(prompt('numb = ')), 2)
alert('16) ' + numb)
let num = 47
num += 7
num -= 18
num *= 10
num /= 15
alert('17)' + num)
num = 10
num++
num++
num--
alert('18)' + num)