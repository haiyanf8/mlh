var app = getApp();

Page({
  data: {
    imgUrls: [
      "http://image.zhangxinxu.com/image/blog/201503/dengyixia.jpg",
      "http://img.pconline.com.cn/images/upload/upc/tx/pcdlc/1709/11/c126/58824495_1505115363152_nowater.jpg",
      "http://img.pconline.com.cn/images/upload/upc/tx/pcdlc/1709/11/c126/58824495_1505115363859_nowater.jpg"
    ],
    autoplay: true,
    duration: 1000,
    interval: 5000,
    indicatorDots: true
  },

  getorderdetail: function(e){
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: "../order-details/index?id=" + data.id
    });
  },

  gotostoreindex: function(e){
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: "../store/index?id=" + data.storeid
    });
  }
});