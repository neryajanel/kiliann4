const { description } = require("../../package");

module.exports = {
  plugins: [
    ["@vuepress/back-to-top", true],
    ["@vuepress/medium-zoom", true],
    [
      "@vuepress/pwa", {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
  locales: {
    "https://homelang.co/home/lang/all_lang/": {
      lang: "Todos los Idiomas Disponibles",
      // title: "jw2",
      // description: "El mejor lugar para Aprender todos los Idiomas gt, Xinca y Garifuna",
    },
    "/": {  
      lang: "Cora", // this will be set as the lang attribute on <html>
      title: "Cora",
      description: "El mejor lugar para Aprender Cora gratis",
    }, 
    "/mx/guarijio/": {  
      lang: "Guarijio", // this will be set as the lang attribute on <html>
      title: "Guarijio",
      description: "El mejor lugar para Aprender Guarijio gratis",
    },
    "/mx/huichol/": {  
      lang: "Huichol", // this will be set as the lang attribute on <html>
      title: "Huichol",
      description: "El mejor lugar para Aprender Huichol gratis",
    },
    "/mx/mayo/": {  
      lang: "Mayo", // this will be set as the lang attribute on <html>
      title: "Mayo",
      description: "El mejor lugar para Aprender Mayo gratis",
    },
    "/mx/mazateco/": {  
      lang: "Mazateco", // this will be set as the lang attribute on <html>
      title: "Mazateco",
      description: "El mejor lugar para Aprender Mazateco gratis",
    },
    "/mx/mixteco/": {  
      lang: "Mixteco", // this will be set as the lang attribute on <html>
      title: "Mixteco",
      description: "El mejor lugar para Aprender Mixteco gratis",
    },
    "/mx/nahuatl/": {  
      lang: "Nahuatl", // this will be set as the lang attribute on <html>
      title: "Nahuatl",
      description: "El mejor lugar para Aprender Nahuatl gratis",
    },
    "/mx/otomi/": {  
      lang: "Otomi", // this will be set as the lang attribute on <html>
      title: "Otomi",
      description: "El mejor lugar para Aprender Otomi gratis",
    },
    "/mx/pame/": {  
      lang: "Pame", // this will be set as the lang attribute on <html>
      title: "Pame",
      description: "El mejor lugar para Aprender Pame gratis",
    },
    "/mx/papago/": {  
      lang: "Pápago", // this will be set as the lang attribute on <html>
      title: "Pápago",
      description: "El mejor lugar para Aprender Pápago gratis",
    },
    "/mx/pima/": {  
      lang: "Pima", // this will be set as the lang attribute on <html>
      title: "Pima",
      description: "El mejor lugar para Aprender Pima gratis",
    },
    "/mx/popoloca/": {  
      lang: "Popoloca", // this will be set as the lang attribute on <html>
      title: "Popoloca",
      description: "El mejor lugar para Aprender Popoloca gratis",
    },
    "/mx/raramuri/": {  
      lang: "Raramuri", // this will be set as the lang attribute on <html>
      title: "Raramuri",
      description: "El mejor lugar para Aprender Raramuri gratis",
    },
    "/mx/seri/": {  
      lang: "Seri", // this will be set as the lang attribute on <html>
      title: "Seri",
      description: "El mejor lugar para Aprender Seri gratis",
    },
    "/mx/tarasco/": {  
      lang: "Tarasco", // this will be set as the lang attribute on <html>
      title: "Tarasco",
      description: "El mejor lugar para Aprender Tarasco gratis",
    },
    "/mx/tepehua/": {  
      lang: "Tepehua", // this will be set as the lang attribute on <html>
      title: "Tepehua",
      description: "El mejor lugar para Aprender Tepehua gratis",
    },
    "/mx/totonaco/": {  
      lang: "Totonaco", // this will be set as the lang attribute on <html>
      title: "Totonaco",
      description: "El mejor lugar para Aprender Totonaco gratis",
    },
    "/mx/yaqui/": {  
      lang: "Yaqui", // this will be set as the lang attribute on <html>
      title: "Yaqui",
      description: "El mejor lugar para Aprender Yaqui gratis",
    },
    "/mx/zapoteco/": {  
      lang: "Zapoteco", // this will be set as the lang attribute on <html>
      title: "Zapoteco",
      description: "El mejor lugar para Aprender Zapoteco gratis",
    },
  },

  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],

  themeConfig: {
    locales: {     
      "/": {
        label: "Cora",
        selectText: "Cora",
        nav: require("./nav/cora"),
        sidebar: {
          "/cora": [
            /* ... */
          ],
          "/cora/guide/": [
            /* ... */
          ],
        },
      },
    "/mx/guarijio/": {
        label: "Guarijio",
        selectText: "Guarijio",
        nav: require("./nav/guarijio"),
        sidebar: {
          "/mx/guarijio": [
            /* ... */
          ],
          "/mx/guarijio/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/huichol/": {
        label: "Huichol",
        selectText: "Huichol",
        nav: require("./nav/huichol"),
        sidebar: {
          "/mx/huichol": [
            /* ... */
          ],
          "/mx/huichol/guide/": [
            /* ... */
          ],
        },
      },
      "/mx/mayo/": {
        label: "Mayo",
        selectText: "Mayo",
        nav: require("./nav/mayo"),
        sidebar: {
          "/mx/mayo": [
            /* ... */
          ],
          "/mx/mayo/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/mazateco/": {
        label: "Mazateco",
        selectText: "Mazateco",
        nav: require("./nav/mazateco"),
        sidebar: {
          "/mx/mazateco": [
            /* ... */
          ],
          "/mx/mazateco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/mixteco/": {
        label: "Mixteco",
        selectText: "Mixteco",
        nav: require("./nav/mixteco"),
        sidebar: {
          "/mx/mixteco": [
            /* ... */
          ],
          "/mx/mixteco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/nahuatl/": {
        label: "Nahuatl",
        selectText: "Nahuatl",
        nav: require("./nav/nahuatl"),
        sidebar: {
          "/mx/nahuatl": [
            /* ... */
          ],
          "/mx/nahuatl/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/otomi/": {
        label: "Otomi",
        selectText: "Otomi",
        nav: require("./nav/otomi"),
        sidebar: {
          "/mx/otomi": [
            /* ... */
          ],
          "/mx/otomi/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/pame/": {
        label: "Pame",
        selectText: "Pame",
        nav: require("./nav/pame"),
        sidebar: {
          "/mx/pame": [
            /* ... */
          ],
          "/mx/pame/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/papago/": {
        label: "Pápago",
        selectText: "Pápago",
        nav: require("./nav/papago"),
        sidebar: {
          "/mx/papago": [
            /* ... */
          ],
          "/mx/papago/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/pima/": {
        label: "Pima",
        selectText: "Pima",
        nav: require("./nav/pima"),
        sidebar: {
          "/mx/pima": [
            /* ... */
          ],
          "/mx/pima/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/popoloca/": {
        label: "Popoloca",
        selectText: "Popoloca",
        nav: require("./nav/popoloca"),
        sidebar: {
          "/mx/popoloca": [
            /* ... */
          ],
          "/mx/popoloca/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/raramuri/": {
        label: "Raramuri",
        selectText: "Raramuri",
        nav: require("./nav/raramuri"),
        sidebar: {
          "/mx/raramuri": [
            /* ... */
          ],
          "/mx/raramuri/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/seri/": {
        label: "Seri",
        selectText: "Seri",
        nav: require("./nav/seri"),
        sidebar: {
          "/mx/seri": [
            /* ... */
          ],
          "/mx/seri/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/tarasco/": {
        label: "Tarasco",
        selectText: "Tarasco",
        nav: require("./nav/tarasco"),
        sidebar: {
          "/mx/tarasco": [
            /* ... */
          ],
          "/mx/tarasco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/tepehua/": {
        label: "Tepehua",
        selectText: "Tepehua",
        nav: require("./nav/tepehua"),
        sidebar: {
          "/mx/tepehua": [
            /* ... */
          ],
          "/mx/tepehua/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/totonaco/": {
        label: "Totonaco",
        selectText: "Totonaco",
        nav: require("./nav/totonaco"),
        sidebar: {
          "/mx/totonaco": [
            /* ... */
          ],
          "/mx/totonaco/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/yaqui/": {
        label: "Yaqui",
        selectText: "Yaqui",
        nav: require("./nav/yaqui"),
        sidebar: {
          "/mx/yaqui": [
            /* ... */
          ],
          "/mx/yaqui/guide/": [
            /* ... */
          ],
        },
      },
     "/mx/zapoteco/": {
        label: "Zapoteco",
        selectText: "Zapoteco",
        nav: require("./nav/zapoteco"),
        sidebar: {
          "/mx/zapoteco": [
            /* ... */
          ],
          "/mx/zapoteco/guide/": [
            /* ... */
          ],
        },
      },
    },
  },
}
