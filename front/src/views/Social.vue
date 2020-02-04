<template>

  <div id="app">
    <KakaoLogin
      api-key="38f6f12924a67d6a88321b717e55747c"  
      image="kakao_login_btn_large"
      :on-success=onSuccess
      :on-failure=onFailure
      />

  </div>

</template>



<script>
import KakaoLogin from 'vue-kakao-login'
let onSuccess = (data) => {
    console.log(data)
  console.log("success")


}
let onFailure = (data) => {
  console.log(data)
  console.log("failure")
}
 
export default {
  name: 'App',
  components: {
    KakaoLogin
  },
  methods: {
    onSuccess,
    onFailure
  }
}
</script>