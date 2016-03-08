[Introduction](https://github.com/kristw/d3kit-timeline) |
[Demo](http://kristw.github.io/d3kit-timeline) |
**API Reference**

## d3KitGridmap

<a name="constructor" href="#constructor">#</a> var chart = new **d3KitGridmap**([options:Object]);

There are many options that you can customize. These are often set when creating the chart but also can be changed later via ```chart.options(options)```

| option  | default | description |
| ------- | ------- | ----------- |
| margin  | {left: 40, right: 20, top: 20, bottom: 20} | margin for the chart area (more like a padding) |
| initialWidth | 500 | chart width including margin |
| initialHeight | 340 | chart height including margin |
| keyFn | undefined | identifier function for each tile. ```function(d,i){return ...;}```|
| row | return ```d.row```; | accessor function for row index of each tile. ```function(d,i){return ...;}```|
| col | return ```d.col```; | accessor function for row index of each tile. ```function(d,i){return ...;}```|
| text | return ```d.key```; | accessor function for label of each tile. ```function(d,i){return ...;}```|
| textColor | #222 | color of the label text. It can be a color value or Function ```function(d,i){return ...;}``` |
| stroke | #222 | Tile border color. It can be a color value or Function ```function(d,i){return ...;}``` |
| fill | #ccc | Tile background color. It can be a color value or Function ```function(d,i){return ...;}``` |
| opacity | 1 | Tile opacity. It can be a Number or Function ```function(d,i){return ...;}``` |
| textAnchor | 'middle' | Label text position. It can be a String or Function ```function(d,i){return ...;}``` |
| textAnchor | 'middle' | Label text position. It can be a String or Function ```function(d,i){return ...;}``` |
| textSize | 12px | Label text size. It can be a Number or Function ```function(d,i){return ...;}``` |
| tileWidth | 40 | Tile width. It can be a Number or Function ```function(d,i){return ...;}``` |
| tileHeight | 40 | Tile height. It can be a Number or Function ```function(d,i){return ...;}``` |
| textYOffset | 0.35em | vertical offset for text |
| transitionDuration | 250 | duration of the transition |

### Functions

<a name="data" href="#data">#</a> chart.**data**([data:Array])

Get/Set data for this chart, inherited from [skeleton.data()](https://github.com/twitter/d3kit/wiki/Skeleton#data) in d3Kit.

<a name="options" href="#options">#</a> chart.**options**([options:Object])

Get/Set options for this chart, inherited from [skeleton.options()](https://github.com/twitter/d3kit/wiki/Skeleton#options) in d3Kit. See the list of options from the top of this page.

<a name="resizeToFitMap" href="#resizeToFitMap">#</a> chart.**resizeToFitMap**()

Set the dimension of this chart so that it fits the map nicely. (width = margin.left + margin.right + numCols * tileWidth, height = margin.top + margin.bottom + numRows * tileHeight)

<a name="on" href="#on">#</a> chart.**on**(eventName:String, handler:Function)

These events are included with d3Kit-gridmap. The handler function signature is ```function(d,i){...}``` where ```d``` is the data associated with label and ```i``` is index of the data point.

| name | description |
| ---- | ----------- |
| 'tileClick' | Click on a tile |
| 'tileMouseover' | Move cursor into a tile |
| 'tileMousemove' | Move cursor within a tile |
| 'tileMouseout' | Move cursor out of a tile |
