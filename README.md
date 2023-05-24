# WebFont Golos UI

___
Package for integrating `Golos UI` fonts in a web environment.

## Installation

This package can be deployed automatically using npm:

```
$ npm i @wikiline/webfont-golos-ui
 ```

## Usage (CSS)

CSS files are located in the `src/css/` directory:

* `src/css/golos-ui.css` - all files without optimization for production environments;
* `src/css/golos-ui-400.css` - file with no optimization for production environments;
* `src/css/golos-ui-500.css` - file with no optimization for production environments;
* `src/css/golos-ui-700.css` - file with no optimization for production environments;

Font files are located in the `fonts/` directory.

```css
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui.css");

```

or

```css
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui-400.css");
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui-500.css");
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui-700.css");
```

```css
body {
    font-family: 'Golos UI', sans-serif;
}
```
