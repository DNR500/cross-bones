# Cross-bones

To bring in dependencies run the following in the root of the project..
```
npm install
```

### Task commands
* **npm run dev-server** - runs a 'hotswap' server for js development http://localhost:3000
* **npm run node-server** - runs the page in a server http://localhost:3000 (do npm run build first!)
* **npm run lint** - runs js and json linting tasks
* **npm test** - runs karma and javascript tests
* **npm run js-compile** - runs js bundling task and packages up our javascript into one bundle
* **npm run css-compile** - compiles our scss files
* **npm run build** - lints, test, amd compiles our site
* **npm run watch** - js and scss watch task to help speed up developemnt

### To run project..

```
npm run build
npm run start:node
```
