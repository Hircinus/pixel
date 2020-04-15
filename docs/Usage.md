# Usage

This document will guide you as to how to use the Pixel framework in your website.
The classes and functions described here are all of the *current* ones that are considered stable. For experimental features, [consult the appropriate folder](https://github.com/Hircinus/pixel/tree/master/exp-src).

## CSS

### Grid

Pixel's grid is built using mobile-first flexbox that can be easily applied using a series of classes, as shown in the example below (take note of the very Bootstrap-esque column naming system; very familiar):
```
...
<div class="row justify-center">
  <div class="col-lg-6 col-md-8 col-sm-11">
    <h1 class="pad-md">Welcome!</h1>
    <p class="pad-sm">Some text...</p>
  </div>
  <div class="col-lg-6 col-md-2 col-sm-11">
    <h1 class="pad-md">Another title</h1>
    <p class="pad-sm">Some more text...</p>
  </div>
</div>
...
```
Every row contains 12 spaces, which can be attributed as you wish (note that overflow in a row will be wrapped). Below is a table outlining each class:

| Class name | Viewport (width) in px |
| ---------- | ---------------------- |
| col-sm-*   | [0, 700[               |
| col-md-*   | [700, 1200[            |
| col-lg-*   | [1200, ∞[              |

\* = [1, 12]

Rows can also have classes to handle justification and alignment of its children:

 - ``justify-start``;
 - ``justify-center``;
 - ``justify-end``;
 - ``align-start``;
 - ``align-center``;
 - ``align-end``;
 - ``align-base``;
 - ``total-center`` (equivalent to ``justify-center`` and ``align-center`` combined).
 
### Navbar

Pixel's navbar is fully equipped right from the start with useful features. Remember that you need ``pixel.js`` to use the navbar.
Below is an example of a navbar with Pixel:
```
...
<nav class="nav dark">
  <button class="menuButton button" onclick="dropdown()"><img id="menuButton" data-src="src/menu_close-light.svg" src="src/menu_burger-light.svg"></button>
  <div id="navContent">
    <a href="#" class="link active">Home</a>
    <a href="#" class="link">About</a>
    <a href="#" class="link disabled">Contact</a>
  </div>
</nav>
...
```

Here's an overview of the features:

 - Mobile-first collapsable navbar;
 - Built-in dark and light theme (with class ``dark`` added to ``nav``);
 - Menu burger for dropdown that changes based on state.

### Misc

There are also currently many miscellaneous classes for you to use, which include:

**Padding:**

 - ``pad-sm``;
 - ``pad-md``;
 - ``pad-lg``.
 
**Text:**

 - ``disabled``;
 - ``active`` (only for navlinks);
 - ``center``;
 - ``small``;
 - ``medium``;
 - ``large``.
 
## JS

### Navbar

You can easily remove the option to switch between two different button images for the mobile dropdown menu by adding a snippet of JS before you link ``pixel.js``:
```
...
<head>
  <script>var altMenuBtn = false;</script><!-- Add this variable before calling "pixel.js" -->
  ...
</head>
...
```

As of right now (April 14, 2020), no other functionality has been added to JS. Stay tuned!
