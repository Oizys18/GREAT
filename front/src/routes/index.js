import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import Main from "../views/Main.vue";
import Map from "../views/Map.vue";
import Mypage from "../views/Mypage.vue";
import Authentication from "../views/Authentication.vue";
import Social from "../views/Social.vue";
import PageNotFound from "../views/PageNotFound.vue";
import Join from "../views/Join.vue";
import MobileGridItem from "@/components/Grid/MobileGrid/MobileGridItem.vue";
import SocialJoin from "../views/SocialJoin.vue";
import SearchMap from "@/components/common/SearchMap.vue";
import BookmarkGrid from "@/views/BookmarkGrid.vue";
import FindPassword from "@/views/FindPassword.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/main",
    name: "main",
    component: Main
  },
  {
    path: "/map",
    name: "map",
    component: Map
  },
  {
    path: "*",
    name: "pagenotfound",
    component: PageNotFound
  },
  {
    path: "/mypage",
    name: "mypage",
    component: Mypage,
  },
  {
    path: "/authentication",
    name: "authentication",
    component: Authentication
  },
  {
    path: "/social",
    name: "social",
    component: Social
  },
  {
    path: "/join",
    name: "join",
    component: Join
  },
  {
    path: "/mobilegriditem",
    name: "mobilegriditem",
    component: MobileGridItem
  },
  {
    path: "/socialjoin",
    name: "socialjoin",
    component: SocialJoin
  },
  {
    path: "/searchmap",
    name: "searchmap",
    component: SearchMap
  },
  {
    path: "/bookmarkgrid",
    name: "bookmarkgrid",
    component: BookmarkGrid,
    props: (route) => ({ bookmarkId: route.query.bookmarkId })
  },
  {
    path: "/findPassword",
    name: "FindPassword",
    component: FindPassword
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
