# [Pungeon](https://pmarkowski.github.io/pungeon-react/)

Pungeon is a a browser based web app to create maps for pen and paper role-playing games.
Pungeon lets you sketch new map layouts quickly, and easily edit the existing layout as the
map you're creating grows and changes.

## Core Dependencies

* [React](https://github.com/facebook/react/) is used for the chrome surrounding the map editor. This project was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* [PixiJS](https://github.com/pixijs/pixi.js/) is used to render the map and handle interactions with the canvas element.
* [Redux](https://github.com/reduxjs/redux) along with [React Redux](https://github.com/reduxjs/react-redux) is used to manage state.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Architecture Overview

### Redux Reducers
As previously mentioned, Pungen uses Redux for state management. Broadly, there are two types of state: There's the state of the map itself, and there's state related to the editor. The map state should be considered the source of truth of how the map should look. Anything else such as the current zoom level, user preferences, or details related to what the user is currently doing should fall into editor state.

### Rendering the Map
The `DungeonEditor` component includes a `<canvas>` element and creates a PixiJS application with a tick function. On every tick, the PixiJS application synchronizes its internal state with the state in the Redux store, renders everything in the app, and emits any Redux actions if necessary. PixiJS uses its internal state to optimize performance, this necessitates the synchronization step since the Redux state should be considered the sole source of truth for the application.

### Map Objects
The logic related to the various objects that can exist in a map are contained in their respective `...Operations` classes. This includes object creation, movement, and rendering.

Each Map Object must have a unique identifier associated with it. This unique identifier is crucial so that the PixiJS application knows what object in its scene graph corresponds to which object in the map.

### User Input
User input is captured and handled by `keyboardEventHandlers.js` and `mouseEventHandlers.js`. These methods are responsible for emitting any Redux actions if necessary based on the input, and forwarding input events to any other relevant classes.

### Tools
Most interactions with the map by the user are done via Tools. A Tool can be selected by clicking on a button in the `Toolbar` component. When a Tool is active, user input is forwarded to it along with the Redux store so that it can emit actions. As an example, it is common for tools to emit an action to add an object to the map when the user releases the mouse. Tools also have a method that is called during rendering to give the user visual feedback on what they are currently doing.
