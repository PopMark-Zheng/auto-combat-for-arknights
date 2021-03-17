auto.waitFor();
requestScreenCapture(true);/*请求截屏，并将截屏方向锁定为横屏*/
var p;
var p2;
var p3;
var package;
//给text赋值以实现重复确认而不出现语言逻辑问题
var text = 'Are you sure to launch?(点击*确认*继续，点击*取消*退出)'
beginning()
function beginning (){
    //询问游戏主程序版本
    var veroptions = ["明日方舟Bilibili版", "明日方舟官方版"]
    var i = dialogs.select("请选择一个选项", veroptions);
    if (i === 0) {
        package = 'com.hypergryph.arknights.bilibili'
        progress ()
    }
    else if (i === 1) {
        package = 'com.hypergryph.arknights'
        progress ()
    }
    else {
        toast('你啥也没选');
        sleep (2000)
        var l = confirm('Do you want to exit?')
        if (l === true){
            toast ('Exited');
            exit();
        }
        else {
        beginning ();
        }
    }
}
//写入第一次确认坐标function
function isFirst ()
{
    do {
        sleep (3000);
        captureScreen('/storage/emulated/0/11.png');
        var img = images.read('./images/1.jpg');
        var templ =images.read('/storage/emulated/0/11.png');
        p = images.findImage(templ,img);
    }
    while (p === null);
}
//第二次确认坐标
function isSecond ()
{
    do {
        sleep (3000);
        captureScreen('/storage/emulated/0/21.png');
        var img2 = images.read('./images/2.jpg');
        var templ2 = images.read('/storage/emulated/0/21.png');
        p2 = images.findImage(templ2,img2);
    }
    while (p2 === null);
}
//第三次确认坐标
function islast ()
{
    do {
        sleep (3000);
        captureScreen('/storage/emulated/0/31.png');
        var img3 =images.read('./images/32.jpg');
        var templ3 = images.read('/storage/emulated/0/31.png');
        p3 = images.findImage(templ3,img3);
    }
    while (p3 === null);
}
//编写times以实现重复输入
function times ()
{
    let loop = rawInput("循环次数：", 5);
    playTimes = Number(loop);
    //引用progressMain以实现继续运行
    progressMain ()
}
//由此填入主程序
function progress ()
{
    let start = confirm (text);
    if (start === true) {
        times ()
    }
    else {
        //由此退出
        toast ('Exited');
        exit();
    }
}
//由此填入主程序2
function progressMain ()
{
    if (playTimes > 0){
        let startTimes = 0;
        toast ("Launched");/*提示用户*/
        launchPackage(package)
        sleep (5000);
        do {
            isFirst()
            click (1766,993);/*第一次点击*/
            isSecond()
            click (1689,720);/*第二次点击*/
            islast()
            click (1766,291);/*退出自律*/
            startTimes++
        }
        while (startTimes <= playTimes);
        alert ('finished');
        //再次给text赋值
        text = 'Are you sure to launch again?(点击*确认*继续，点击*取消*退出)'
        progress ()
    }
    else {
        //提示重输数字
        alert ('Please input a number which is bigger than 0.');
        //并倒回times函数以实现重复输入
        times ()
    }
}