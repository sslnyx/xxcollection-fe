import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemapPlugin from "vite-plugin-sitemap";

const pages = [
  'inventory',
  'collection',
  'about-us',
  'gallery',
  'contact-us'
]
const dynamicRoutes = pages.map(page => `/${page}`)


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sitemapPlugin({ hostname: "https://xxcollectionclub.com", dynamicRoutes })],
});
