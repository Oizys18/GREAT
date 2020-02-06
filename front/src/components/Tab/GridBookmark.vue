<template>
    <div>
    <v-list-item-icon>
            <v-btn text icon color="indigo">
              <v-icon v-if=true>mdi-star</v-icon>
            </v-btn>
          </v-list-item-icon>

          <!-- 북마크 이름 -->
          <v-list-item-content>
            <v-list-item-title >gird bookmark title </v-list-item-title>
            <!-- <v-list-item-title v-text="item.title"></v-list-item-title> -->
          </v-list-item-content>

          <!-- 수정 버튼-->
          <v-list-item-icon>
            <v-btn class="ma-2" text icon color="red lighten-2">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-icon>

          <!-- 삭제 버튼 -->
         <v-list-item-icon>
            <v-btn class="ma-2" text icon color="red lighten-2">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-list-item-icon>
    </div>
 </template>

<script>
export default {
  name: "GridBookmark"
};
</script>

<style></style>