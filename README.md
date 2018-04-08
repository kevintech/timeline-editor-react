# React Timeline Editor

[![npm](https://img.shields.io/npm/v/timeline-editor-react.svg)](https://www.npmjs.com/package/timeline-editor-react)
[![npm](https://img.shields.io/npm/dm/timeline-editor-react.svg)](https://www.npmjs.com/package/timeline-editor-react)
[![npm](https://img.shields.io/npm/l/timeline-editor-react.svg)](https://www.npmjs.com/package/timeline-editor-react)


Timeline Editor is a React component for building a Timeline like that of a video editor.

Features of `timeline-editor-react`
* Drag and Drop frames
* Lightweight ~13kb (gzipped, excluding react)


## Getting started

```
npm install timeline-editor-react
```


### Example
See [`src/example.js`](https://github.com/kevintech/timeline-editor-react/blob/master/src/example.js)
```js
import React from "react";
import ReactDOM from "react-dom";
import Timeline from "./index";

var layers = [
    {
        id: "3d1df1b4-4d9d-45a4-bf14-cb580ee74675",
        name: "Left"
    },
    {
        id: "7d8c4210-0cfa-4a10-8b21-01e6601e00bf",
        name: "Top"
    },
    {
        id: "65079f30-47a8-4469-833e-4f0eea04d233",
        name: "Bottom"
    }
];
var frames = {
    "3d1df1b4-4d9d-45a4-bf14-cb580ee74675": [{
        name: "Hello.png",
        second: 0,
        duration: 70
    },
    {
        name: "Welcome.png",
        second: 130,
        duration: 200
    }],
    "7d8c4210-0cfa-4a10-8b21-01e6601e00bf": [{
        name: "Goodbye.png",
        second: 10,
        duration: 150
    }],
    "65079f30-47a8-4469-833e-4f0eea04d233": []
};

function onUpdateFrames(frames) {
    //TODO: deal with frames
}

ReactDOM.render(
    <Timeline layers={layers} frames={frames} onUpdateFrames={onUpdateFrames}/>,
    document.getElementById("root")
);
```


# Props

* `layers`: (required) Array of objects, see example above,
  * Available Properties
    * `id` - String, id of the layer
    * `name` - String, name or title displayed on the list
* `frames`: (required) Object, see example above,
  * `key` - String, layer id where the frames are placed
  * `value` - Array of objects
    * Available Properties
      * `name` - String, name or title displayed on the frame
      * `second` - Number, initial second of the frame
      * `duration` - Number, duration of the frame in seconds
* `onUpdateFrames`: Function, `callback(frames)`
  * Use this to get notified when the user updates the frames, see example above
  ```javascript
    _onUpdateFrames(frames) {
      console.log(frames);
    }
  ```


# Contributing

* Comment your code
* Describe your feature/implementation in the pullrequest
* Write [clean](https://github.com/ryanmcdermott/clean-code-javascript) code


# License

MIT
