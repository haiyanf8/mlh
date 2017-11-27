var app = getApp();

Page({
  data: {
    autoplay: true,
    duration: 1000,
    interval: 5000,
    indicatorDots: true,

    storeinfo: {
      storeimg: "",
      storename: "福州",
      storenotice: "",
      storeaddress: ""
    },

    activity:[
      {
        imgurl: "http://image.zhangxinxu.com/image/blog/201503/dengyixia.jpg",
        date: "2017/10/11",
        desc: "1美味月饼新鲜上市，纯手工制作食品，香甜味美优惠中秋节，美味糕点等你来。",
        price: "7.9"
      },

      {
        imgurl: "http://image.zhangxinxu.com/image/blog/201503/dengyixia.jpg",
        date: "2017/10/12",
        desc: "2美味月饼新鲜上市，纯手工制作食品，香甜味美优惠中秋节，美味糕点等你来。",
        price: "7.8"
      },

      {
        imgurl: "http://image.zhangxinxu.com/image/blog/201503/dengyixia.jpg",
        date: "2017/10/132",
        desc: "3美味月饼新鲜上市，纯手工制作食品，香甜味美优惠中秋节，美味糕点等你来。",
        price: "7.7"
      },
    ]
  }
});