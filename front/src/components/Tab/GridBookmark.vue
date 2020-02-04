<template>
  <div class="gridbookmark-container" >
    <v-list-item-icon class="girdbookmark-elem-star">
      <v-btn text icon color="#F5331E">
        <v-icon v-if="true">mdi-star</v-icon>
      </v-btn>
    </v-list-item-icon>

    <!-- 북마크 이름 -->
    <v-list-item-content class="girdbookmark-elem-title">
      <v-list-item-title>{{this.$store.state.gridbookmarks[this.gridbookmarkIdx].title}} </v-list-item-title>
      <!-- <v-list-item-title v-text="item.title"></v-list-item-title> -->
    </v-list-item-content>

    <!-- 수정 버튼-->
    <v-list-item-icon class="girdbookmark-elem-edit">
      <v-btn class="ma-2" text icon color="red lighten-2">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-list-item-icon>

    <!-- 삭제 버튼 -->
    <v-list-item-icon class="girdbookmark-elem-delete">
      <v-btn class="ma-2" text icon color="red lighten-2">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-list-item-icon>
  </div>
</template>

<script>
export default {
  name: "GridBookmark",
  props:["gridbookmarkIdx"],
};
</script>

<style></style>
