var app = getApp();

Page({
  data: {
    tabArr: {
      curHdIndex : 0,
      curBdIndex : 0
    }
  },

  getcoupon: function(){
    wx.navigateTo({
      url: '../get-coupons/index'
    });
  },

  tabClick: function(e){

    var id = e.target.dataset.id;
    
    var obj = {};

    obj.curHdIndex = id;
    obj.curBdIndex = id;

    this.setData({
      tabArr: obj
    });
  }
});