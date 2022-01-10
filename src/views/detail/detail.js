export class Shop {
  // 实例的初始化 new自动运行. 存储商家数据.
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.store = shopInfo.score
    this.saleCount = shopInfo.cSells
    this.goodsCount = shopInfo.cGoods
    this.fans = shopInfo.cFans
   }
}

export class Goods {
  constructor(columns, goodsInfo,shopInfo) {
    this.info = columns
    this.title = goodsInfo.title
    this.price = goodsInfo.price
    this.oldPrice = goodsInfo.oldPrice
    this.discountPrice = goodsInfo.discountDesc
    this.discountBgColor = goodsInfo.discountBgColor
    this.desc = goodsInfo.desc
    this.realPrice = goodsInfo.lowNowPrice
    this.services = shopInfo.services
  }
}

export class GoodParams {
  constructor(rule, info) {
    this.sizes = rule.tables
    this.info = info.set
    this.images = info.images ? info.images[0] : ''
  }
}
