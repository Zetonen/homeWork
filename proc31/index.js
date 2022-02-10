let key = true
while (key) {
    k = parseInt(prompt("k= "))
    if (k > 0) {
        key = false
    } else {
        alert('k must be > 0 ')
    }
}

function isPalindrome(k) {
    let arr = []
    let strK = String(k)
    if (k / 10 < 1) {
        return true
    } else {
        while (k >= 1) {
            arr.push(String(k % 10))
            k = parseInt(k / 10)
        }
        if (arr.join('') == strK) {
            return true
        } else {
            return false
        }
    }
}

alert(isPalindrome(k))