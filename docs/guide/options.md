# Options

This plugin allow you to pass all the options supported by the [original module](http://flickr.github.io/justified-layout/) using the __options__ property.

All the examples shown assumes that you have the following properties in your component:

<<< @/docs/.vuepress/styles/index.styl

In order to populate the justified layout boxes and show them.

## containerWidth

The width that boxes will be contained within irrelevant of padding.

```html
<vue-justified-layout :items="items" :options="{
  containerWidth: 250
}" />
```

<VueJustifiedLayout :items="[0.5, 1.5, 0.7, 2.2]" :options="{ targetRowHeight: 80, containerWidth: 250 }" />

## containerPadding

Provide a single integer to apply padding to all sides or provide an object to apply individual values to each side.

```html
<vue-justified-layout :items="items" :options="{
  containerPadding: 50
}" />

<vue-justified-layout :items="items" :options="{
  containerPadding: {
    top: 50,
    right: 5,
    bottom: 50,
    left: 5
  }
}" />
```

<VueJustifiedLayout :items="[0.5, 1.5, 0.7, 2.2]" :options="{ targetRowHeight: 80, containerPadding: 50 }" />

## boxSpacing

Provide a single integer to apply spacing both horizontally and vertically or provide an object to apply individual values to each axis.

```html
<vue-justified-layout :items="items" :options="{
  boxSpacing: 25
}" />

<vue-justified-layout :items="items" :options="{
  boxSpacing: {
    horizontal: 25,
    vertical: 10
  }
}" />
```

<VueJustifiedLayout :items="[0.5, 1.5, 0.7, 2.2]" :options="{ targetRowHeight: 80, boxSpacing: 25 }" />

## targetRowHeight

It's called a target because row height is the lever we use in order to fit everything in nicely. The algorithm will get as close to the target row height as it can.

```html
<vue-justified-layout :items="items" :options="{
  targetRowHeight: 150
}" />
```

<VueJustifiedLayout :items="[0.5, 1.5, 0.7, 2.2]" :options="{ targetRowHeight: 150 }" />

## forceAspectRatio

Provide an aspect ratio here to return everything in that aspect ratio. Makes the values in your input array irrelevant. The length of the array remains relevant.

```html
<vue-justified-layout :items="items" :options="{
  forceAspectRatio: 1
}" />
```

<VueJustifiedLayout :items="[0.5, 1.5, 0.7, 2.2]" :options="{ targetRowHeight: 80, forceAspectRatio: 1 }" />

## showWidows

By default we'll return items at the end of a justified layout even if they don't make a full row. If false they'll be omitted from the output.

```html
<vue-justified-layout :items="items" :options="{
  showWidows: false
}" />
```

<VueJustifiedLayout :items="[0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7, 2.2]" :options="{ targetRowHeight: 80, showWidows: false }" />

## fullWidthBreakoutRowCadence

If you'd like to insert a full width box every n rows you can specify it with this parameter. The box on that row will ignore the targetRowHeight, make itself as wide as containerWidth - containerPadding and be as tall as its aspect ratio defines. It'll only happen if that item has an aspect ratio >= 1.

```html
<vue-justified-layout :items="items" :options="{
  fullWidthBreakoutRowCadence: 2
}" />
```

<VueJustifiedLayout :items="[0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7, 2.2, 1.5]" :options="{ targetRowHeight: 80, fullWidthBreakoutRowCadence: 2 }" />
