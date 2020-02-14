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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/map",
    name: "Map",
    component: Map
  },
  {
    path: "*",
    name: "PageNotFound",
    component: PageNotFound
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: Mypage
  },
  {
    path: "/authentication",
    name: "Authentication",
    component: Authentication
  },
  {
    path: "/social",
    name: "Social",
    component: Social
  },
  {
    path: "/join",
    name: "Join",
    component: Join
  },
  {
    path: "/mobileGridItem",
    name: "MobileGridItem",
    component: MobileGridItem
  },
  {
    path: "/socialJoin",
    name: "SocialJoin",
    component: SocialJoin
  },
  {
    path: "/searchMap",
    name: "SearchMap",
    component: SearchMap
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
