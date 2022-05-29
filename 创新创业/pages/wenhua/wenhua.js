Page({
  data: {
    list1: [],
    list2: [],
  },
  async onLoad() {
    wx.showNavigationBarLoading()   //loading 加载
    wx.cloud.init();
    const db = wx.cloud.database()
    const book = await db.collection('CTYY').count();
    const listbiao1 = await db.collection('MJWX').count()
    const total = listbiao1.total
    const MAX = 20
    const shuzu = Math.ceil(total / MAX)
    console.log(shuzu)
    console.log(total)
    let all1 = []
    for (let i = 0; i < shuzu; i++) {
      let list = await db.collection('MJWX').skip(i * 20).get()
      all1 = all1.concat(list.data)
    }
    console.log(all1)
    this.setData({
      list1: all1
    })
    wx.hideNavigationBarLoading({
      success: (res) => {
        wx.setNavigationBarTitle({
          title: "非遗文化"
        })
      }
    })
    const total1 = book.total
    const shuzu1 = Math.ceil(total1 / MAX)
    let all2 = []
    for (let i = 0; i < shuzu1; i++) {
      let list = await db.collection('CTYY').skip(i * 20).get()
      all2 = all2.concat(list.data)
    }
    this.setData({
      list2: all2
    })


  },
  onReady: function () {

  },
  onShow: function () {
  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  },
  gotosearch: function (param) {
    wx.navigateTo({
      url: '/subpackages/pages/sousuo/sousuo'
    })
  },
  gotoscenic: function (e) {
    var idid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "../scenic-spot/scenic-spot?scenicid=" + idid,
    })
  }
});