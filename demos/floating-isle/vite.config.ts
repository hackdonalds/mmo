import { defineConfig } from "vite";
import { basename } from "node:path";

export default defineConfig({
  base: `/mmo/demos/${basename(__dirname)}/`,
});
