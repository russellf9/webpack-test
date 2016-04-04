## Motivation

I'm attempting to learn Angular and am about to start using Webpack, rather than using a seed I thought I should run through the basics of Webpack so I'll understand it better.

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






### Links

[Getting Started](http://webpack.github.io/docs/tutorials/getting-started/)