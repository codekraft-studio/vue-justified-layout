![banner](./banner.png)

# vue-justified-layout

> Vue integration for Flicker's justified layout module

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

Chcek out the [documentation](https://codekraft-studio.github.io/vue-justified-layout/) for a complete reference and usage examples.

## Getting started

It's pretty easy to setup, just download the component with your favorite package manager.

```
npm install vue-justified-layout
```

Register the component globally using the plugin installation function.

```js
import Vue from 'vue'
import VueJustifiedLayout from 'vue-justified-layout'

Vue.use(VueJustifiedLayout)
```

Or import it into your scripts and register it as local component.

```js
import VueJustifiedLayout from 'vue-justified-layout'

export default {
  name: 'app',
  components: {VueJustifiedLayout},
  data () {
    return {
      images: [{
        width: 250,
        height: 400,
        url: 'https://source.unsplash.com/featured/250x400?green,blue'
      }, {
        width: 300,
        height: 400,
        url: 'https://source.unsplash.com/featured/300x400?green,blue'
      }]
    }
  }
}
```

Optionally add some style for the images.

```css
.justified-container {}
.justified-item {
  img {
    max-width: 100%;
  }
}
```

Then use it to display the array of images with a nice justified layout.

```html
<VueJustifiedLayout :items="images" v-slot="{ item }">
  <img :src="item.url" />
</VueJustifiedLayout>
```

Or for `vue < 2.6.0` versions using the old synthax.

```html
<VueJustifiedLayout :items="images">
  <template slot-scope="{ item }">
    <img :src="item.url" />
  </template>
</VueJustifiedLayout>
```

---

## Contributing

1.  Create an issue reporting a bug or a feature
2.  Fork the project (<https://github.com/codekraft-studio/vue-justified-layout/fork>)
3.  Create your feature branch (`git checkout -b my-new-feature`)
4.  Commit your changes (`git commit -am 'Add some feature'`)
5.  Publish the branch (`git push origin my-new-feature`)
6.  Create a new Pull Request

---

## License

This project is released under the MIT License by [codekraft-studio](https://codekraft.it/).

[npm-image]: https://badge.fury.io/js/vue-justified-layout.svg

[npm-url]: https://npmjs.org/package/vue-justified-layout

[daviddm-image]: https://david-dm.org/codekraft-studio/vue-justified-layout.svg?theme=shields.io

[daviddm-url]: https://david-dm.org/codekraft-studio/vue-justified-layout

[travis-image]: https://travis-ci.org/codekraft-studio/vue-justified-layout.svg?branch=master

[travis-url]: https://travis-ci.org/codekraft-studio/vue-justified-layout

[coveralls-image]: https://coveralls.io/repos/codekraft-studio/vue-justified-layout/badge.svg

[coveralls-url]: https://coveralls.io/r/codekraft-studio/vue-justified-layout
