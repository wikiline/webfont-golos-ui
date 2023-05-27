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

CSS files are located in the `root` directory:

* `all-normal.css`
* `all-normal.min.css`
* `400-normal.css`
* `400-normal.min.css`
* `500-normal.css`
* `500-normal.min.css`
* `700-normal.css`
* `700-normal.min.css`

Font files are located in the `fonts/` directory.

### Importing

To import all fonts, you can use:

```css
@import "~@wikiline/webfont-golos-ui/all-normal.css";
@import "~@wikiline/webfont-golos-ui/all-normal.min.css";
```

To import specific fonts, you can use:

```css
@import "~@wikiline/webfont-golos-ui/400-normal.css";
@import "~@wikiline/webfont-golos-ui/400-normal.min.css";
@import "~@wikiline/webfont-golos-ui/500-normal.css";
@import "~@wikiline/webfont-golos-ui/500-normal.min.css";
@import "~@wikiline/webfont-golos-ui/700-normal.css";
@import "~@wikiline/webfont-golos-ui/700-normal.min.css";
```

```css
body {
    font-family: 'Golos UI', sans-serif;
}
```

### Variables

Each font uses the following CSS variables to set the font display property with the default `swap` value if CSS
variables are not defined:

* `--font-display` global value applicable to all fonts
* `--font-display-golos-ui` the value applicable to a specific font

```css
:root {
    --font-display: swap;
    --font-display-golos-ui: swap;
}
```

## Usage (SCSS)

SCSS files are located in the `scss` directory:

* `all-normal.scss`
* `400-normal.scss`
* `500-normal.scss`
* `700-normal.scss`

Font files are located in the `fonts/` directory. To import all fonts, you can use:

### Importing

```scss
@import "~@wikiline/webfont-golos-ui/scss/all-normal";
```

To import specific fonts, you can use:

```scss
@import "~@wikiline/webfont-golos-ui/scss/400-normal";
@import "~@wikiline/webfont-golos-ui/scss/500-normal";
@import "~@wikiline/webfont-golos-ui/scss/700-normal";
```

```scss
body {
    font-family: 'Golos UI', sans-serif;
}
```

### Variables

Each font uses the following SCSS variables to set the font display property with the default `swap` value if SCSS
variables are not defined:

* `$font-display` global value applicable to all fonts
* `$font-display-golos-ui` the value applicable to a specific font

```scss
$font-display: swap;
$font-display-golos-ui: swap;
```

## Licensing

It is important to always read the license for every font that you use. Most of the fonts in the collection use the SIL
Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.
