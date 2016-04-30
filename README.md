## Motivation

I'm attempting to learn Angular and am about to start using Webpack, rather than using a seed I thought I should run through the basics of Webpack so I'll understand it better.

## What is Webpack?

_"webpack is a module bundler. webpack takes modules with dependencies and generates static assets representing those modules."_
  
It handles the most common module styles: [CommonJs](https://webpack.github.io/docs/commonjs.html) and AMD.

### Project details

This is has been quite a messy experimental repo, ideally I will create a further project with a more methodical order.

Possible steps:

1. Simple js app in 1 folder
2. App with folder structure
3. Build using CLI
4. Add NPM task
5. run using web pack server
6. split configuration (see [developing_with_webpack](http://survivejs.com/webpack_react/developing_with_webpack/) )
7. Use Hot Module Replacement (HMR)
8. Add source maps
9. Add typescript
10. Add profiler
11. Add SASS






### Run

```
$ webpack ./entry.js bundle.js

```

With CSS Binding

```
webpack ./entry.js bundle.js --module-bind 'css=style!css'
```

With Config

```
# Basic
$ webpack

# With colors and a progress bar
$ webpack --progress --colors

# Watch mode
$ webpack --progress --colors --watch

```

With Server

```
$ webpack-dev-server --progress --colors

# Run from
# http://localhost:8080/webpack-dev-server/bundle
```

Or via NPM

```
$ npm run go
```

### Notes

## Typescript

I had real issues with this module, the `webpack-dev-server` was not running correctly. The `build` was providing me with an error ```
ERROR in /Users/factornine/localhosts/www.factornine.co.uk/development/webpack-test/node_modules/angular2/src/facade/promise.d.ts
(1,10): error TS2661: Cannot re-export name that is not defined in the module.
```

I simple upgraded by:

```
npm i typescript@next -D
```

### Dependancies

[npm-install-webpack-plugin](https://github.com/ericclemmons/npm-install-webpack-plugin)


### Links

[developing_with_webpack](http://survivejs.com/webpack_react/developing_with_webpack/)

[Getting Started](http://webpack.github.io/docs/tutorials/getting-started/)

[TypeScript and webpack](http://www.jbrantly.com/typescript-and-webpack/)

[Smarter CSS builds with Webpack](https://www.bensmithett.com/smarter-css-builds-with-webpack/)

[faster-sass-builds-with-webpack](http://eng.localytics.com/faster-sass-builds-with-webpack/)

[github.com/jtangelder/sass-loader](https://github.com/jtangelder/sass-loader)

[angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

Using node more
[SO](http://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder)

For SASS
[introduction-to-webpack-with-practical-examples])http://julienrenaux.fr/2015/03/30/introduction-to-webpack-with-practical-examples/)

[es6](http://exploringjs.com/es6/)

[Modulization-and-Bundling-with-TypeScript-and-Webpack-for-JS-Full-Stack-Project/](http://www.thinkingincrowd.me/2016/01/02/Modulization-and-Bundling-with-TypeScript-and-Webpack-for-JS-Full-Stack-Project/)

[Angular 1](http://www.shmck.com/webpack-angular-part-1/)

[Quickstart to Webkit](https://www.youtube.com/watch?v=j9w5hFit5rM)

[ng2-webpack-play](https://github.com/pkozlowski-opensource/ng2-webpack-play)