// pages/my/my.js
Page({
  data:{
    basic:{},
    daily:[]
  },
  onLoad:function(){
    var that=this;
    wx.request({
  url: 'https://free-api.heweather.com/v5/forecast?city=taiyuan&key=ab10b3b4c6b044b19751643f798cba85',

  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
    var d=res.data['HeWeather5'][0]
    that.setData({
       basic:d.basic,
        daily:d["daily_forecast"]
    })
    console.log(d["daily_forecast"])
  }
})
  }
  // onReady:function(){
  //   // 页面渲染完成
  // },
  // onShow:function(){
  //   // 页面显示
  // },
  // onHide:function(){
  //   // 页面隐藏
  // },
  // onUnload:function(){
  //   // 页面关闭
  // }
})