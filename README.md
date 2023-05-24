# WebFont Golos UI

![GitHub release (latest by date)](https://img.shields.io/github/v/release/wikiline/webfont-golos-ui?label=GitHub&style=for-the-badge)
![GitHub all releases](https://img.shields.io/github/downloads/wikiline/webfont-golos-ui/total?style=for-the-badge)
![npm](https://img.shields.io/npm/v/@wikiline/webfont-golos-ui?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@wikiline/webfont-golos-ui?style=for-the-badge)
___
Package for integrating `Golos UI` fonts in a web environment.

* Weights: [400,500,600]
* Styles: [normal]
* Supported subsets: [cyrillic-ext, latin-ext]

## Installation

___
This package can be deployed automatically using NPM:

```
npm install @wikiline/webfont-golos-ui
 ```

or from the GitHub repository:

```
npm install https://github.com/wikiline/webfont-golos-ui
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

## Licensing

It is important to always read the license for every font that you use. Most of the fonts in the collection use the SIL
Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.