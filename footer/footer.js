fetch("/footer/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
function timeInBelgium() {
  const dateTime = new Date();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1; // idk but the month had a weird kronkel in his head
  const year = dateTime.getFullYear();
  console.log(dateTime)
  try {
    document.getElementById("time_in_belgium").innerHTML = `${date}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  } catch (error) {
    
  }

  setTimeout(() => {
    timeInBelgium()
  }, 100);
}
timeInBelgium()
