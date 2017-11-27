//logs.js
var util = require('../../utils/util.js')
Page({
	data: {
		isselect: true
	},

	usercoupons: function(){
		wx.navigateTo({
			url: '../use-coupons/index'
		});
	}
});
