<template lang="html">
  <div>
    <vue-justified-layout :items="items">
      <template slot-scope="{item}">
        <img :src="item.url" />
      </template>
    </vue-justified-layout>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data () {
    return {
      items: [{
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
</script>
