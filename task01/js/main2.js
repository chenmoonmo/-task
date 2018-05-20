var threeColor;

//随机颜色方法
function random() {
    orangeColor();
    threeColor = setInterval(getRandomColor,1000);
}

function getRandomColor() {
    //随机三种颜色
    var randomColor1 = '#' + (Math.floor(Math.random() * 16777215 + 0.5).toString(16)).slice(-6);
    var randomColor2 = '#' + (Math.floor(Math.random() * 16777215 + 0.5).toString(16)).slice(-6);
    var randomColor3 = '#' + (Math.floor(Math.random() * 16777215 + 0.5).toString(16)).slice(-6);
    //1-9随机3个数字
    var randomNum = [];
    for (var i = 1; i < 10; i++) {
        randomNum.push("box" + i);
    }
    randomNum.sort(
        function () {
        return 0.5 - Math.random()
    }
    );
    //数组前三个为随机的颜色
    document.getElementById(randomNum[0]).style.backgroundColor = randomColor1;
    document.getElementById(randomNum[1]).style.backgroundColor = randomColor2;
    document.getElementById(randomNum[2]).style.backgroundColor = randomColor3;
    //除了上面3个随机颜色，其他都变成橙色
    for (i=3; i<randomNum.length; i++) {
        document.getElementById(randomNum[i]).style.backgroundColor = "orange";
    }
}
//点击后全部变为橙色
function orangeColor(){
    clearInterval(threeColor);
    var orange = document.getElementsByClassName("box");
    for (var i=0; i<orange.length; i++) {
        orange[i].style.backgroundColor = "orange";
    }
}