<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommon :recommends = "recommends"></home-recommon>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>
    <goods-list :goods="goods.pop.list"></goods-list>

  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommon from './childComps/HomeRecommon'
  import FeatureView from './childComps/FeatureView'

  import { getHomeMultidata, getHomeGoods } from "network/home"

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommon,
      FeatureView,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banners : [],
        recommends : [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    created() {  // 组件创建完成后就进行网络请求
      // 1.请求多个数据
      this.getHomeMultidata()

      // 2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // ...res.data.list 数组解析
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home-nav {
    /* var(--color-tint) 引用在base.css中设置的变量  颜色 */
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 43px;
    z-index: 9;
  }
</style>
