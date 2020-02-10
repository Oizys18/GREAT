<template>
  <div v-if="menuList.length != 0" class="sidebar-text-menu">
    <template v-for="menu in menuList">
      <div :key="menu.id" class="sidebar-menu">
        <span class="sidebar-menu-name">{{menu.name}}</span>
        <span class="sidebar-menu-price">{{menu.price}}</span>
      </div>
    </template>
    <div
      v-if="this.menuInfo.length > 5 && !opened" 
      @click="opened = true"
      class="sidebar-menu-more">
      More
    </div>
    <div
      v-if="this.menuInfo.length > 5 && opened" 
      @click="opened = false"
      class="sidebar-menu-more">
      Close
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuText',
  props: ['menuInfo'],
  data() {
    return {
      opened: false
    }
  },
  computed:{
    menuList(){
      if(this.menuInfo.length > 5 && !this.opened) {
        return this.menuInfo.slice(0,5)
      } 
      return this.menuInfo
    }
  }
}
</script>

<style>

</style>