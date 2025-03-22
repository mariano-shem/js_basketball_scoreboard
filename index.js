let home = 0
let away = 0
const homePoint = document.getElementById("homePoint")
const awayPoint = document.getElementById("awayPoint")

const addOne = (e) => {
  if (e.parentElement.classList.contains("home-scores")) {
    home += 1
    homePoint.textContent = home
  }
  else {
    away += 1
    awayPoint.textContent = away
  }
}
const addTwo = (e) => {
  if (e.parentElement.classList.contains("home-scores")) {
    home += 2
    homePoint.textContent = home
  } else {
    away += 2
    awayPoint.textContent = away
  }
}
const addThree = (e) => {
  if (e.parentElement.classList.contains("home-scores")) {
    home += 3
    homePoint.textContent = home
  } else {
    away += 3
    awayPoint.textContent = away
  }
}