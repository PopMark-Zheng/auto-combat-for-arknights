auto.waitFor();
let start = confirm ('建议先选择好关卡再启动(点击*确认*继续，点击*取消*退出)');
if (start === true) {
    let loop = rawInput("循环次数：", 5);
    let loopTimes = Number(loop)
    if (loopTimes > 0){
    let startTimes = 0;
    toast ("将于明日方舟置于前台10秒后启动");/*提示用户*/
    waitForPackage("com.hypergryph.arknights.bilibili");/*等待b版明日方舟启动*/
    setScreenMetrics(1080,1920);/*设置屏幕分辨率*/
    sleep (5000);
    do {
        startTimes++
           sleep (5000)
           click (1766,993)/*第一次点击*/
           sleep (2000)
           click (1689,720)/*第二次点击*/
           sleep (120000)
           click (1766,291)/*退出自律*/
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
