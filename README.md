# WebFont Golos UI

___
Package for integrating `Golos UI` fonts in a web environment.

## Installation

___
This package can be deployed automatically using npm:

```
$ npm i @wikiline/webfont-golos-ui
 ```

## Usage (CSS)

___
CSS files are located in the `src/css/` directory:

* `src/css/golos-ui.css` - all files without optimization for production environments;
* `src/css/golos-ui.min.css` - all files optimized for production environments;
* `src/css/golos-ui-400.css` - file with no optimization for production environments;
* `src/css/golos-ui-400.min.css` - file with optimization for production environments;
* `src/css/golos-ui-500.css` - file with no optimization for production environments;
* `src/css/golos-ui-500.min.css` - file with optimization for production environments;
* `src/css/golos-ui-700.css` - file with no optimization for production environments;
* `src/css/golos-ui-700.min.css` - file with optimization for production environments;

Font files are located in the `fonts/` directory.

```css
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui.css");
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui.min.css");
```

or

```css
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui-400.css");
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui-400.min.css");
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui-500.css");
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui-500.min.css");
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui-700.css");
@import url("~@wikiline/webfont-golos-ui/src/css/golos-ui-700.min.css");
```

and

```css
body {
    font-family: 'Golos UI', sans-serif;
}
```
