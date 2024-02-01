# WebFont Golos UI

Package for integrating `Golos UI` fonts in a web environment.

![npm](https://img.shields.io/npm/v/@wikiline/webfont-golos-ui?style=for-the-badge)
![npm](https://img.shields.io/npm/dm/@wikiline/webfont-golos-ui?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@wikiline/webfont-golos-ui?style=for-the-badge)
___

## Installation

This package can be deployed automatically using NPM:

```
npm i @wikiline/webfont-golos-ui
```

## Usage (CSS)

Font files are located in the `fonts/` directory. To import all fonts, you can use:

```css
body {
  font-family: 'Golos UI', sans-serif;
}
```

### Importing

```css
@import "~@wikiline/webfont-golos-ui/css/all.css";
@import "~@wikiline/webfont-golos-ui/css/all-normal.css";
```

To import specific fonts, you can use:

```css
@import "~@wikiline/webfont-golos-ui/css/weight-400.css";
@import "~@wikiline/webfont-golos-ui/css/weight-400-normal.css";
@import "~@wikiline/webfont-golos-ui/css/weight-500.css";
@import "~@wikiline/webfont-golos-ui/css/weight-500-normal.css";
@import "~@wikiline/webfont-golos-ui/css/weight-700.css";
@import "~@wikiline/webfont-golos-ui/css/weight-700-normal.css";
```

Note: Also, each file is presented in a minimized form.

### Variables

Each font uses the following CSS variables to set the font display property with the default `swap` value if CSS
variables are not defined:

```css
:root {
  --font-display: swap;
  --font-display-golos-ui: swap;
}
```

## Usage (LESS)

Font files are located in the `fonts/` directory. To import all fonts, you can use:

```less
body {
  font-family: 'Golos UI', sans-serif;
}
```

### Importing

```less
@import "~@wikiline/webfont-golos-ui/less/all";
@import "~@wikiline/webfont-golos-ui/less/all-normal";
```

To import specific fonts, you can use:

```less
@import "~@wikiline/webfont-golos-ui/less/_weight-400";
@import "~@wikiline/webfont-golos-ui/less/_weight-400-normal";
@import "~@wikiline/webfont-golos-ui/less/_weight-500";
@import "~@wikiline/webfont-golos-ui/less/_weight-500-normal";
@import "~@wikiline/webfont-golos-ui/less/_weight-700";
@import "~@wikiline/webfont-golos-ui/less/_weight-700-normal";
```

### Variables

Each font uses the following LESS variables to set the font display property with the default `swap` value if SCSS
variables are not defined:

```less
@font-display: swap;
@font-display-golos-ui: swap;
```

or

```less
@import "~@wikiline/webfont-golos-ui/less/config/_variables";
```

## Usage (SCSS)

Font files are located in the `fonts/` directory. To import all fonts, you can use:

```scss
body {
  font-family: 'Golos UI', sans-serif;
}
```

### Importing

```scss
@import "~@wikiline/webfont-golos-ui/scss/all";
@import "~@wikiline/webfont-golos-ui/scss/all-normal";
```

To import specific fonts, you can use:

```scss
@import "~@wikiline/webfont-golos-ui/scss/weight-400";
@import "~@wikiline/webfont-golos-ui/scss/weight-400-normal";
@import "~@wikiline/webfont-golos-ui/scss/weight-500";
@import "~@wikiline/webfont-golos-ui/scss/weight-500-normal";
@import "~@wikiline/webfont-golos-ui/scss/weight-700";
@import "~@wikiline/webfont-golos-ui/scss/weight-700-normal";
```

### Variables

Each font uses the following SCSS variables to set the font display property with the default `swap` value if SCSS
variables are not defined:

```scss
$font-display: swap;
$font-display-golos-ui: swap;
```

## Licensing

It is important to always read the license for every font that you use. Most of the fonts in the collection use the SIL
Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.
