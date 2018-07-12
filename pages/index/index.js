//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    height: 20,
    focus: false,
    items: [
      { name: '￥', value: '人民币',checked: 'true'},
      { name: '$ ', value: '美元'},
    ],
    unit: '￥'
  },
  radioChange: function (e) {
    var that = this
    that.setData({
      unit: e.detail.value
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  bindFormSubmit: function (e) {
    app.globalData.amount = e.detail.value.inputValue
    console.log(app.globalData.amount)
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //事件处理函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
