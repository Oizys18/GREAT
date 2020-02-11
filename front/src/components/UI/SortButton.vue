<template>
  <ul class="sort-elements">
    <li>
      <a href="#">
        <span class="icon-cog"></span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon-cw"></span>
      </a>
    </li>
    <li>
      <a href="#">
        <span class="icon-location"></span>
      </a>
    </li>
  </ul>
</template>

<script>
import "@/assets/style/css/sortButton.css";
export default {
  name: "SortButton",
  methods:{
      click(){
          console.log("clcick");
      }
  }
};
</script>

<style>
</style>