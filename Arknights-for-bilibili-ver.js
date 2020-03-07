auto.waitFor()
var start = confirm ('建议先选择好关卡再启动(点击*确认*继续，点击*取消*退出)')
if (start == true){
        toast ("将于明日方舟启动5秒后启动");/*提示用户*/
        waitForPackage("com.hypergryph.arknights.bilibili");/*等待b版明日方舟启动*/
        setScreenMetrics(1080,1920);/*设置屏幕分辨率*/
        sleep (5000);
        var a = 0;/*循环两次*/
        var b = 5
        do {
           a++
           sleep (5000)
           click (1766,993)/*第一次点击*/
           sleep (2000)
           click (1689,720)/*第二次点击*/
           sleep (120000)
           click (1766,291)/*退出自律*/
        }
        while (a <= b);
}
else {
    toast ('已退出')
}
//写在最后的话：这个项目因为我的原因并不是十分有用，如果有可能，我会进一步优化，但我猜没可能了。