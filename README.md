# Mischiefer
> A free, lightweight, and open-source CSS Framework with inbuilt light and dark themes. Let's cause some mischiefs!

## Installation
Mischiefer can be imported into your project in different ways, but in most cases, it will follow the regular HTML structure:

Notice that the CSS file is added inside the header, while the JS file is added inside the body (normally in the end).
```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="CSS_PATH_HERE">
  </head>

  <body>
    <!-- Your content here -->
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

# Usage

## Switch between light and dark themes

Now that you have succesfully imported Mischiefer to your project, it's time to start the mess!

Firstly, this is how you create a Button to **switch** between light and dark theme:

```html
<button class="switch">Cause Mischief!</button>
```

Yes, that's it! By simply adding the class `switch` to any HTML element! But we do recommend you to stick to buttons, you naughty one!

Now, let's customize this button:

```html
<button class="switch button-solid-purple rounded-2">Cause Mischief!</button>
```

- `button-solid-purple`: adds the button layout to an element, on the purple color. Other colors available are: reverse, blue, green, yellow, salmon and red.
- `rounded-2`: adds a `border-radius` of (2 * 4px) to the given element.


## Containers
> We consider anything that *'holds'* content a container. Don't worry, this is just how we divide the documentation and has no direct impact on your project.
> If you have a suggestion regarding this approach, please feel free to create an issue or a fork and help us improve Mischiefer!

### Container

Now that you've got the idea about how this frame-**works** (haha! got it?), let's move on.

What if you wanted to centralize the information for better visualization? That's where the `container` comes in:

```html
<div class="container">
  <!-- Your content here -->
</div>
```

Containers have a width of 70% for desktop screens, and 100% for smaller devices. But don't worry about it, for you it's just about adding the tag. Let we handle it for you :sunglasses:

What if you wanted to change the whole background color, but still use the `container` property?

```html
<div class="bg-color-red">
  <div class="container">
    <!-- Your content here -->
  </div>
</div>
```

**Nesting** the tags/divs will allow you to do so. Honestly we're not sure if there's a workaround for this but this is good, right...? At least not so bad.

### Flex-Container

A `flex-container` is basically the parent of any `flex-item` that you want to add automatically.

By default, the `flex-container` and it's `flex-item` won't have any `shrink` or `grow` property. So, in order to change their display, you can read about **Columns** further down below.

```html
<div class="flex-container">
  <div class="flex-item col-6">
    <!-- Your first content, on the left -->
  </div>
  <div class="flex-item col-6">
    <!-- Your second content, on the right -->
  </div>
  <!-- And so on... -->
</div>
```

### Navbar & Navbar-Container

You may want to have a `navbar` in your project, right? I mean, if it's free, why not...?

There's an ideal way to use the navbar, and that is by having a combination of a parent `navbar` and a child `navbar-container`. Both of them are flex-containers, by the way.

The `navbar` holds the information about the height of the navbar, the width, and is the element that you'll customize if you ever want to change the color, the border, or the box-shadow of the navbar. The `navbar` have 3 different sizes:
- `navbar`: height of 70px
- `navbar-1`: height of 50px
- `navbar-2`: height of 90px
- `navbar-3`: height of 110px


The `navbar-container` holds the information to make it's children properly work, so you can have an `ul` tag with properly displayed `li`s, and a navbar brand or whatever you want. The `navbar-container` have 2 different sizes:
- `navbar-container`: simulates the `container` width
- `navbar-container-full`: has a width of 100%

So this is what a simple `navbar` would look like!

```html
<nav class="navbar box-shadow">
  <div class="navbar-container">
    <a href="#">Your awesome brand</a>
    <ul>
      <li><a href="#">Products</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#" class="button-solid-blue">Sign in</a></li>
    </ul>
  </div>
</nav>
```

### Columns (Width manipulation)

If you have ever used a CSS Framework, chances are you're already familiar with the `col-*` concept.

But if you're not, fear no thing, little one! We've got your back!

In traditional UI/UX design, we tend to subdivide every layout in **X** parts, according to the viewports. **X** being:
- 4 for mobile
- 8 for tablet
- 12 for desktop

Of course that this is a subjective concept, that depends on the content that the `div` is holding. And since 12 is the highest number and is a multiple of 4 and 8, columns can be divided up to 12.

**That's why columns width can range from 1 to 12, even for smaller devices.**

So, if you wanted a div that takes only half of the page, you could do the following:

```html
<div class="col-6">
  <!-- Do your magic here, my little sunshine -->
</div>
```

Mischiefer uses the 'mobile-first' approach, which means that the default value (`col-*`) would affect from mobile devices to desktop devices.

But what if you wanted to occupy only half of the DESKTOP page, but all of the mobile page?

```html
<div class="col-12 col-lg-6">
  <!-- Works like magic, doesn't it? -->
</div>
```

And we could go even further, and allow different widths for EVERY viewport:

```html
<div class="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-3">
  <!-- Wow, are you sure that this is no rocket science? -->
</div>
```

Would this look good on the webpage? That's not our problem!

### Card

What if you want a really pretty `card`? Do you have to write it from scratch? NO! Again, we've got you, hot bum! :sunglasses:

Cards are really valuable because they can be used as cards, as sections, as containers, and as whatever you neet them to be.

If you want to really use a `card` as only a `card`, this is the best approach to do so:

```html
<div class="flex-container">
  <div class="flex-item col-6 mx-auto">
    <div class="card">
      <!-- Do your magic here, my little sunshine -->
    </div>
  </div>
</div>
```

This way you allow your cards to be evenly-spaced without writing any line of CSS! Pretty cool right?

If you notice, all of the sizing/spacing properties are on the `flex-item`, that contains the `card`. But if you wanted the `card` to have a border, a padding inside the card, or a box-shadow, you could apply these directly into the `card` div (we'll show you in a second).

**Cards** also have it's own items: `card-title` and `card-content`, that adds padding automatically to the card and even creates a line separation!

Here, try it out:

```html
<div class="flex-container">
  <div class="flex-item col-6 mx-auto">
    <div class="card box-shadow rounded-2">
      <div class="card-title">
        <h2>Most awesome Title ever</h2>
        <p class="text-subtitle">For the most awesome web dev ever</p>
      </div>
      <div class="card-content">
        <p>And, of course, the most awesome content ever!</p>
      </div>
    </div>
  </div>
</div>
```

Keep in mind that both `card-title` and `card-content` **are optional and holds no semantic value**.

## Text Properties
> Under construction

## Colors
> Under construction

## Viewports/Breakpoints
> Here are the current available viewports and their breakpoints

| Viewport            |  Breakpoint             |
| ------------------- | -------------------     |
|  Default            |  min-width: **0px**     |
|  Small (sm)         |  min-width: **600px**   |
|  Medium (md)        |  min-width: **900px**   |
|  Large (lg)         |  min-width: **1200px**  |
|  Extra Large (xl)   |  min-width: **1800px**  |


## Authors

👤 **Fernando R P Marques**

- GitHub: [@fernandorpm](https://github.com/fernandorpm)
- Twitter: [@rpm_fernando](https://twitter.com/rpm_fernando)
- LinkedIn: [Fernando R P Marques](https://linkedin.com/in/fernandorpm)

👤 **Arthur Borges**

- GitHub: [@arthurborgesdev](https://github.com/arthurborgesdev)
- Twitter: [@arthurmoises](https://twitter.com/arthurmoises)
- LinkedIn: [Arthur Borges](https://www.linkedin.com/in/arthurmoises/)

## 📝 License

This project is [MIT](./LICENSE) licensed.
