<template>
  <div>
    <div class="bar-btn" @click="go('/')">
      <span>Log Out</span>
    </div>
  </div>
</template>

<script>
import "@/assets/style/css/barButton.css";
import UserApi from "@/apis/UserApi";

export default {
  name: "BarButton",
  methods: {
    go(link) {
			this.logoutApi();
      this.$router.push(link);
    },
    logoutApi() {
      UserApi.requestLogout(res => {
        console.log(res);
      });
    }
  }
};
</script>
