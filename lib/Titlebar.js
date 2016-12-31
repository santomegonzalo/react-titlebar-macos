import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './css/Titlebar.scss';

const KEY_ALT = 18;

class Titlebar extends React.Component {
  static defaultProps = {
    draggable: false,
    title: null,
    transparent: false,
  }

  constructor(props, defaultProps) {
    super(props, defaultProps);

    this.state = {
      keyAltDown: false,
    };

    this.handleMaximize = this.handleMaximize.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown.bind(this));  // eslint-disable-line no-undef
    document.body.addEventListener('keyup', this.handleKeyUp.bind(this));      // eslint-disable-line no-undef
  }

  componentWillUnMount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);  // eslint-disable-line no-undef
    document.body.removeEventListener('keyup', this.handleKeyUp);      // eslint-disable-line no-undef
  }

  handleKeyDown(e) {
    if (e.keyCode === KEY_ALT) {
      this.setState({
        keyAltDown: true,
      });
    }
  }

  handleKeyUp(e) {
    if (e.keyCode === KEY_ALT) {
      this.setState({
        keyAltDown: false,
      });
    }
  }

  handleMaximize() {
    const { onMaximize, onFullscreen } = this.props;
    const { keyAltDown } = this.state;

    if (keyAltDown) {
      onMaximize();
    } else {
      onFullscreen();
    }
  }

  render() {
    const {
      draggable,
      title,
      transparent,
      onClose,
      onMinimize,
    } = this.props;
    const { keyAltDown } = this.state;

    const clazz = classNames({
      titlebar: true,
      'webkit-draggable': draggable,
      transparent,
      alt: keyAltDown,
    });

    return (
      <div className={clazz}>
        <div className="titlebar-stoplight">
          <div className="titlebar-close" onClick={onClose}>
            <svg x="0px" y="0px" viewBox="0 0 6.4 6.4">
              <polygon fill="#4d0000" points="6.4,0.8 5.6,0 3.2,2.4 0.8,0 0,0.8 2.4,3.2 0,5.6 0.8,6.4 3.2,4 5.6,6.4 6.4,5.6 4,3.2"></polygon>
            </svg>
          </div>
          <div className="titlebar-minimize" onClick={onMinimize}>
            <svg x="0px" y="0px" viewBox="0 0 8 1.1">
              <rect fill="#995700" width="8" height="1.1"></rect>
            </svg>
          </div>
          <div className="titlebar-fullscreen" onClick={this.handleMaximize}>
            <svg className="fullscreen-svg" x="0px" y="0px" viewBox="0 0 6 5.9">
              <path fill="#006400" d="M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z"></path>
              <path fill="#006400" d="M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z"></path>
            </svg>
            <svg className="maximize-svg" x="0px" y="0px" viewBox="0 0 7.9 7.9">
              <polygon fill="#006400" points="7.9,4.5 7.9,3.4 4.5,3.4 4.5,0 3.4,0 3.4,3.4 0,3.4 0,4.5 3.4,4.5 3.4,7.9 4.5,7.9 4.5,4.5"></polygon>
            </svg>
          </div>
        </div>
        {
          title &&
            <div className="titlebar-text">title</div>
        }
      </div>
    );
  }
}

Titlebar.propTypes = {
  title: PropTypes.string,
  transparent: PropTypes.bool,
  draggable: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onMinimize: PropTypes.func.isRequired,
  onMaximize: PropTypes.func.isRequired,
  onFullscreen: PropTypes.func.isRequired,
};

export default Titlebar;
