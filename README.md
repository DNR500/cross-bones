# Cross-Bones

This is a continuing work in progress and an accumulative collection of tasks and frameworks that outline the way I like to work. This was originally a project that I used to spike out new projects and get something up and running quickly. The aim now is to make it a project that will allow me to get something to production as quickly as possible.

* es6/babel/jsx/react coding practise for both front and back end 
* minification and bundling for frontend assets (using sass, postcss, and webpack)
* tools for linting, unit testing, intergration testing, and functional testing (using eslint, mocha, chai, casper, etc)
* tools for js static analysis

Lots more still to come.

To bring in dependencies run the following in the root of the project..
```
npm i
```

### Task overview
See the scripts section of the package.json for a fuller outline..

* **npm run start:node** - runs the page in a server http://localhost:3000 (requires npm run build first!)
* **npm run lint** - runs js and json linting tasks
* **npm test** - runs karma and javascript tests
* **npm run report** - runs tasks that produces a set of reports - see the ouput in the report folder
* **npm run compile** - outputs static files for css, js, and other static assets
* **npm run build** - lints, test, amd compiles the site
* **npm run watch** - sets up watch tasks to help speed up development
* **npm run release** - bump the version number and create a release on github

### To run project..

```
npm run build
npm run start:node
```
