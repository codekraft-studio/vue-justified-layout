# vue-justified-layout

> A component to use Flickr justified layout with Vue.

## How it looks?
You can see the project in action on the [demo](https://codekraft-studio.github.io/vue-justified-layout/) page.

## Getting started
Download the component with npm or yarn:
```
npm install vue-justified-layout
yarn add vue-justified-layout
```
Load the script and register the component.
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
  <template slot="inner" slot-scope="item">
    <img :src="item.url" />
  </template>
</vue-justified-layout>
```

## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## License
This project is released under the MIT License by [codekraft-studio](https://codekraft.it/).
