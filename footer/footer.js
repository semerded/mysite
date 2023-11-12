fetch("/footer/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
function stableNumbers(unitToCheck) {
    if (unitToCheck < 10) {
    return '0' + unitToCheck;
  };
  return unitToCheck;
}
function timeInBelgium() {
  const dateTime = new Date();
  let hours = dateTime.getHours();
  hours = stableNumbers(hours);
  let minutes = dateTime.getMinutes();
  minutes = stableNumbers(minutes);
  let seconds = dateTime.getSeconds();
  seconds = stableNumbers(seconds);
  let date = dateTime.getDate();
  date = stableNumbers(date);
  let month = dateTime.getMonth() + 1; // idk but the month had a weird kronkel in his head
  month = stableNumbers(month);
  const year = dateTime.getFullYear();
  try {
    document.getElementById("time_in_belgium").innerHTML = `${date}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    // when the website isn't fully loaded yet it will cause an error
  }

  setTimeout(() => {
    timeInBelgium()
  }, 100);
}
timeInBelgium()
