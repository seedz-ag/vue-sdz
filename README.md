# sdz-components

Basic third-party library component to demonstrate [@nuxt/components](https://github.com/nuxt/components) Nuxt module.

## Usage

### Include Sdz Components into your Nuxt project

Using npm:

```
npm i sdz-components
```

Using yarn:

```
yarn add sdz-components
```

### With Nuxt.js

See [examples/with-nuxt](./examples/with-nuxt)

sdz-components is using [@nuxt/components](https://github.com/nuxt/components) to efficently lazy import components by usage.

**Important:** Ensure using nuxt >= 2.13.0 and `components` option is set from `nuxt.config`

```js
export default {
  components: true,
  buildModules: [
    "vue-sdz/nuxt",
  ],
}
```