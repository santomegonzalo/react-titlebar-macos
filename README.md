# react-titlebar-osx

Emulate OS X window *titlebar* using **ES6** and **React**. Extracted from [kapetan/titlebar](https://github.com/kapetan/titlebar).

## demo
```
npm run demo-dev
```

## how looks

![Example how looks](https://github.com/santomegonzalo/react-titlebar-osx/raw/master/bar-example.png "Real example")

## how to use it

```
npm install --save react-titlebar-osx
```

```javascript
import { Titlebar } from 'react-titlebar-osx';
```

```javascript
<Titlebar
   onClose={() => this.handleClose()}
   onMaximize={() => this.handleMaximize()}
   onFullscreen={() => this.handleFullscreen()}
   onMinimize={() => this.handleMinimize()}
/>
```

## props

- `draggable` (default `false`): Enable dragging.
- `transparent` (default `false`): Transparent background.
- `text`: Enable centered text.
- `onClose`: called when close is clicked.
- `onMinimize`: called when minimized is clicked.
- `onMaximize`: called when maximize is clicked.
- `onFullscreen`: called when fullscreen is clicked.
