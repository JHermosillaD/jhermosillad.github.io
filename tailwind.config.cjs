/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"DM Mono"', 'monospace'], 
            },
        },
    },
    plugins: [typography, daisyui],
    daisyui: {
        themes: [
          {
          light: {
              primary: "#005baa",
            },
          },
          {
          dark: {
            ...themes["business"],
            primary: "#005baa",
            "primary-content": "#ffffff", 
          },
          },
        ],
    }
}