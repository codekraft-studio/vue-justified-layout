# Usage

The component is simple to use, it needs a list of elements to work and a little bit of additional style.
The list can be a series of numbers which represent the aspect ratio of the boxes or a list of objects with mandatory __width__ and __height__ properties.

## Basic use

The first example show the very basic use, with an array of aspect ratios.

```html
<VueJustifiedLayout :items="[0.3, 0.6, 0.4, 0.6]" />
```

<<< @/docs/.vuepress/styles/index.styl

<VueJustifiedLayout :items="[0.3, 0.6, 0.4, 0.6]" />

## Custom template

You can customize the content of the rendered boxes. For example if you want to display a list of images and have some custom logic in it.

In this case the component provide a named slot called __inner__ to add custom templates to the boxes and expose the current item as __slot scope__.

```html
<vue-justified-layout :items="images">
  <template v-slot:content="{item, index}">
    <img :src="item.url" />
  </template>
</vue-justified-layout>
```

Than create a list of images with __mandatory sizes__ and any additional property such as __url__ as in the example, you will be able to access it inside the slot scope.

::: warning
Remember that __width__ and __height__ properties are mandatory when using an array of objects
:::

```js
export default {
  data () {
    return {
      images: [{
        width: 250,
        height: 400,
        url: 'https://source.unsplash.com/featured/250x400?green,blue'
      }, {
        width: 600,
        height: 400,
        url: 'https://source.unsplash.com/featured/600x400?green,blue'
      }]
    }
  }
}
```

<Demo></Demo>
