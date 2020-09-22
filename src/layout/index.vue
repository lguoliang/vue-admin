<!--  -->
<template>
  <div :class="classObj" class="app-wrapper">
    <!-- bg -->
    <!-- <div class="drawer-bg" /> -->
    <!-- sidebar -->
    <Sidebar class="sidebar-container" />
    <!--  -->
    <div class="main-container">
      <Navbar />
      <!--  -->
      <AppMain />
    </div>
  </div>
</template>

<script>
import { Sidebar, AppMain, Navbar } from './components'
export default {
  name: 'Layout',
  components: {
    Sidebar, AppMain, Navbar
  },
  data() {
    return {
    }
  },
  computed: {
    classObj() {
      return {
        test: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
