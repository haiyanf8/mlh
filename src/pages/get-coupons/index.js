var app = getApp();

Page({
  data: {
  
  },
  getCoupon: function(e){
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: "../coupons-details/index?id=" + data.id
    });
  },

  goback: function(){
  	wx.navigateBack({
 			'delta': 1
  	});
  }

});