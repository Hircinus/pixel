# Usage

This document will guide you as to how to use the Pixel framework in your website.
The classes and functions described here are all of the *current* ones that are considered stable.

## CSS

### Grid

Pixel's grid is built using mobile-first flexbox that can be easily applied using a series of classes, as shown in the example below (take note of the very Bootstrap-esque column naming system; very familiar):
```html
<div class="container">
  <div class="row justify-center">
    <div class="col-lg-6 col-md-8 col-sm-11">
      <h1>Welcome!</h1>
      <p>Some text...</p>
    </div>
    <div class="col-lg-6 col-md-2 col-sm-11">
      <h1>Another title</h1>
      <p>Some more text...</p>
    </div>
  </div>
</div>
```
Every row contains 12 spaces, which can be attributed as you wish (note that overflow in a row will be wrapped). Below is a table outlining each class:

| Class name | Viewport (width) in px |
| ---------- | ---------------------- |
| col-sm-*   | [0, 700[               |
| col-md-*   | [700, 1200[            |
| col-lg-*   | [1200, ∞[              |

\* = [1, 12]

Rows can also have classes to handle justification and alignment of its children:

 - ``justify-even`` (equal amount of space *between* and *around* columns);
 - ``justify-around`` (equal amount of space *around* columns);
 - ``justify-between`` (equal amount of space *between* columns);
 - ``justify-start``;
 - ``justify-center``;
 - ``justify-end``;

 - ``align-even`` (equal amount of space *between* and *around* rows);
 - ``align-around`` (equal amount of space *around* rows);
 - ``align-between`` (equal amount of space *between* rows);
 - ``align-start``;
 - ``align-center``;
 - ``align-end``;
 
### Navbar

Pixel's navbar is fully equipped right from the start with useful features. Remember that you need ``pixel.min.js`` to use the navbar.
Below is an example of a navbar with Pixel:
```html
<nav id="navbar" class="nav dark center sticky medium">
  <button class="menuButton" onclick="pixel.navbarExtend()"><img id="menuButton" data-src="src/assets/menu_close-light.svg" src="src/assets/menu_burger-light.svg"></button>
  <div id="navContent" class="nav-content center">
    <a href="index.html" class="link"><img src="src/assets/pixel-logo.svg"></a>
    <a href="index.html" class="link">Home</a>
    <a href="#" class="link disabled">About</a>
  </div>
</nav>
```

Here's an overview of the features:

 - Mobile-first collapsable navbar;
 - Centered / uncentered;
 - In-menu drodpowns:
 
 ```html
 <div class="dropdown">
   <a href="docs.html" class="link active">Docs</a>
   <div id="dropdownMenu" class="dropdown-content">
     <a href="docs.html#Grid" class="link">Grid</a>
     <a href="docs.html#CSS" class="link">CSS</a>
     <a href="docs.html#JS" class="link">JS</a>
   </div>
 </div>
 ```
 
 - Built-in dark and light theme (with class ``dark`` added to ``nav``);
 - Menu burger for dropdown that changes based on state.
 
### Buttons

With a wide array of available colours, you can convey any message to your site visitors with stylized buttons:

```html
<button class="blue text-white medium">Info</button>
<button class="orange text-white medium">Warning</button>
<button class="yellow medium">Important</button>
<button class="green text-white medium">Success</button>
<button class="red text-white medium">Alert</button>
<button class="dark text-white medium">Other</button>
```
**Note: these classes can also be used on other elements, see Misc > Colours.**

### Misc

There are also currently many miscellaneous classes for you to use, which include:

#### Padding:

 - ``pad-sm``;
 - ``pad-md``;
 - ``pad-lg``.
 
#### Text:

 - ``disabled``;
 - ``active`` (only for navlinks);
 - ``center``;
 - ``small``;
 - ``medium``;
 - ``large``.
 
#### Colours:

**Background-color:**

 - ``blue``;
 - ``orange``;
 - ``yellow``;
 - ``green``;
 - ``red``;
 - ``dark``;
 - ``pink``;
 - ``purple``;
 - ``white``;
 - ``grey``;
 - ``black``.
 
**Color:**

 - ``text-blue``;
 - ``text-orange``;
 - ``text-yellow``;
 - ``text-green``;
 - ``text-red``;
 - ``text-dark``;
 - ``text-pink``;
 - ``text-purple``;
 - ``text-white``;
 - ``text-grey``;
 - ``text-black``.


~~**Horizontal rule**~~

*Discontinued in Pixel 0.2*
 
#### Border-radius

 - ``round-sm``;
 - ``round-md``;
 - ``round-lg``.
 
#### Code

 - ``<code>...</code>``;
 - ``<inline>...</inline>``.
 
## JS

### Modal

You can quickly make modals to use in your site to display information for your visitors:
```html
<div id="cover" class="modal-cover"></div>
<div id="modal" class="row total-center modal">
  <div class="col-lg-6 col-md-8 col-sm-10 pad-md round-md">
    <h2>Current version</h2>
    <hr class="thick-sm blue text-blue">
    <p>0.1 (Alpha)<br>
    Status: Stable (Pre-release)<br>
    <a href='https://www.github.com/Hircinus/pixel'>GitHub repo</a></p>
    <button onclick="pixel.modal('modal', 'cover')" class="orange text-white medium">Close</button>
  </div>
</div>
```
*If using multiple modals, the ``#cover`` div does not to be rewritten.*

### Cookie manipulation

With Pixel, using cookies is as simple as a few functions:

```javascript
pixel.addCookie(cname, value);
pixel.editCookie(cname, newValue);
pixel.getCookie(cname, value);
```

As of right now (May 14, 2020), this is the end of this page. Stay tuned!
