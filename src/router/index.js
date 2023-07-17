import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "../views/MainPage.vue";
import FormPage from "../views/forms/FormPage.vue";
import TablePage from "../views/TablePage.vue";
import General from "../views/uielements/General.vue";
import ChartPage from "../views/ChartPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/form",
      component: FormPage,
    },
    {
      path: "/table",
      component: TablePage,
    },
    {
      path: "/general",
      component: General,
    },
    {
      path: "/chart",
      component: ChartPage,
    },
  ],
});

export default router;
