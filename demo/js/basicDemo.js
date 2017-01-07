import React from 'react';
import ReactDOM from 'react-dom';
import { Titlebar } from '../../src';

class Demo extends React.Component {

  handleMinimize() {
    console.log('Minize button clicked');
  }

  handleMaximize() {
    console.log('Maximize button clicked');
  }

  handleFullscreen() {
    console.log('Fullscreen button clicked');
  }

  handleClose() {
    console.log('Close button clicked');
  }

  render() {
    return (
      <div>
        <div>
          <Titlebar
            onClose={() => this.handleClose()}
            onMaximize={() => this.handleMaximize()}
            onFullscreen={() => this.handleFullscreen()}
            onMinimize={() => this.handleMinimize()}
          />
        </div>
        <div
          style={{
            marginTop: 100,
          }}
        >
          <Titlebar
            onClose={() => this.handleClose()}
            onMaximize={() => this.handleMaximize()}
            onFullscreen={() => this.handleFullscreen()}
            onMinimize={() => this.handleMinimize()}
            title="Awesome titlebar"
          />
        </div>
        <div
          style={{
            marginTop: 100,
          }}
        >
          <Titlebar
            onClose={() => this.handleClose()}
            onMaximize={() => this.handleMaximize()}
            onFullscreen={() => this.handleFullscreen()}
            onMinimize={() => this.handleMinimize()}
            padding={10}
            title="Awesome titlebar - With Padding"
          />
        </div>
        <div
          style={{
            marginTop: 100,
          }}
        >
          <div style={{fontFamily: 'Arial'}}>Transparent Background</div>
          <Titlebar
            transparent
            onClose={() => this.handleClose()}
            onMaximize={() => this.handleMaximize()}
            onFullscreen={() => this.handleFullscreen()}
            onMinimize={() => this.handleMinimize()}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo'),  // eslint-disable-line no-undef
);
