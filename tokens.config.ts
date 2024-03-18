import theme from '@nuxt-themes/tokens/config'
import { defineTheme } from 'pinceau'

export default defineTheme({
  alpine: {
    $schema: {
      title: 'All the configurable tokens from Alpine.',
      tags: [
        '@studio-icon carbon:blog'
      ]
    },
    body: {
      backgroundColor: {
        initial: '{color.white}',
        dark: '#292929'
      },
      color: {
        initial: '{color.gray.800}',
        dark: '{color.gray.200}'
      }
    },
    backdrop: {
      backgroundColor: {
        initial: '#f4f4f5b3', // TODO: rgba({color.gray.100}, 0.7)
        dark: '#18181bb3' // TODO: rgba({color.gray.900}, 0.7)
      }
    },
    readableLine: '68ch'
  },
  elements: {
    container: {
      maxWidth: '64rem',
      padding: {
        mobile: '{space.6}',
        xs: '{space.8}',
        sm: '{space.12}',
        md: '{space.16}'
      }
    }
  },
  color: {
    white: '#FFFFFF',
    // @ts-ignore
    primary: '#0fff50',
    green: {
        50: '#e7ffee',
        100: '#cfffdc',
        200: '#b7ffcb',
        300: '#9fffb9',
        400: '#87ffa8',
        500: '#6fff96',
        600: '#57ff85',
        700: '#3fff73',
        800: '#27ff62',
        900: '#0fff50',
      },
  },
  typography: {
    font: {
      display: '{font.mono}',
      body: '{font.sans}',
    }
  },
  font: {
    $schema: {
      title: 'Your website fonts',
      tags: [
        '@studioInput design-token',
        '@studioInputTokenType font',
        '@studioIcon material-symbols:font-download-rounded',
      ],
    },
    sans: 'Inter, NunitoSans, Arial, sans-serif',
    serif: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  },

  prose: {
    p: {
      fontSize: '18px'
    },
   
  }
})