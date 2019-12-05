<template lang="html">
  <div class="justified-container" :style="style">
    <div class="justified-item" v-for="(box, index) in layout" :key="index" :style="box.style">
      <slot :item="box.item" :style="box.style" :index="index"></slot>
    </div>
  </div>
</template>

<script>
import justifiedLayout from 'justified-layout'

export default {
  name: 'VueJustifiedLayout',
  props: {
    items: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data () {
    return {
      elementWidth: null
    }
  },
  computed: {
    geometry () {
      if (!this.items) return
      const opts = {
        containerWidth: this.elementWidth,
        ...this.options
      }
      return justifiedLayout(this.items, opts)
    },
    layout () {
      if (!this.geometry) return []
      return this.geometry.boxes.map((b, i) => ({
        item: isNaN(this.items[i]) ? this.items[i] : {},
        style: {
          height: `${b.height}px`,
          width: `${b.width}px`,
          top: `${b.top}px`,
          left: `${b.left}px`,
          position: 'absolute'
        }
      }))
    },
    style () {
      if (!this.geometry) return {}
      return {
        position: 'relative',
        height: `${this.geometry.containerHeight}px`
      }
    }
  },
  methods: {
    onResize () {
      this.elementWidth = this.$el.clientWidth
    }
  },
  mounted () {
    this.elementWidth = this.options.containerWidth || this.$el.clientWidth
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
