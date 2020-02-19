<template>
  <div class="about-card">
    <img class="about-image" :src="images[idx]" alt="" />
    <div class="about-profile2">
        {{ team[idx] }}
      {{ info[idx] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: ["idx"],
  data() {
    return {
      scrollPosition: null,
      team: ["박지수", "양찬우", "신채민", "조신비", "조한슬"],
      info: ["Backend", "Frontend", "Frontend", "Frontend", "Backend"]
    };
  },
  computed: {
    images() {
      return this.$store.state["profileImageUrl"];
    }
  }
};
</script>

<style>
.about-card {
  height: 50vmin;
  margin: 0.6vw;
  border-radius: 15px;
  /* display: flex; */
  justify-content: center;
  align-items: center;
}
.about-image {
  position: relative;
  height: 80%;
  width: 100%;
  border-radius: 180px;
  /* border:5px solid transparent; */
  box-shadow: 0px 3px 3px 3px grey;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  object-position: top;
}
.about-profile {
  position: relative;
  height: 10%;
  width: 100%;
  font-family: "Noto Serif KR", serif;
  font-weight: bold;
  /* background-color: rgb(221, 220, 219); */
  border-radius: 15px;
  font-size: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: top;
}
.about-profile2 {
  position: relative;
  width: 100%;
  font-family: "Noto Serif KR", serif;
  font-weight: bold;
  /* background-color: rgb(221, 220, 219); */
  border-radius: 15px;
  font-size: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: top;
}

</style>
