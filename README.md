# Cosmetology

The project has been published to Github Pages, namely to https://iburskiy.github.io/cosmetology.
The purpose of the project was to practice with markup using BEM methodology in SCSS version and use Github Pages build process to deploy it on the web.
It represents the design of Cosmetology Home Page and Universal Page (see point about this page below) for a demo how multiple page website may look like on Github Pages 

## Build
Run `npm run build` to build the project.

Run `npm run watch` to do the development in watch mode: adding changes in html and scss files will build the project locally to `dist` folder. 
Open `dist/index.html` in browser. `-e` flag is used to look for scss and html files. `--watch` watches for changes only in `src/` folder. 
`--exec` executes `scss` and `copy-html` NPM scripts. Use `nodemon --help` or Nodemon Documentation for the full reference.

Run `npm run clear` to remove all the content in `dist` folder.

Run `npm run scss` to compile `index.scss` to `dist/index.css` and `universal.scss` to `dist/universal.css`.
To import 3rd party css from SplideJS node module, I had to use ```@imprort "../../../node_modules/@splidejs/splide/dist/css/splide.min"``` without .css extension.
So all file is injected in the final CSS bundle. Otherwise it would leave the import statement without changes because CSS has also @import syntax.
Also, it's possible to add `--load-path=node_modules/@splidejs/splide/dist/css` to `sass --embed-sources` command in `package.json` 
and use `@import "splide.min"`  to make import statement shorter.

Run `npm run build-js` to build JS bundle. Browserify is used as a bundler to create a single JS file for the page. 
By default, Browserify uses CommonJS Module system which is default for NodeJS.
I used ES Modules in the project, so I needed to add Babelify with some of its presets to make Browserify understand the ES6 syntax.
1. `npm i --save-dev @babel/core @babel/preset-env babelify`
2. Create a new file named `babel.config.json` and paste following content:
```
   {
    "presets": ["@babel/preset-env"]
    }
```
3. Run `browserify main.js -o bundle.js -t babelify`
See https://weblianz.com/blog/use-nodejs-modules-in-web-browsers-using-browserify for the reference.

Run `npm run copy` to copy html files and image files to `dist` folder.

## To publish changes to Github public URL:
Build the project locally and commit changes including `dist/` folder. A build happens on each commit that publishes content to the link above.

What I did: Found the following info: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow 
I created package.json. `scripts > copy` section copies images and index.html to dist folder. `scripts > scss` compiles scss files to css file to dist folder. 
sass package is installed only locally. It's automatically added to `node_modules/.bin`. 
It lets running the command in scripts > scss: sass --embed-sources styles.scss dist/styles.css I added the repo to my github 
and then went to Settings > Pages > Build and deployment > Github Actions. Then selected Static Html option. 
It produced .github/workflows/static.yml in the project asked to commit it right into Github web interface. 
I changed the following line: path: `'./dist'` to make Github take static content from dist folder. Then I pulled the change in IDE. 
Then after each commit I could see that a new workflow (or build) appears in my project in `Actions` tab of the project in Github.

## Rendering Header and Footer with JS
Templates for Header and Footer are placed in JS. They replace placeholders in HTML such as <!--header--> and <!--footer-->.
Logo is inner part of Header and Footer and its placeholder <!--logo--> is also replaced with Logo HTML template while rendering.
In this way we have Logo, Header and Footer in one place without any repeat.

## Universal page
If you press any link in Header or Footer you are redirected to universal.html page with dynamically generated text.
Link click runs JS which reads value from link's `data-text` attribute and sets it to `sessionStorage` variable.
When `universal.html` page is open, another JS reads that variable and generates dynamic text depending on the previously clicked link.

## SEO
Tested on https://www.seoreviewtools.com/google-seo-checker/?status=1
Added `robots.txt` and generated `sitemap.xml`. To make it indexable I created the project https://iburskiy.github.io/ and added `robots.txt` there.