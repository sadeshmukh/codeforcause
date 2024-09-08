import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  server: {
    proxy: {
      "/socket": {
        target: "https://rnhsl-34-106-21-190.a.free.pinggy.link",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/socket/, ""),
      },
    },
  },
});
