<!--  -->
<template>
  <div class="navbar">
    <!-- <Hamburger
      class="hamburger-container"
      :is-active="true"
      @toggleClick="toggleSideBar"
    /> -->
    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
    <div class="right-menu">
      <span class="logout">退出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
  }
  .logout {
    display: inlne-block;
    padding: 0 32px;
    cursor: pointer;
    &:hover {
      color: #46a6ff;
    }
  }
}
</style>
