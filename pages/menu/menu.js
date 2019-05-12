// pages/menu/menu.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [{
      "name": "应用1"
    }, {
      "name": "应用2"
    }], // 九宫格内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   // this.updateMenuData()
  },
  fillIconData: function (data) {
    var pathPrefix = '../../../resources/icons/application/'
    for (var index = 0; index < data.length; index++) {
      var item = data[index]
      console.log(item.application)
      switch (item.application) {
        case 'weather':
          item.icon = pathPrefix + 'application-weather.png'
          console.log('weather')
          break
        case 'stock':
          item.icon = pathPrefix + 'application-stock.png'
          break
        case 'joke':
          item.icon = pathPrefix + 'application-joke.png'
          break
        case 'constellation':
          item.icon = pathPrefix + 'application-constellation.png'
          break
        case 'backup-image':
          item.icon = pathPrefix + 'application-images.png'
          break
      }
    }
    return data
  },
  /**
   * 请求后台，更新menu数据
   */
  // updateMenuData: function() {
  //   var that = this
  //   wx.request({
  //     url: app.globalData.serverUrl + app.globalData.apiVersion + '/service/menu',
  //     success: function(res){
  //       var menuData = res.data.data
  //       that.setData({
  //         grids: menuData
  //       })
  //     }
  //   })
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})