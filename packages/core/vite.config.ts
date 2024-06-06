import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("dn-"),
        },
      },
    }),
    visualizer(),
  ],
  resolve: {
    alias: {
      "@core": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      // tell the build process to treat this project as library
      entry: "src/index.ts",
      name: "DoorKnobCore",
      fileName: "door-knob-core",
    },
    rollupOptions: {
      external: ["vue", "@vueuse/core", "vue-i18n"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
