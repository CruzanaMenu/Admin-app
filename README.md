# ProyectoA - Menú restaurante Cruzana - Frontend. 🍽

El proyecto utiliza ReactJS v18.2.0, Webpack 5.74.0 y Tailwind 3.1.8.

Documentación:

### ReactJS:

> https://es.reactjs.org/

### Webpack:
> https://webpack.js.org/

### TailwindCSS:
> https://tailwindcss.com/
## Instalación de React - Webpack - TailwindCSS

Integración de los tres elementos principales del proyecto, NO se procede con el comando `npx create-react-app `, dado que la configuración se está realizando con Webpack, y esto genera inconvenientes con Tailwind para transpilar el CSS final, para ello se instala las dependencias de React de manera independiente:

> `npm install react react-dom`

Instalación de Webpack y modo de desarrollo:

> `npm install webpack webpack-cli webpack-dev-server`

Instalación de Tailwind e creación de los archivos y PostCSS-config.js y  Tailwind.config.js:

> `npm install -D tailwindcss postcss autoprefixer`
> `npx tailwindcss init -p`

Configuración del Index.js, para integrar estos tres elementos. 

### Index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from './routes/App';
import '../public/index.css';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render (
        <App />
)
```
- Se debe importar el `./public/index.css`. El cual es el código transpilado por Tailwind.

### Styles.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Se adicionan las directivas de Tailwind en el archivo de `./src/styles.css`. 

### Index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title page</title>
</head>
<body>
    <div id="app"></div>
    <script src="../dist/bundle.js"></script>
</body>
</html>
```

- Se genera el bundle.js con el comando:
>`npm run build`

Este genera en nuestra carpeta `./dist` el archivo bundle.js, el cual se coloca al final de body del archivo Index.html.

### webpack.config.js

```javascript
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath : '/'

	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					"postcss-loader",			
				  ]
				
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
    devServer: {
		historyApiFallback: true,
      }
}
```

### postcss.config.js

```javascript
module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
  ],
}
```

### App.jsx
```jsx
import React from 'react';

const App = () => {
	return (
		<div>
			<h1 className='bg-red-400 w-32 h-24'>REACT + WEBPACK + TAILWINDCSS</h1>
			<div className='w-20 h-12 bg-blue-400'>Hello world!</div>
		</div>
	);
}

export default App;
```
- Prueba de la visualización del App.jsx

![](https://i.postimg.cc/FRZHBVk4/Screenshoot-React-Webpack-Tailwind.jpg)

Comando npm run start del package.json

```json
...

"scripts": {
"start": "tailwindcss -i ./src/styles.css -o ./public/index.css && webpack server --open",
"build": "webpack --mode production"
},

...
```

### tailwind.config.js

```javascript
module.exports = {
  content: [
    // './src/**/*.{html,jsx}',
    // './src/pages/**/*.{html,jsx}',
    // './src/components/**/*.{html,jsx}',
    // './src/layouts/**/*.{html,jsx}',
    // './public/index.html',
    "./public/index.html", "./src/**/*.{html,jsx}",
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```





