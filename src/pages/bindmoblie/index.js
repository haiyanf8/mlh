//logs.js
var util = require('../../utils/util.js');
var app = getApp();

Page({
	data: {
		codeisactive: false,
		disabled: false,
		plain: true,
		seconds: 60,
		tel: '',
		code: '',
		isagree: true,
		buttontxt : '获取验证码',
		regbtndis: true
	},

	getcode: function(e){
		var that = this;
		var tel = this.data.tel;
		var timer = null;

		if(tel.length != 11 || isNaN(tel)){
			wx.showToast({
				title: "请输入有效的手机号",
				icon: ""
			});

			setTimeout(function(){
				wx.hideToast();
			}, 2000);

			return;
		}

		this.setData({
			disabled: true,
		});

		wx.request({
			url: app.globalData.data.Domain + '/code.php',
			data: {
				tel: this.data.tel
			},
			success: function(res){
				var data = res.data;

				if(data.code === 0){
					that.setData({
						disabled: false,
					});

					wx.showToast({
						title: data.msg,
						icon: "loading"
					});

					app.globalData.hideToast();

				}else{
					wx.showToast({
						title: data.msg,
						icon: "loading"
					});

					app.globalData.hideToast();

					that.setData({
						buttontxt : 10
					});

					var timer = setInterval(function(){
          	var buttontxt = that.data.buttontxt;
          	var codeisactive = that.codeisactive;
              buttontxt --;
              that.setData({
                  buttontxt : buttontxt
              });

              if(buttontxt === 0){
                  clearInterval(timer);
                  that.setData({
                    buttontxt : "获取验证码",
                    disabled: false
                });
              }
          },1000);
				}
			}
		});
	},

	phoneInput: function(e){
		var that = this;
		var tel = e.detail.value;
		this.setData({
			tel: tel
		});

		if(tel.length < 10){
			that.setData({
				codeisactive: false
			});
		}else{
			that.setData({
				codeisactive: true
			});
		}
	},

	codeInput: function(e){
		var code = e.detail.value;
		var tel = this.data.tel;
		var isagree = this.data.isagree;
		var regbtndis = this.data.regbtndis;
		this.setData({
			code: code,
		});

		if(code.length > 5 && isagree === true){
			this.setData({
				regbtndis: false
			});
		}else{
			this.setData({
				regbtndis: true
			});
		}
	},

	isagree: function(){
		var isagree = this.data.isagree;
		var regbtndis = this.data.regbtndis;
		var code = this.data.code;
		if(isagree === true){
			this.setData({
				isagree: false,
				regbtndis: true
			});
		}else{
			this.setData({
				isagree: true,
				regbtndis: false
			});
		}
	},

	bindmoblie: function(){
		var code = this.data.code;
		var isagree = this.data.isagree;
	
		wx.request({
			url: app.globalData.data.Domain + '/send.php',
			data:{
				code: code
			},
			success: function(res){
				var data = res.data;

				if(data.code === 1){
					wx.showToast({
						title: data.msg,
						icon: "success",
						success:function(){
							wx.redirectTo({
								url: '/pages/page/index'
							});
						}
					});
				}else{
					wx.showToast({
						title: data.msg,
						icon: "success",
					});

					app.globalData.hideToast();
				}
			},
			
			fail: function(res){
				var data = res.data;
				wx.showToast({
					title: data.msg,
					icon: "loading"
				});

				setTimeout(function(){
					wx.hideToast();
				}, 2000);
			}
		});
	}
});
