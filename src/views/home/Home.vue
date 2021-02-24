<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommon :recommends = "recommends"></home-recommon>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommon from './childComps/HomeRecommon'
  import {getHomeMultidata} from "network/home"

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommon
    },
    data() {
      return {
        banners : [],
        recommends : []
      }
    },
    created() {  // 组件创建完成后就进行网络请求
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        //console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    /* var(--color-tint) 引用在base.css中设置的变量  颜色 */
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
