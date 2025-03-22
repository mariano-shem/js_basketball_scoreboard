let home = 0
let away = 0
const homePoint = document.getElementById("homePoint")
const awayPoint = document.getElementById("awayPoint")

const addOne = (e) => {
  if (e.parentElement.classList.contains("home-scores")) {
    home += 1
    homePoint.textContent = home
  }
  else { //for away point
    away += 1
    awayPoint.textContent = away
  }
}
const addTwo = (e) => {
  if (e.parentElement.classList.contains("home-scores")) {
    home += 2
    homePoint.textContent = home
  } else { //for away point
    away += 2
    awayPoint.textContent = away
  }
}
const addThree = (e) => {
  if (e.parentElement.classList.contains("home-scores")) {
    home += 3
    homePoint.textContent = home
  } else { //for away point
    away += 3
    awayPoint.textContent = away
  }
}

// Instead of having different functions in adding points for home and 
// away scores, create only three (3) onclick functions - for 1 point, 2 points, and 3 points. 
// Create condition to check whether function is clicked in the home or away ul element wrapper,
// then apply the points.