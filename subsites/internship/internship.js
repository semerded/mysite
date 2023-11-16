var active = false
function rotateBoardImg() {
    if (!active) {
        document.getElementById("board_img").classList.add("board_img_spin");
        active = true;
        setTimeout(() => {
            document.getElementById("board_img").classList.remove("board_img_spin");
            document.getElementById("board_img").classList.add("board_img_spin_back");
            setTimeout(() => {
                document.getElementById("board_img").classList.remove("board_img_spin_back");
            }, 30); // prevents the image from spinning back
            active = false;
        }, 1000);
    } 
}
