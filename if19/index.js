first = parseInt(prompt("first= "))
second = parseInt(prompt("second= "))
third = parseInt(prompt("third= "))
fourth = parseInt(prompt("fourth= "))

if (first == second == third == fourth) {
    alert("all numbers are equal")
} else if (first == second == third) {
    alert("fourth")
} else if (first == second == fourth) {
    alert("third")
} else if (first == third == fourth) {
    alert("second")
} else if (second == third == fourth) {
    alert("first")
} else {
    alert("there is no equal triple of numbers")
}