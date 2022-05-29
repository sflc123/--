//Page Object
var app = getApp();
Page({
  data: {
    //搜索框状态
    inputshowed: false,
    //搜索框值
    inputval: "",
    //历史列表   app.Data.searchlist
    searchlist: [],
    //搜索框渲染推荐数据
    catlist: [],
    //景点列表
    list: app.Data.list,
  },
  //options(Object)
  onLoad: function (options) {
    var searchlist = wx.getStorageSync("searchlist"); //获取存储的数组数据
    console.log(searchlist);
    this.setData({
      searchlist: searchlist, //前一个为本页面数据中的searchlist，
      //后一个为本函数中的searchlist
    });
    console.log(searchlist);
    // wx.setStorageSync('searchlist',searchlist)
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
  huitui: function (e) {
    var pages = getCurrentPages(); //当前页面
    var beforePage = pages[pages.length - 2]; //前一页
    beforePage.onLoad(); // 执行前一个页面的onLoad方法
    wx.navigateBack({
      delta: 1,
    });
  },
  clearinput: function (e) {
    console.log(e.detail.value);
    var inputshowed = this.data.inputshowed;
    inputshowed = false;
    var that = this;
    that.setData({
      inputval: "",
      inputshowed: inputshowed,
    });
  },

  search: function (e) {
    var searchlist = wx.getStorageSync("searchlist"); //获取数组数据
    console.log(searchlist);
    var inputval = this.data.inputval;
    var list = this.data.list;
    var catlist = this.data.catlist;
    var inputshowed = this.data.inputshowed;
    console.log(inputval);
    catlist = [];
    this.setData({
      catlist: catlist,
    });
    if (inputval != "") {//输入的检索值
      for (var i = 0; i < list.length; i++) {//将
        if (list[i].name.split(inputval).length > 1) {
          catlist.unshift(list[i]);
          inputshowed = true;
          this.setData({
            catlist: catlist,
            inputshowed: inputshowed,
          });
        }
        console.log(inputshowed);
      }
      console.log(catlist);
      if (searchlist.findIndex((o) => o == inputval) + 1) {
        searchlist.splice(
          searchlist.findIndex((o) => o == inputval),
          1
        );
        searchlist.unshift(inputval);
        console.log(searchlist);
        this.setData({
          searchlist: searchlist,
        });
      } else {
        searchlist.unshift(inputval);
        console.log(searchlist);
        this.setData({
          searchlist: searchlist,
        });
        wx.split;
      }
      wx.setStorageSync("searchlist", searchlist); //存储searchlist的数据
      console.log(this.data.searchlist);
    }
  },
  inputtyping: function (e) {
    //清空输入框
    console.log(e.detail.value);
    var inputshowed = this.data.inputshowed;
    inputshowed = false;
    var that = this;
    that.setData({
      inputval: e.detail.value,
      inputshowed: inputshowed,
    });
    if (e.detail.value == "") {
      inputval = "";
      inputshowed = false;
      return;
    }
  },
  clear: function (e) {
    var searchlist = wx.getStorageInfoSync("searchlist");
    searchlist = [];
    var inputval = "";
    this.setData({
      searchlist: searchlist,
      inputval: inputval,
    });
    console.log(searchlist);
    wx.setStorageSync("searchlist", searchlist);
  },
  lishishuru: function (e) {
    var id = e.currentTarget.dataset.id;
    this.setData({
      inputval: id,
    });
    this.search();
  },
  goToScenicspot: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../scenic-spot/scenic-spot?scenicid=" + id,
    });
  },
});
