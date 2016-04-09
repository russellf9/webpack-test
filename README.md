## Motivation

I'm attempting to learn Angular and am about to start using Webpack, rather than using a seed I thought I should run through the basics of Webpack so I'll understand it better.

## What is Webpack?

_"webpack is a module bundler.
  
  webpack takes modules with dependencies and generates static assets representing those modules."_
  
It handles the most common module styles: [CommonJs](https://webpack.github.io/docs/commonjs.html) and AMD.

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