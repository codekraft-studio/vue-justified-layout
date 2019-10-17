# Installation

Download the component with your favorite package manager.

```
npm install vue-justified-layout
```

## Local registration

Register it locally in the components where you want to use it.

```js
import VueJustifiedLayout from 'vue-justified-layout'

export default {
  name: 'MyComponent',
  components: {VueJustifiedLayout}
}
```

## Global registration

Import the component in your application main file and register it globally, to use it anywhere.

```js
import Vue from 'vue'
import VueJustifiedLayout from 'vue-justified-layout'

Vue.component('VueJustifiedLayout', VueJustifiedLayout)
```
