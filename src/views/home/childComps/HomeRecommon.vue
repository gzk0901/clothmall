<!--  -->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommon',
  props: {
    recommends : {
      type: Array,
      default() {
        return []
      }
    }

  }
}

</script>
<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>