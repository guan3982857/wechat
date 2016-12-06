//app.js
App({
  onLaunch: function () {
    console.log("小程序初始化完成")
  },onShow:function(){
    console.log("小程序显示")
  },onHide:function(){
    console.log("小程序隐藏")
  },
  num:1000,
  getDate:function(){
    return[
      new Date().getFullYear(),
      new Date().getMonth()+1,
      new Date().getDate(),
    ].join("-")
  }
})
var app = getApp();
console.log(app.getDate())