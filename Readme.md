npm init
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
npm install --save-dev css-loader file-loader style-loader html-webpack-plugin
npm install --save react react-dom


====================================
In package.json,
we have : "start": "webpack-dev-server --open --hot --mode development"
so just give "npm start" , it will build and open in browser