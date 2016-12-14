var app = getApp();
var flag=true;
Page({
  data:{
    num:app.num,
    o:{
      name:"张三",age:29
    },
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
    numberArray: [1, 2, 3, 4],
    imgUrls:[
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
    ],
     indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
   markers: [{
      latitude: 37.87059,
      longitude: 112.548879,
      name: '山西',
      desc: '我现在的位置'
    }],
    covers: [{
      latitude: 37.87059,
      longitude: 112.548879
    }, {
      latitude: 37.87059,
      longitude: 112.548879
    }],
     poster: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002C4qL44RmrHd.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'https://c.y.qq.com/v8/playsong.html?songid=109530995&source=yqq#wechat_redirect',
  },
   audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(200)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
    switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e){
    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  onLoad:function(){
    console.log("页面加载完成")
  },onReady:function(){
    console.log("页面渲染完成");
    this.audioCtx = wx.createAudioContext('myAudio');
  },onShow:function(){
    console.log("页面显示")
wx.getLocation({
  type: 'gcj02',
  success: function(res) {
    console.log(res)
    var latitude = res.latitude
    var longitude = res.longitude
    var speed = res.speed
    var accuracy = res.accuracy
  }
})
  },onHide:function(){
    console.log("页面隐藏")
  },onUnload:function(){
    console.log("页面卸载")
  },onPullDownRefresh:function(){
    wx.stopPullDownRefresh();
    console.log("下啦")
  },onReachBottom:function(){
    console.log("上啦")
  }, viewTap:function(){
    if(flag){
      this.setData({
      num:200
      })
      flag=false;
    }else{
      this.setData({
      num:1000
    })
    flag=true;
    }
  },
  tan:function(){
    console.log(1)
    wx.showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  success: function(res) {
    if (res.confirm) {
      console.log('用户点击确定')
    }
  }
})
  }

})