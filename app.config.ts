// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Karli Sensibello',
    description: 'Karli Sensibello is a senior frontend developer from Cleveland, Ohio',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'center', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'karli sensibello' // alt of the logo
      }
    },
    footer: {
      credits: {
        text: 'Karli Sensibello',
        enabled: true, // possible value are : true | false
        repository: '/' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'right', // possible value are : 'none' | 'left' | 'center' | 'right'

    },
    socials: {
      // twitter: 'nuxtlabs',
      instagram: 'ksensibello',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/karlisensi'
      },
      github: {
        icon: 'uil:github',
        label: 'github',
        href: 'https://github.com/sensibello'
      },

    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
