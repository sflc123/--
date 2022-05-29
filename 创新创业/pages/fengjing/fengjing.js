//Page Object
Page({
  data: {
    list:[],
  },
  //options(Object)
  onLoad: function(options){
    
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  },
  gotosearch:function(e){
    var idid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../subpackages/pages/scenic-spot/scenic-spot?scenicid=" + idid,
    })
  }
});