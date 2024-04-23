fetch("/header/navbar.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("navbar").innerHTML = data;
        document.getElementById("progress_bar_main").style.boxShadow = `0 0 10px 8px var(--${progressBarColor})`;
    });

function setActiveNavButton(currentPage) {
    if (document.getElementById(currentPage) == null) {
        setTimeout(() => {
            setActiveNavButton(currentPage);
        }, 100);
    } else {
        document.querySelector(`#${currentPage}`).classList.add("navButton_active");
    }
}

window.onscroll = function () {
    let yPos = window.scrollY;
    let siteHeight = document.body.scrollHeight - window.innerHeight;
    let width = (yPos / siteHeight) * 100;
    if (width > 100) {
        width = 100;
    }
    document.getElementById("progress_bar_main").style.width = width + "vw";
}

window.onresize = function () {
    if (document.getElementById("mobileMenuWrapper").style.display == "flex" && document.body.clientWidth > 840) {
        document.getElementById("mobileMenuWrapper").style.display = "none";
        document.body.style.height = '';
        document.body.style.overflowY = '';
        document.getElementById('hamburgerCheckBox').checked = false;
    }
}

var progressBarColor = localStorage.getItem("progress_bar_prefered_color");
if (progressBarColor == null) {
    progressBarColor = "secondary"
}

function changeProgressBarColor() {
    progressBarColor = progressBarColor == "primary" ? "secondary" : "primary";
    document.getElementById("progress_bar_main").style.boxShadow = `0 0 10px 8px var(--${progressBarColor})`;

    localStorage.setItem("progress_bar_prefered_color", progressBarColor);
}
