import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'sop-antd-theme',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  cssModulesTypescriptLoader: {

  },
  cssLoader: {
    localsConvention: 'camelCase'
  },
  styles: [
    `body { font-size: 12px; color:#333; line-height: 1.5 }`,
  ],
  theme: {
    '@blue': '#0040FF',
    '@green': '#28CA41',
    '@orange': '#FFBD2E',
    '@red': '#FF4B4B',
    '@gray': '#999',

    '@normal': '#333',
    '@hover': '#2965FF',
    '@active': '@blue',
    '@disabled': '#EEE'
  },
});
