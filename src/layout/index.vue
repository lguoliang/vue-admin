<!--  -->
<template>
  <div :class="classObj" class="app-wrapper">
    <!-- bg -->
    <!-- <div class="drawer-bg" /> -->
    <!-- sidebar -->
    <Sidebar class="sidebar-container" />
    <!--  -->
    <div class="main-container">
      <AppMain />
      <!-- <section class="app-main">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <router-view :key="this.$route.path" />
          </keep-alive>
        </transition>
      </section> -->
    </div>
  </div>
</template>

<script>
import { Sidebar, AppMain } from './components'
export default {
  name: 'Layout',
  components: {
    Sidebar, AppMain
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
