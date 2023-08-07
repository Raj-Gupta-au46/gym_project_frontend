import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import someComponent from "../../../src/components/someComponent"    both line number 4 or 5 is same
// import someComponent from "@/components/someComponent" this is easy way of writing by using @ for making it working we use few line code

import path from "path"; // package

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 1
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }], // 2
  }, // 3
});
