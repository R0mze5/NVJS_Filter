# API

## Initialize NVJS_Filter

``` js
new NVJS_Filter(parameters);
```

- `parameters` - object with NVJS_Filter parameters. Required.

## NVJS_Filter Parameters

**example:**
``` js
new NVJS_Filter({
      filterButtons: '.filter__button',
      filterBlocks: '.filter__block',
})
``` 

> **`container`** \
> string (with CSS Selector) of NVJS_Filter container HTML element. \
> **type**  `String with CSS Selector`\
> **default**  `body`

> **`filterButtons`** \
> Used for `show filtered content` of block on click this elements. \
> **type**  `String with CSS Selector`\

> **`buttonActiveClass`** \
> CSS class name added to header (buttons) elements when it becomes active \
> **type**  `String`\
> **default**  `active`

> **`filterBlocks`** \
> String with filter shown block CSS Selector \
> **type**  `String with CSS Selector`\

> **`blockActiveClass`** \
> CSS class name added to block elements when it becomes opened \
> **type**  `String`\
> **default**  `shown`

## NVJS_Filter Methods & Properties

**example:**

``` js
    let myFilter = new NVJS_Filter();
    myFilter.clearFilter();
```

> **`.clearFilter();`** \
> reset filter
