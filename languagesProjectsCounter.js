const projectCountPerLanguage = [
    25, // python
    10, // html
    4, // flutter
    2, // java
    2, // C++
]

var active = false;

document.addEventListener("scroll", function () {
    for (let index = 0; index < projectCountPerLanguage.length; index++) {
        let element = document.querySelectorAll(".language_projects")[index];
        if (isVisible(element)) {
            if (element.innerHTML == "0") {
                counterAnimation(element, projectCountPerLanguage[index]);
            }
        }
        else {
            element.innerHTML = "0";
        }
    }


})

function counterAnimation(element, loops, currentLoop = 0) {
    element.innerHTML = currentLoop;
    if (currentLoop < loops) {
        currentLoop++;
        setTimeout(() => {
            counterAnimation(element, loops, currentLoop);
        }, 50);
    }
}


function isVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
