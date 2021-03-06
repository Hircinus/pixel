# Installation

To use Pixel in your project, simply download the [CSS](https://raw.githubusercontent.com/Hircinus/pixel/master/src/pixel.min.css) and [JS](https://raw.githubusercontent.com/Hircinus/pixel/master/src/pixel.min.js) files needed and link them into your page:

```html
<head>
  <link rel="stylesheet" type="text/css" href="path/to/pixel.min.css">
  <!-- The following stylesheet is to enable dark mode support but only download the necessary CSS if the client has it enabled and supports it -->
  <link rel="stylesheet" type="text/css" media="(prefers-color-scheme: dark)" href="path/to/pixel.dark.min.css">
  ...
</head>
<body>
  ...
  <script src="path/to/pixel.min.js"></script>
</body>
```

Alternatively, you can directly link the files:

```html
<head>
  <link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/Hircinus/pixel/master/src/pixel.min.css">
  <!-- The following stylesheet is to enable dark mode support but only download the necessary CSS if the client has it enabled and supports it -->
  <link rel="stylesheet" type="text/css" media="(prefers-color-scheme: dark)" href="https://raw.githubusercontent.com/Hircinus/pixel/master/src/pixel.dark.min.css">
  ...
</head>
<body>
  ...
  <script src="https://raw.githubusercontent.com/Hircinus/pixel/master/src/pixel.min.js"></script>
</body>
```

Additionally, know that there exists also a "basic" version that includes only Pixel's grid and color system, in case you just want a good architecture for your project without all the bells and whistles:

```html
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/Hircinus/pixel/master/src/pixel.basic.css">
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/Hircinus/pixel/master/src/pixel.basic.min.css">
```

**Note:** Check the [performance page](https://github.com/Hircinus/pixel/blob/master/docs/Performance.md) for an updated result on the latest perfomance check. Generally speaking though, downloading and locally hosting is always a faster option.
