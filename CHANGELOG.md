# d3Kit-gridmap

### v1.0.3

In `.resizeToFitMap()`, return skeleton when no data is present instead of return nothing to allow chaining.

### v1.0.2

Update dependency

### v1.0.1

Update documentation

### v1.0.0

Instead of exporting `d3Kit` and using the constructor via `d3Kit.Gridmap`, this library now return the chart constructor itself.

#### Breaking changes

If you import via the `<script>` tag

```diff
- new d3Kit.Gridmap()
+ new d3KitGridmap()
```

If you import via AMD

```diff
- define(['d3kit-gridmap'], function(d3Kit)){ ... }
+ define(['d3kit-gridmap'], function(d3KitGridmap)){ ... }
```

If you import via CommonJS style

```diff
- var d3Kit = require('d3kit-gridmap');
+ var d3KitGridmap = require('d3kit-gridmap');
```

### v0.0.2

- update description