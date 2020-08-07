<template>
  <div id="home">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/about">關於我</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/car">購物車</router-link> |
      <router-link to="/manage">管理頁面</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }
}
</script>
