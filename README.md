# code from course
Lawrence Whiteside
https://www.udemy.com/course/webpack-beyond-the-basics/learn/
GitHub: https://github.com/lawwantsin/webpack-course-v3

## webpack-dev-server
Installs websocket file that webpack-dev-server uses to establish hot reloading, making the bundle file very large in dev mode.

## CSS Loaders
Have CSS linting by default.
1. `style-loader`: inject CSS into the DOM.
1. `css-loader`: interprets @import and url() like import/require() and will resolve them.

## HTML Loaders
1. `html-loader`: does the linting...
1. `extract-loader`: tells webpack to make a separate HTML file, not included in the main bundle.js.
1. `file-loader`: tells webpack the name of the file that you want to create

On web-dev-server HTML file does not get written. It gets served in memory.
