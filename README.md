# Mischiefer
> A free and lightweight CSS framework with inbuilt light and dark theme! Let's cause some mischiefs!

# Installation
Mischiefer can be imported into your project in different ways, but in most cases, it will follow the regular HTML structure:

Notice that the CSS file is added inside the header, while the JS file is added inside the body (normally in the end).
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="CSS_PATH_HERE">
  </head>

  <body>
    [...]
    <script src="JS_PATH_HERE"></script>
  </body>

</html>
```

1. Import the CSS and the JS files into your HTML files, using the [jsdelivr](https://www.jsdelivr.com/) link:
- CSS: `https://cdn.jsdelivr.net/npm/mischiefer@0.1.1/css/mischiefer.min.css`
- JS: `https://cdn.jsdelivr.net/npm/mischiefer@0.1.1/js/mischiefer.min.js`

2. Install the Mischiefer Package through npm:
- `npm i mischiefer`
- Import the files into your HTML files:
- CSS: `node_modules/mischiefer/css/mischiefer.min.css`
- JS: `node_modules/mischiefer/js/mischiefer.min.js`

3. Download the mischiefer files from github and import them manually to your project:
- Import the files into your HTML files, passing down the directory where you added the CSS and JS files.

4. Use import commands on your main CSS file: 
- `@import 'https://cdn.jsdelivr.net/npm/mischiefer@0.1.1/css/mischiefer.min.css';`
**Important: right now the JS file cannot be imported in the same way as the CSS file. This will be changed in a near future.**
