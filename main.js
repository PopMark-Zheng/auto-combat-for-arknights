auto.waitFor();
alert ("Please place the charging port of you phone on your right hand side.");
var options = ["明日方舟Bilibili版", "明日方舟官方版"]
var i = dialogs.select("请选择一个选项", options);
if (i === 0) {
    var package = 'com.hypergryph.arknights.bilibili'
    progress ()
}
else if (i === 1) {
    var package = 'com.hypergryph.arknights'
    progress ()
}
else {
    toast('你啥也没选')
}
function progress (){
let start = confirm ('建议先选择好关卡再启动(点击*确认*继续，点击*取消*退出)');
if (start === true) {
    let loop = rawInput("循环次数：", 5);
    let loopTimes = Number(loop);
    if (loopTimes > 0){
    let startTimes = 0;
    toast ("启动明日方舟10秒后启动");/*提示用户*/
    launchPackage(package);/*启动明日方舟*/
    setScreenMetrics(1080,1920);/*设置屏幕分辨率*/
    sleep (5000);
    do {
        startTimes++
           sleep (5000);
           click (1766,993);/*第一次点击*/
           sleep (2000);
           click (1689,720);/*第二次点击*/
           sleep (160000);
           click (1766,291);/*退出自律*/
    }
    while (startTimes <= loopTimes);
    alert ('finished');
    }
    else {
        alert ('Please input a number which is bigger than 0.');
    }
}
else {
    toast ('Cancelled');
}
}
