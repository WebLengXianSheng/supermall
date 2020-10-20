<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  // import HomeSwiper from './childComps/HomeSwiper';
export default {
  name:"Home",
  components:{
    NavBar,
    // HomeSwiper
  }
}
</script>
<style scoped>
  #home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>