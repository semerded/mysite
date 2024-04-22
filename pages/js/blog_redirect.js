document.addEventListener("scroll", function () {
    if (window.scrollY < document.getElementById("titleRoleWrapper").clientHeight) {
        document.getElementById("aside").style.marginTop = -window.scrollY + "px";
    } else {
        document.getElementById("aside").style.marginTop = -84.8 + "px";
    }
})