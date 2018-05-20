var timer
function random(){
    orangecolor();
    timer=setInterval(getrandomcolor,1000);
}
//生成随机色
function getrandomcolor(){
var randomcolor1 = '#' + Math.floor(Math.random()*16777215).toString(16).slice(-6);
var randomcolor2 = '#' + Math.floor(Math.random()*16777215).toString(16).slice(-6);
var randomcolor3 = '#' + Math.floor(Math.random()*16777215).toString(16).slice(-6);
//选择3个随机格子
randomNum = [];
for (i=1;i<10;i++) {
    randomNum.push('box'+i);
}
randomNum.sort (
 function(){
     return 0.5-Math.random()
 })
 //改变颜色
 document.getElementById(randomNum[0]).style.backgroundcolor=randomcolor1;
 document.getElementById(randomNum[1]).style.backgroundcolor=randomcolor2;
 document.getElementById(randomNum[2]).style.backgroundcolor=randomcolor3;
 for(i=3;i<randomNum.length;i++) {
     document.getElementById(randomNum[i]).style.backgroundcolor="orange";
 };
}
//结束闪
function orangecolor(){
    clearInterval(timer);
    var orange=document.getElementsByClassName("box")
    for(i=1;i<orange.length;i++){
        orange[i].style.backgroundcolor="orange";
    };
}
