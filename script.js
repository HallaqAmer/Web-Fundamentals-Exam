var count=0

function displayAlert() {
    count++
    alert("The number of clicks are"+" "+count)
    return count
}

function changeStyle(element) {
    element.classList.add("btn-hover")
}

function keepStyle(element) {
    element.classList.remove("btn-hover")
}