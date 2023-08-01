import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "../views/MainPage.vue";
import FormPage from "../views/forms/FormPage.vue";
import TablePage from "../views/TablePage.vue";
import ChartPage from "../views/ChartPage.vue";
import EditorPage from "../views/EditorPage.vue";
import General from "../views/uielements/General.vue";
import ValidatePage from "../views/ValidatePage.vue";
import Vue3Datatable from "../views/Vue3Datatable.vue";
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
      path: "/chart",
      component: ChartPage,
    },
    {
      path: "/editor",
      component: EditorPage,
    },
    {
      path: "/general",
      component: General,
    },
    {
      path: "/validation",
      component: ValidatePage,
    },
    {
      path: "/easytable",
      component: Vue3Datatable,
    },
  ],
});

export default router;
