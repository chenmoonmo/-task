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
