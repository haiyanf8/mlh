//logs.js
var util = require('../../utils/util.js');
var app = getApp();

Page({

	onLoad: function () {
		var that = this;
		var userInfo = app.globalData.data.userInfo;


		if( userInfo !== null || userInfo !== "undefined"){
			that.setData({
				userInfo: userInfo
			});
		}else{
			app.getUserInfo();
		}
	},
});
