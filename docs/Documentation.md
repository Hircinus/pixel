# Documentation

This document will guide you as to how to use the Pixel framework in your website.
The classes and functions described here are all of the *current* ones that are considered stable.

## CSS

### Grid

Pixel's grid is mobile-first and can be easily applied using a series of classes, as shown in the example below:
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
| col-sm-*   | \[0, 700\[               |
| col-md-*   | \[700, 1200\[            |
| col-lg-*   | \[1200, ∞\[              |

\* = \[1, 12]

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

Pixel's navbar is fully equipped right from the start with useful features. 
Below is an example of a navbar with Pixel:

```html
<nav class="nav medium">
  <div class="nav-content">
    <a href="index.html" class="link"><img src="src/assets/pixel-logo.svg"></a>
    <a href="index.html" class="link">Home</a>
    <a href="#" class="link disabled">About</a>
  </div>
</nav>
```

If you want to add a "sticky" effect to your navbar and have a toggleable dropdown menu, you'll need ``pixel.min.js`` or ``pixel.js`` to use those features.
Below is an example of a navbar with pixel.js:
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
 - In-menu hoverable drodpowns:
 
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

 - Menu burger for dropdown that changes based on state.
 
### Buttons

With a wide array of available colors, you can convey any message to your site visitors with stylized buttons:

```html
<button class="blue text-white medium">Info</button>
<button class="orange text-white medium">Warning</button>
<button class="yellow medium">Important</button>
<button class="green text-white medium">Success</button>
<button class="red text-white medium">Alert</button>
<button class="dark text-white medium">Other</button>
```
**Note: these classes can also be used on other elements, see Misc > Colors.**

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
 - ``large``.
 
*If small or large is not used the default is medium.*

#### Colors:

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
 - ``light-grey``;
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
 - ``text-light-grey``;
 - ``text-grey``;
 - ``text-black``.


~~**Horizontal rule**~~

*Discontinued in Pixel 0.2*
 
#### Border-radius

 - ``round-sm``;
 - ``round-md``;
 - ``round-lg``.
 
#### Code tags

 - ``<code>...</code>``;
 - ``<inline>...</inline>``.
 
~~**Footer**~~
 
*Footer styles discontinued in Pixel 0.3. Just use grid for footers.*

#### Other

 - ``absBtm`` (positions absolutely at bottom of page);
 - ``absTop`` (positions absolutely at top of page).
 
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

### Global variables

The following global variables are pre-set by Pixel and should be avoided:

 - ``navContent``;
 - ``menuButton``;
 - ``navbar``;
 - ``ogImg``;
 - ``hiddenNav``.

## Customization

**Pixel's stylesheet doesn't use ID's and is generally not specific.** This means that it's easy to add your own stylesheet right after Pixel's to override any styles you don't want:

```html
<head>
  <link rel="stylesheet" type="text/css" href="path/to/pixel.min.css">
  <link rel="stylesheet" type="text/css" href="path/to/style.css"> <!-- Your stylesheet here -->
</head>
```

Additionally, you can easily change the look and feel of your site by simply changing the ``:root`` variables (make sure this styling overrides Pixel):

```css
/* Just change the values to what you wish */
/* --p-<color>-hover indicates a darker shade of the color, normally used for contrast for :hover effects */
:root {
font-size: 16px;
--p-blue:#2a7bde;
--p-blue-hover:#1957a2;
--p-red:#c4181d;
--p-red-hover:#801013;
--p-green:#4BB543;
--p-green-hover:#347d2e;
--p-purple:#7851a9;
--p-purple-hover:#533875;
--p-yellow:#ffd500;
--p-yellow-hover:#b39500;
--p-orange:#ff7b00;
--p-orange-hover:#b35600;
--p-pink:#ff748c;
--p-pink-hover:#ff284d;
--p-dark:#333;
--p-dark-hover:#595959;
--p-white: #fff;
--p-white-hover: #d3d3d3;
--p-grey: #808080;
--p-grey-hover: #000;
--p-black: #000;
--p-black-hover: #808080;
--p-light-grey: #d3d3d3;
--p-light-grey-hover: #808080;

--p-anchor-indent: 100px;
--p-font-landing-title: Nunito, sans-serif;
--p-font-body: Arial,sans-serif;
--p-font-code: "Ubuntu Mono",Consolas,"Courier New",monospace;

--p-h1-size: 4.5rem;
--p-h2-size: 3.5rem;
--p-h3-size: 2rem;
--p-h4-size: 1rem;
--p-h5-size: 1rem;
--p-h6-size: 1rem;
/* Following variables only affect h1-h3 */
--p-pad: 0.5rem;
--p-margin: 0.5rem;
}
```

## Notices

### Fonts

Certain components come shipped in Pixel with different fonts than what most browsers ship with (Ubuntu mono and Nunito, for instance). Please note that Pixel only has the latin and latin-ext character configuration of these fonts and therefore may require you to install the fonts seperately in full or use fallback fonts if using text that does not fall within those ranges of characters.

### Subject to change

This document is meant to reflect the most recently documented features for the Pixel framework. This documentation is subject to change at any given moment. Certain classes, features, scripts, etc. may be discontinued without your warning. Be sure to consult this page often.

As of right now (June 12, 2020), this is the end of this page. Stay tuned!
