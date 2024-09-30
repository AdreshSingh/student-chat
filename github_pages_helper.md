## Steps to publish Vite React App as static site
1. add gh-pages library by npm
2. add script for deploy command
3. set ouput directory like below
#
export default defineConfig({

  plugins: [react()],

  base: '',

  build: {
    
    outDir: './build',
    emptyOutDir: true
  }
})