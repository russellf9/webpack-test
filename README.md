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

[Getting Started](http://webpack.github.io/docs/tutorials/getting-started/)

[TypeScript and webpack](http://www.jbrantly.com/typescript-and-webpack/)