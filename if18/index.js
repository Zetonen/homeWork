first = parseInt(prompt("first= "))
second = parseInt(prompt("second= "))
third = parseInt(prompt("third= "))

if (first == second == third) {
    alert("all numbers are equal")
} else if (first == second) {
    alert("third")
} else if (first == third) {
    alert("second")
} else if (second == third) {
    alert("first")
} else {
    alert("there is no equal number")
}