import { createRouter, createWebHistory } from 'vue-router'
import {routers} from "@/router/components";

const routes = routers

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
