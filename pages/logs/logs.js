//logs.js
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    logs: [],
    radioItems: [
      { name: 'NoTip', value: 0},
      { name: '15%', value: 0.15, checked: 'true'},
      { name: '20%', value: 0.20},
      { name: '25%', value: 0.25},
    ]
  },
  onLoad: function (options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      }),
      amount: app.globalData.amount,
      total: (app.globalData.amount * 1.15).toFixed(2)
    })
  },
  radioChange: function (e) {
    var that = this
    that.setData({
      total: parseInt(app.globalData.amount) + parseFloat(e.detail.value)
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
