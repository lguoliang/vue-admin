<!--  -->
<template>
  <div>
    <el-scrollbar>
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        mode="vertical"
        @select="handleSelect"
      >
        <SidebarItem v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"></SidebarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'
export default {
  name: 'SideBar',
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
    variables() {
      return variables
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      // 如果设置路径，侧栏将突出显示您设置的路径
      return meta.activeMenu || path
    }
  },
  mounted() {
    console.log('permission_routes', this.permission_routes)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log('sel', key, keyPath)
    }
  }
}
</script>

<style scoped>
</style>
