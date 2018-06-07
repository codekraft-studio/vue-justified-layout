# vue-justified-layout

> A component to use Flickr justified layout with Vue.

You can see the project in action on the [demo](https://codekraft-studio.github.io/vue-justified-layout/) page.

## Getting started

It's pretty easy to setup, just download the component with your favorite package manager.

```
npm install vue-justified-layout
yarn add vue-justified-layout
```

Import the script into your script and register the component.

```js
import VueJustifiedLayout from 'vue-justified-layout'

export default {
  name: 'app',
  components: {VueJustifiedLayout}
}
```

Than you can use it in your templates.

```html
<vue-justified-layout :items="[1, 0.5, 2, 0.5, 1]"></vue-justified-layout>

<vue-justified-layout :items="imagesList" :options="{}">
  <template slot="inner" slot-scope="slotProps">
    <img :src="slotProps.item.url" />
  </template>
</vue-justified-layout>
```

For all the options you can see the [official page](http://flickr.github.io/justified-layout/), you can use them like in the example below:
```html
<vue-justified-layout :items="[1, 0.5, 2, 0.5, 1]" :options="{
  targetRowHeight: 250
}"></vue-justified-layout>
```

---

## Development

Clone the project than install it's dependencies and run the development server.

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

# Contributing

1. Create an issue reporting a bug or a feature
2. Fork the project (https://github.com/codekraft-studio/vue-justified-layout/fork)
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Publish the branch (`git push origin my-new-feature`)
6. Create a new Pull Request

---

## License
This project is released under the MIT License by [codekraft-studio](https://codekraft.it/).
