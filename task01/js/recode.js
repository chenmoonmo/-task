var timer
function random() {
    orangeColor();
    setInterval(getRandomColor,1000);
}

function getRandomColor() {
    var randomColor1 = "#" + Math.floor(Math.random() * 1677215+0.5).toString(16).slice(-6);
    var randomColor2 = "#"  +Math.floor(Math.random() * 1677215+0.5).toString(16).slice(-6);
    var randomColor3 = "#" + Math.floor(Math.random() * 1677215+0.5).toString(16).slice(-6);
    var randomNum = [];
    for (var i = 0; i < 10; i++) {
        randomNum.push("box" + i);
    };
    randomNum.sort(
        function () {
           return 0.5 - Math.random();
        }
    )
    document.getElementById(randomNum[0]).style.backgroundColor = randomColor1;
    document.getElementById(randomNum[1]).style.backgroundColor = randomColor2;
    document.getElementById(randomNum[2]).style.backgroundColor = randomColor3;
    for (var i = 3; i < randomNum.length; i++) {
        document.getElementById(randomNum[i]).style.backgroundColor = "orange";
    }
}
function orangeColor() {
    clearInterval(timer);
    var ninebox = document.getElementsByClassName("box");
    for (var i = 0; i < ninebox.length; i++) {
        ninebox[i].style.backgroundColor = "orange";
    }
}