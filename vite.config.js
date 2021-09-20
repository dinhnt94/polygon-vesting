import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@Components": path.resolve(__dirname, "src/components/"),
      "@Helpers": path.resolve(__dirname, "src/helpers/"),
      "@Store": path.resolve(__dirname, "src/store/"),
    },
  },
});
