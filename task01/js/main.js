var timer;

function random() {
    timer = setInterval(getrandomcolor, 3000);
}
//生成随机色
function getrandomcolor() {
    orangeColor1();
    var randomcolor1 = '#' + Math.floor(Math.random() * 16777215 + 0.5).toString(16).slice(-6);
    var randomcolor2 = '#' + Math.floor(Math.random() * 16777215 + 0.5).toString(16).slice(-6);
    var randomcolor3 = '#' + Math.floor(Math.random() * 16777215 + 0.5).toString(16).slice(-6);
    //选择3个随机格子
    var randomNum = [];
    for (var i = 1; i < 10; i++) {
        randomNum.push("box" + i);
    }
    randomNum.sort(
        function () {
            return 0.5 - Math.random()
        }
    );
    //改变颜色
    document.getElementById(randomNum[0]).style.backgroundColor = randomcolor1;
    document.getElementById(randomNum[1]).style.backgroundColor = randomcolor2;
    document.getElementById(randomNum[2]).style.backgroundColor = randomcolor3;
    for (i = 3; i < randomNum.length; i++) {
        document.getElementById(randomNum[i]).style.backgroundcolor = "orange";
    }
}

//结束闪
function orangeColor() {
    orangeColor1();
    clearInterval(timer);
}
function orangeColor1() {
    var orange = document.getElementsByClassName("box");
    for (var i = 0; i < orange.length; i++) {
        orange[i].style.backgroundColor = "orange";
    }
}
