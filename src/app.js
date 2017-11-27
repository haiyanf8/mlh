//app.js
App({

  globalData:{
   
    data: {
      userInfo: null,
      subDomain: 'mlh',
      Domain: "http://www.green18.cn",
      token: ''
    },

    hideToast: function(){
      setTimeout(function(){
        wx.hideToast();
      }, 2000);
    }
  },

  onLaunch: function () {
    // var logs = wx.getStorageSync('logs') || [];
    // logs.unshift(Date.now());
    // wx.setStorageSync('logs', logs);

    this.getUserInfo();
  },

  getUserInfo : function(cb){
    var that = this;
    //var token = that.globalData.data.token;
    if(this.globalData.data.userInfo){
      typeof cb == "function" && cb(this.globalData.data.userInfo);
    }else{
      wx.login({
        success: function(res){
          // var code = res.code;
          // wx.request({
          //   url: that.globalData.data.Domain  +'/login.php',
          //   data: {
          //     code: res.code
          //   },
          //   success: function(res){
          //     that.globalData.data.token = res.data.token;
          //     that.globalData.data.uid = res.data.uid;
          //   },
          //   fail: function(){
          //     wx.showToast({
          //       title: "登录失败",
          //       icon: ""
          //     });

          //     that.globalData.hideToast();
          //   }
          // });
          wx.getUserInfo({
            success: function(res){
              var iv = res.iv;
              var encryptedData = res.encryptedData;
              that.globalData.data.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.data.userInfo);
              wx.request({
                url: that.globalData.data.Domain +'/login.php',
                data: {
                  encryptedData : encryptedData,
                  iv: iv
                },
                success: function(res){
                  if(res.data.code === 0){
                    wx.navigateTo({
                      url: '/pages/activity/index'
                    });
                  }else{
                    wx.navigateTo({
                      url: '/pages/index/index'
                    });
                  }
                }
              });
            },
            fail: function(){
              wx.showModal({
                title: "提示",
                showCancel: false,
                content: '码澜花必须微信授权才可登陆',
                success: function(res){
                  if(res.confirm){
                    wx.openSetting({
                      success: function (res) {
                        wx.redirectTo({
                          url: '/pages/index/index'
                        });

                        console.log();
                      }
                    });
                  }
                }
              });
            }
          });
        }                                                                                                                                                                                                                                                                                                                                                    
      });
    }
  },

  bindMoblie: function(){
    wx.navigateTo({
      url: '/pages/bindmoblie/index'
    });
  }
});
