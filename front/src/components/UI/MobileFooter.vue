<template>
  <div class="mobile-footer">
    <div class="footer-container">
      <div class="footer-button" @click="redirectBack">
        Back
      </div>
      <div class="footer-button" @click="redirectMain">
        Main
      </div>
      <div class="footer-button" @click="redirectMypage">
        Mypage
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileFooter",
  data() {
    return {};
  },
  methods: {
    redirectBack(){
      this.$router.go(-1);
    },
    redirectMain(){
      this.$router.go();
    },
    redirectMypage(){
      this.$router.push("Mypage");
    }
  }
};
</script>

<style>
.mobile-footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
}
.footer-container {
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
}
.footer-button{
    /* padding:10px; */
    margin:0 0 15px 0;
    padding:2px 15px 2px 15px;
    border:1px solid grey;
    border-radius: 10px;
    background-color:rgb(202, 142, 74);
}
</style>
