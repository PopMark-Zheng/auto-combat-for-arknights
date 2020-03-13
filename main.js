auto.waitFor();
//给text赋值以实现重复确认而不出现语言逻辑问题
var text = '建议先选择好关卡再启动(点击*确认*继续，点击*取消*退出)'
alert ("Please place the charging port of you phone on your right hand side.");
//询问游戏主程序版本
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
//由此填入主程序
function progress (){
let start = confirm (text);
if (start === true) {
    times()
    }
else {
    //由此退出
    toast ('Exited');
}
}
//由此填入主程序2
function progressMain(){
    if (loopTimes > 0){
        let startTimes = 0;
        toast ("启动明日方舟10秒后启动");/*提示用户*/
        launchPackage(package);/*启动明日方舟*/
        setScreenMetrics(1080,1920);/*设置屏幕分辨率*/
        sleep (5000);
        do {
            sleep (5000);
            click (1766,993);/*第一次点击*/
            sleep (2000);
            click (1689,720);/*第二次点击*/
            sleep (160000);
            click (1766,291);/*退出自律*/
            startTimes++
        }
        while (startTimes <= loopTimes);
        alert ('finished');
        //再次给text赋值
        text = '是否再次启动(点击*确认*继续，点击*取消*退出)'
        progress()
    }
    else {
        //提示重输数字
        alert ('Please input a number which is bigger than 0.');
        //并倒回times函数以实现重复输入
        times()
    }
}
//编写times以实现重复输入
function times (){
    let loop = rawInput("循环次数：", 5);
    loopTimes = Number(loop);
    //引用progressMain以实现继续运行
    progressMain()
}