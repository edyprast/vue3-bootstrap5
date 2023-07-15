import { defineConfig } from "vite";
// import inject from "@rollup/plugin-inject";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // inject({
    //   $: "jquery",
    //   jQuery: 'jquery',
    // }),
    vue(),
  ],
});
