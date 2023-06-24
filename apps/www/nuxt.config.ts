import { pwa } from "./config/pwa";
import { appDescription } from "./constants/index";

export default defineNuxtConfig({
  routeRules: {
    "/": { redirect: "/examples/dashboard" },
    "/external-route": { redirect: "https://example.com" },
  },
  components: [
    {
      path: "~/components",
      extensions: [".vue"],
    },
    {
      path: "~/components/ui",
      extensions: [".vue"],
      global: true,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/content",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
  ],
  content: {
    documentDriven: true,
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: "github-dark",
        default: "github-light",
      },
    },
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: ["~/assets/css/globals.css"],

  colorMode: {
    classSuffix: "",
  },

  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ["/"],
      ignore: ["/hi"],
    },
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/nuxt.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
      ],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: appDescription,
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },
});
