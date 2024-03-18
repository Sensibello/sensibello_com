export default defineNuxtConfig({


  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt-themes/alpine',
 
  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',

  ],
  components: [
		'~/components',
		{ path: '~/components/content/', pathPrefix: false },
		{ path: '~/components/data-entry/', pathPrefix: false },
	],
  // buildModules: [
  //   // https://go.nuxtjs.dev/typescript
  //   '@nuxt/typescript-build',
  //   [
  //     '@nuxtjs/google-fonts',
  //     {
  //       families: {
  //         Poppins: [300, 400, 500, 600, 700],
  //         Nunito: [200, 400, 500, 700]
  //       },
  //       display: 'swap',
  //       download: true,
  //       overwriting: false
  //     },
  //   ],
  // ],
  css: [
		'@/assets/main.css',
	],
})
