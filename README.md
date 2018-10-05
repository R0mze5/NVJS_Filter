NVJS_Filter
==========

NVJS_Filter - is the free and responsive script, which allow filter content

- **No dependencies**
- All modern browsers are supported
- Fully **responsive**

NVJS_Filter is not compatible with all platforms, because it used ES6. it is a modern menu which is focused only on modern apps/platforms to bring the best experience and simplicity.

**[Example on Codepen](https://codepen.io/r0mzes/pen/MPeVWm)**

# Supported Browsers

- Edge
- Chrome
- Safari
- Mobile Safari
- Android Default Browser

# API

API description is available on [API documentation](documentation/api.md).

# Get Started

## Include NVJS_Filter Files To Website/App

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
</head>
<body>
    ...
    <script src="path/to/NVJS_Filter.js"></script>
</body>
</html>
```

## Add NVJS_Filter HTML Layout

```html 
    <li class="filter__button" data-filter="all">show all</li>
    <li class="filter__button" data-filter="filter_1">use filter_1</li>
    <li class="filter__button" data-filter="filter_2">use filter_2</li>
    <li class="filter__button" data-filter="filter_3">use filter_3</li>

    <div class="filter__container" data-tags="">without filter</div>
    <div class="filter__container" data-tags="filter_1">just filter 1</div>
    <div class="filter__container" data-tags="filter_2">just filter 2</div>
    <div class="filter__container" data-tags="filter_3">just filter 3</div>
    <div class="filter__container" data-tags="filter_1 filter_2">filter 1 and filter 2</div>
    <div class="filter__container" data-tags="filter_1 filter_3">filter 1 and filter 3</div>
    <div class="filter__container" data-tags="filter_2 filter_3">filter 2 and filter 3</div>
    <div class="filter__container" data-tags="filter_1 filter_2 filter_3">filter 1, filter_2 and filter 3</div>
```

## Initialize NVJS_Filter

```js
    new NVJSFilter({
      filterButtons: '.filter__button',
      filterButtonActiveClass: 'dark_btn',
      filterBlocks: '.filter__container',
      filterBlockActiveClass: 'hidden',
      autoSetFirstFilter: 'false'
    });
```

# Changelog

Changelog is available on [Changelog documentation](documentation/changelog.md).

# License

 NVJS_Filter is licensed [WTFPL](http://www.wtfpl.net/about/). You can use it **for free** and **without any attribution**, in any personal or commercial project. You may also fork the project and re-release it under another license you prefer.