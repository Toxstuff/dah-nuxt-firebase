/* eslint-disable prettier/prettier */
export default {
  components: true,
  ssr: true,

  // mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyBWeELg8PikD9-cn-nwJ650WR8qumq2_tE",
          authDomain: "dah-nuxt-firebase-c9341.firebaseapp.com",
          databaseURL:
            "https://dah-nuxt-firebase-c9341-default-rtdb.europe-west1.firebasedatabase.app/",
          projectId: "dah-nuxt-firebase-c9341",
          storageBucket: "dah-nuxt-firebase-c9341.appspot.com",
          messagingSenderId: "24883552909",
          appId: "1:24883552909:web:00d54c7e524e2984d538c4",
          measurementId: "G-R1H04RLWDP",
        },
        services: {
          firestore: true,
          auth: {
            persistence: "local", // default
            initialize: {
              onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
              onAuthStateChangedAction: "onAuthStateChangedAction",
              subscribeManually: false,
            },
          },
        },
      },
    ],
  ],
};
