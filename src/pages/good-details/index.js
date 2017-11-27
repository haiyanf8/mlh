var app = getApp();

Page({
  data: {
    tabArr: {
      curHdIndex : 0,
      curBdIndex : 0
    }
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