import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/sbadmin.css";
import "./assets/corporate-ui.css";
import "./assets/cust-colors.css";
import flatPickr from "vue-flatpickr-component";
// import './assets/corporate-ui.css'
// const $ = require('jquery')
// window.jQuery = window.$ = $;

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faStream,
  faHome,
  faList,
  faMessage,
  faEnvelope,
  faUsers,
  faBars,
  faBell,
  faAngleDown,
  faColumns,
  faUser,
  faForward,
  faTachometerAlt,
  faTree,
  faAnglesDown,
  faTag,
  faTriangleExclamation,
  faBullhorn,
  faBan,
  faCircleCheck,
  faCircleExclamation,
  faCarOn,
  faCircleInfo,
  faHeartCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faStream,
  faHome,
  faList,
  faMessage,
  faEnvelope,
  faUsers,
  faBars,
  faBell,
  faAngleDown,
  faColumns,
  faUser,
  faForward,
  faTachometerAlt,
  faTree,
  faAnglesDown,
  faTag,
  faTriangleExclamation,
  faBullhorn,
  faBan,
  faCircleCheck,
  faCircleExclamation,
  faCarOn,
  faCircleInfo,
  faHeartCircleExclamation
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
