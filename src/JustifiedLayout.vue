<template lang="html">
  <div class="justified-container">
    <div class="justified-item" v-for="(box, index) in boxes" :key="index" :style="box.style">
      <slot name="inner" :item="box" :index="index"></slot>
    </div>
  </div>
</template>

<script>
import justifiedLayout from 'justified-layout'
export default {
  name: 'vue-justified-layout',
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
  computed: {
    geometry () {
      return justifiedLayout(this.items, this.options)
    },
    boxes () {
      return this.geometry.boxes.map((b, i) => {
        let obj = typeof this.items[i] === 'object' ? this.items[i] : {}
        return Object.assign(obj, {
          style: {
            height: `${b.height}px`,
            width: `${b.width}px`,
            top: `${b.top}px`,
            left: `${b.left}px`,
            position: 'absolute'
          }
        })
      })
    }
  },
  methods: {
    handleResize (e) {
      this.$set(this.options, 'containerWidth', this.$el.clientWidth)
      this.$emit('update:options', this.options)
    }
  },
  watch: {
    geometry () {
      this.$el.style.height = `${this.geometry.containerHeight}px`
    }
  },
  mounted () {
    // Ensure element style
    this.$el.style.position = 'relative'
    this.$el.style.height = `${this.geometry.containerHeight}px`

    // Update container width
    this.$set(this.options, 'containerWidth', this.options.containerWidth || this.$el.clientWidth)

    // Add resize event listener
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>
