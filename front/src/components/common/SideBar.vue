<template>
  <div class="sidebar">
    <h1>this is sidebar</h1>
  </div>
</template>

<script>
export default {
  name: "SideBar"
};
</script>

<style>
.sidebar {
  width: 10%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
}
.sidebar :hover {
  width: 40%;
  height: 100%;
  position: fixed;
  z-index: 2;
  background-color: black;
}


</style>
