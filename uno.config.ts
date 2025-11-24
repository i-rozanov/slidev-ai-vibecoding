import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  theme: {
    fontFamily: {
      sans: '"ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Noto Sans CJK JP", "Noto Sans CJK SC", "Noto Sans CJK TC", "Noto Sans CJK KR"',
    },
  },
  shortcuts: [
    {
      "font-sans":
        'font-sans font-["Noto_Sans_CJK_JP","Noto_Sans_CJK_SC","Noto_Sans_CJK_TC","Noto_Sans_CJK_KR","Noto_Sans","sans-serif"]',
    },
  ],
});
