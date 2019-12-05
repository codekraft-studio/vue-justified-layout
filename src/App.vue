<template>
  <div id="app">
    <header class="navbar navbar-light bg-light">
      <div class="container">
        <a
          class="navbar-brand d-flex align-items-center"
          href="https://github.com/codekraft-studio"
          target="_blank"
        >
          <img src="https://vuejs.org/images/logo.png" width="42" height="42" class="mr-2" />
          <h1 class="m-0">Vue Justified Layout</h1>
        </a>
      </div>
    </header>

    <main class="container">
      <div class="section">
        <h2>What it is?</h2>
        <p class="lead">
          It's the simplest way to integrate
          <a href="#">Flickr</a> justified-layout inside your VueJs applications or websites.
          It's easy for developers to use, it fits in any kind of container, supports pagination and infinite scroll and supports layouts other than justified, like square thumbnails and grid layout with native aspect ratio.
          If you want more informations about how the justified-layout algorithm works you can read
          <a
            href="http://code.flickr.net/2015/03/24/much-photos/"
          >this</a> article from the script creator.
        </p>

        <vue-justified-layout :items="fixedImages">
          <template slot-scope="{ item }">
            <img :src="item.url" />
          </template>
        </vue-justified-layout>
      </div>

      <div class="section">
        <h2>How it works?</h2>
        <p class="lead">
          It’s really easy to use. No configuration is required. Just pass in an array of aspect ratios representing the photos/boxes you’d like to lay out or an array of objects.
          It will automagically listen for items change and reload the
          <b>justified-layout geometry</b> that produces this awesome grid.
        </p>
        <vue-justified-layout
          :items="images"
          test.sync="prova"
          :options.sync="boxesOptions"
          class="random"
        >
          <template slot-scope="{ item, index }">
            <img :src="item.url" @click="removeItem(index)" />
          </template>
        </vue-justified-layout>
      </div>
    </main>

    <footer class="footer fixed-bottom bg-light">
      <div class="container text-center">
        Made with &hearts; by
        <a href="https://github.com/codekraft-studio">codekraft-studio</a>
      </div>
    </footer>
  </div>
</template>

<script>
import VueJustifiedLayout from './components/JustifiedLayout'

export default {
  name: 'app',
  data () {
    return {
      showSection: false,
      boxesOptions: {
        targetRowHeight: 120
      },
      fixedImages: [{
        width: 250,
        height: 400,
        url: 'https://source.unsplash.com/featured/250x400?green,blue'
      }, {
        width: 300,
        height: 400,
        url: 'https://source.unsplash.com/featured/300x400?green,blue'
      }, {
        width: 270,
        height: 400,
        url: 'https://source.unsplash.com/featured/270x400?green,blue'
      }, {
        width: 320,
        height: 400,
        url: 'https://source.unsplash.com/featured/320x400?green,blue'
      }],
      images: []
    }
  },
  methods: {
    addItem () {
      let rateo = (Math.random() * (2 - 0.5) + 0.5).toFixed(2);
      let width = Math.round(Math.random() * (1024 - 340) + 340);
      let height = Math.round(rateo * width);
      this.images.push({
        width: width,
        height: height
      })
    },
    removeItem (index) {
      this.images.splice(index, 1)
    },
    randomizeItems (number) {
      number = isNaN(number) ? 12 : number
      this.images = []
      for (var i = 0; i < number; i++) {
        this.addItem()
      }
    }
  },
  mounted: function() {
    let self = this
    setInterval(function () {
      self.randomizeItems()
    }, 3000);
    this.randomizeItems()
  },
  components: {VueJustifiedLayout}
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  a {
    color: #388e3c;
    &:hover {
      color: #2e7d32;
    }
  }

  .navbar {
    border-bottom: 2px solid #8b8b8b;
    margin-bottom: 50px;
  }

  main.container {
    margin-bottom: 100px;
    .section {
      margin-bottom: 20px;
    }
  }

  .justified-container {
    width: 100%;
    height: 100%;
    border: thin solid #eee;

    &.random .justified-item:nth-child(even) {
      background-color: #81c784;
    }

    &.random .justified-item:nth-child(odd) {
      background: #26a69a;
    }

    .justified-item {
      cursor: pointer;

      img {
        max-width: 100%;
      }

      &:nth-child(even) {
        background-color: #ef5350;
      }

      &:nth-child(odd) {
        background: #26a69a;
      }
    }
  }

  .footer {
    height: 60px;
    line-height: 60px;
    right: 0;
    margin-top: 50px;
  }
}
</style>
