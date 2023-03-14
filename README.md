# Cosmetology

The project has been published to Github Pages, namely to https://iburskiy.github.io/cosmetology.
The purpose of the project was to practice with markup using BEM methodology in SCSS version and use Github Pages build process to deploy it on the web.
It represents the design of Cosmetology Home Page and Services Page for a demo how multiple page website may look like on Github Pages 
The first item `SERVICES` in the header is a link that leads to Services Page.

## Build
Run `npm run build` to build the project.

Run `npm run watch` to do the development in watch mode: adding changes in html and scss files will build the project locally to `dist` folder. 
Open `dist/index.html` in browser. `-e` flag is used to look for scss and html files. `--watch` watches for changes only in `src/` folder. 
`--exec` executes `scss` and `copy` NPM scripts. Use `nodemon --help` or Nodemon Documentation for the full reference.

Run `npm run scss` to compile `index.scss` to `dist/index.css` and `services.scss` to `dist/services.css`.

Run `npm run copy` to copy html files and image files to `dist` folder.

## To publish the changes to Github public URL:
Build the project locally and commit changes including `dist/` folder. A build happens on each commit that publishes content to the link above.

What I did: Found the following info: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow 
I created package.json. `scripts > copy` section copies images and index.html to dist folder. `scripts > scss` compiles scss files to css file to dist folder. 
sass package is installed only locally. It's automatically added to `node_modules/.bin`. 
It lets running the command in scripts > scss: sass --embed-sources styles.scss dist/styles.css I added the repo to my github 
and then went to Settings > Pages > Build and deployment > Github Actions. Then selected Static Html option. 
It produced .github/workflows/static.yml in the project asked to commit it right into Github web interface. 
I changed the following line: path: `'./dist'` to make Github take static content from dist folder. Then I pulled the change in IDE. 
Then after each commit I could see that a new workflow (or build) appears in my project in `Actions` tab of the project in Github.