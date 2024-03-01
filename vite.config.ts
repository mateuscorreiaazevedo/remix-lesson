/* eslint-disable no-undef */
import {createRoutesFromFolders} from '@remix-run/v1-route-convention'
import { vitePlugin as remix } from "@remix-run/dev";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [remix({
    ignoredRouteFiles: ["**/*.css"],
    routes(defineRoutes) {
        return createRoutesFromFolders(defineRoutes)
    },
  })],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, './app')
    }
  }
});
