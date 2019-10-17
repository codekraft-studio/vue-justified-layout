module.exports = {
  title: 'Vue Justified Layout',
  description: 'Vue integration for Flicker\'s justified layout module',
  themeConfig: {
    repo: 'codekraft-studio/vue-justified-layout',
    editLinks: true,
    displayAllHeaders: true,
    nav: [
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [{
        title: 'Getting started',
        collapsable: false,
        children: [
          '',
          'usage',
          'options'
        ]
      }]
    }
  }
}
