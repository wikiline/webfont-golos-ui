# WebFont Golos UI

![npm](https://img.shields.io/npm/v/@wikiline/webfont-golos-ui?style=for-the-badge)
![npm](https://img.shields.io/npm/dm/@wikiline/webfont-golos-ui?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@wikiline/webfont-golos-ui?style=for-the-badge)
___
Package for integrating `Golos UI` fonts in a web environment.

## Installation

This package can be deployed automatically using NPM:

```
npm install @wikiline/webfont-golos-ui
 ```

## Usage (CSS)

CSS files are located in the `root` directory:

* `all-normal.css` - all files without optimization for production environments;
* `all-normal.min.css` - all files optimized for production environments;
* `400-normal.css` - file with no optimization for production environments;
* `400-normal.min.css` - file with optimization for production environments;
* `500-normal.css` - file with no optimization for production environments;
* `500-normal.min.css` - file with optimization for production environments;
* `700-normal.css` - file with no optimization for production environments;
* `700-normal.min.css` - file with optimization for production environments;

Font files are located in the `fonts/` directory.

```css
@import url("~@wikiline/webfont-golos-ui/all-normal.css");
@import url("~@wikiline/webfont-golos-ui/all-normal.min.css");
```

or

```css
@import url("~@wikiline/webfont-golos-ui/400-normal.css");
@import url("~@wikiline/webfont-golos-ui/400-normal.min.css");
@import url("~@wikiline/webfont-golos-ui/500-normal.css");
@import url("~@wikiline/webfont-golos-ui/500-normal.min.css");
@import url("~@wikiline/webfont-golos-ui/700-normal.css");
@import url("~@wikiline/webfont-golos-ui/700-normal.min.css");
```

```css
body {
    font-family: 'Golos UI', sans-serif;
}
```

## Licensing

It is important to always read the license for every font that you use. Most of the fonts in the collection use the SIL
Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.
