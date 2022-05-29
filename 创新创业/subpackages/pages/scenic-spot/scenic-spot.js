//Page Object

Page({
  data: {
    List: [
      {
        id: 0,
        image: [
          "https://bkimg.cdn.bcebos.com/pic/42166d224f4a20a49bb658119c529822730ed0b8?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UyMjA=,g_7,xp_5,yp_5/format,f_auto",
          "https://bkimg.cdn.bcebos.com/pic/3801213fb80e7bec76366737232eb9389a506b73?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UyMjA=,g_7,xp_5,yp_5/format,f_auto",
        ],
        text: `    地质特征    武陵源风景名胜区    武陵源风景名胜区(5张)    武陵源地区在区域构造体系中，处于新华夏第三隆起带。在地质历史时期内，大致经历了武陵一雪峰、印支、燕山、喜山及新构造运动。武陵—雪峰运动奠定了武陵源地区基底构造。印支运动塑造了武陵源地区的基本构造地貌格架，而喜山及新构造运动是形成武陵源奇特的石英砂岩峰林地貌景观的最基本的内在因素之一。    构成砂岩峰林地貌的地层主要由远古生界中、上泥盆统云台观组和黄家墩组构成，地层显示滨海相碎屑岩类特点。岩石质纯、层厚，底状平缓，垂直节理发育，岩石出露于向斜轮廓，反映出砂岩峰林地貌景观形成的特殊地质构造环境和基本条件。而外力地质活动作用的流水侵蚀和重力崩坍及其生物的生化作用和物理风化作用，则是塑造武陵源地貌景观必不可少的外部条件。 [13]     地貌类型
    
        张家界地貌    张家界地貌是砂岩地貌的一种独特类型，它是由石英砂岩为成景母岩，以流水侵蚀、重力崩塌、风化等作用力形成的以棱角平直的、高大石柱林为主的地貌景观。它是“在中国华南板块大地构造背景和亚热带湿润区内，由产状近水平的中、上泥盆统石英砂岩为成景母岩，以流水侵蚀、重力崩塌、风化等营力形成的，以棱角平直的高大石柱林为主，以及深切嶂谷、石墙、天生桥、方山、平台等造型地貌为代表的地貌景观”。        石英砂岩`,
      },
      {
        id: 1, //武夷山
        image: [
          "https://bkimg.cdn.bcebos.com/pic/a686c9177f3e67095cb655eb38c79f3df8dc556b?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto",
          "https://bkimg.cdn.bcebos.com/pic/cefc1e178a82b901910cd327708da9773912ef05?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto",
          "https://bkimg.cdn.bcebos.com/pic/f7246b600c338744cf0e3c9f510fd9f9d62aa00d?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto",
        ],
        text: `    地特征    武陵源风景名胜区    武陵源风景名胜区(5张)    武陵源地区在区域构造体系中，处于新华夏第三隆起带。在地质历史时期内，大致经历了武陵一雪峰、印支、燕山、喜山及新构造运动。武陵—雪峰运动奠定了武陵源地区基底构造。印支运动塑造了武陵源地区的基本构造地貌格架，而喜山及新构造运动是形成武陵源奇特的石英砂岩峰林地貌景观的最基本的内在因素之一。    构成砂岩峰林地貌的地层主要由远古生界中、上泥盆统云台观组和黄家墩组构成，地层显示滨海相碎屑岩类特点。岩石质纯、层厚，底状平缓，垂直节理发育，岩石出露于向斜轮廓，反映出砂岩峰林地貌景观形成的特殊地质构造环境和基本条件。而外力地质活动作用的流水侵蚀和重力崩坍及其生物的生化作用和物理风化作用，则是塑造武陵源地貌景观必不可少的外部条件。 [13]     地貌类型
    
    张`,
      },
    ],
    list: [],
  },
  onLoad: function (options) {
    var Scenicid = options.scenicid;
    this.setData({
      id: Scenicid,
    });
    // console.log('id='+options.id)
  },
  onReady: function () { },
  onShow: function () {},
    onHide: function () { },
    onUnload: function () { },
    onPullDownRefresh: function () { },
    onReachBottom: function () { },
    onShareAppMessage: function () { },
    onPageScroll: function () { },
    onTabItemTap: function (item) { },
    gotosearch: function (param) {
      wx.navigateTo({
        url: "..subpackages/pages/sousuo/sousuo",
      });
    },
  });
