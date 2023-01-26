# unocss-preset-mini-variants

Variants from [@unocss/preset-mini](https://github.com/unocss/unocss/tree/main/packages/preset-mini). This preset uses preset-mini and re-exports its vatiants and options. You might find that some options don't do anything anymore. This preset comes with no utilities and is meant to be used in combination with other presets.

I hope this preset can simplify the development of other UnoCSS presets (e.g [Windblade](https://github.com/StarLederer/windblade)) by removing the need to reimplement the same variants every time.

> This preset inherits variatns and options from
> - [@unocss/preset-mini](https://github.com/unocss/unocss/tree/main/packages/preset-mini)

## Installation

```bash
npm i -D unocss-preset-mini-variants
```

```ts
import presetVariants from 'unocss-preset-mini-variants'

UnoCSS({
  presets: [
    presetVariants(),
  ],
})
```

## Differences with @unocss/preset-mini

### No preconfigured breakpoints

This preset does not have a default theme so no breakpopints are preconfigured. If you want to use breakpoints configure your theme like the following:

```js
theme: {
  // ...
  breakpoints: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  }
}
```

Or instead of breakpoints, try using intrinsic sizing (`min-inline-size`, `max-width`, [`minmax`](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax), [`auto-fill`](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) etc.).


## Experimental Features

This preset includes experimental feature that may be changed in breaking ways at any time.

### Media Hover

Media hover addresses the [sticky hover](https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/) problem where tapping target that includes hover style on mobile will persist that hover style until tapping elsewhere.

Since the regular `:hover` style most probably used so widely, the variant uses `@hover` syntax to distinguish it from the regular `hover` pseudo.

Example: `@hover-text-red`

Output:
```css
@media (hover: hover) and (pointer: fine) {
  .\@hover-text-red:hover {
    --un-text-opacity: 1;
    color: rgba(248, 113, 113, var(--un-text-opacity));
  }
}
```

## License

MIT License
