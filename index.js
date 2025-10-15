// SetTimeout Example

function displayTrafficLight(light) {
  console.log(light)
}
displayTrafficLight("red")

setTimeout( displayTrafficLight, 6000,"yellow")

displayTrafficLight("green")


const timerStop = setTimeout(displayTrafficLight, 7000, "blue")

document.getElementById("btn").addEventListener("click", function() {
  clearTimeout(timerStop)
  console.log("timer stopped")
})


