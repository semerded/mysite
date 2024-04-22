var rColor = 255; 
var gColor = 240; 
var bColor = 230;

document.onscroll = function (e) {
    const backGroundID = document.getElementById("changeableBackground");

    var yPos = window.scrollY
    var siteHeight = document.body.scrollHeight - window.innerHeight
    var devidid =  1 -(yPos / siteHeight);
    // rColor = devidid * 44 + 196
    gColor = devidid * 80 + 160;
    bColor = devidid * 230;
    // console.log(`rgb(${rColor}, ${gColor}, ${bColor})`)
    document.getElementById("changeableBackground").style.backgroundColor = `rgba(${rColor}, ${gColor}, ${bColor}, 0.5)`
    
}