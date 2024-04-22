fetch("/widgets/back_to_top/back_to_top.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("back-to-top").innerHTML = data;
    });


function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var firstLoad = true;

document.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".back_to_top").classList.remove("hide_back_to_top_button");
        if (firstLoad) {
            document.querySelector(".back_to_top").style.display = "block";
            firstLoad = false;
        }
    } else if (!firstLoad) {
        document.querySelector(".back_to_top").classList.add("hide_back_to_top_button");
    }
});