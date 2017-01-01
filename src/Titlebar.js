/* eslint-disable class-methods-use-this */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

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
    this.setStyleHeader();

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

  /**
   * Set style tag in header
   * in this way we can insert default css
   */
  setStyleHeader() {
    if (!document.getElementsByTagName('head')[0].querySelector('style[id="react-titlebar-osx"]')) { // eslint-disable-line no-undef
      console.log(this.styles());
      const tag = document.createElement('style'); // eslint-disable-line no-undef
      tag.id = 'react-titlebar-osx';
      tag.innerHTML = this.styles();
      document.getElementsByTagName('head')[0].appendChild(tag); // eslint-disable-line no-undef
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

  // TODO ugly way to fix the styles
  styles() {
    return `.titlebar {
      padding: 0 3px;
      display: flex;
      background-color: #f6f6f6; }
      .titlebar.transparent {
        background-color: transparent; }
      .titlebar.webkit-draggable {
        -webkit-app-region: drag; }
      .titlebar.alt svg.fullscreen-svg {
        display: none; }
      .titlebar.alt svg.maximize-svg {
        display: block !important; }
      .titlebar.webkit-draggable .titlebar-close, .titlebar.webkit-draggable .titlebar-minimize, .titlebar.webkit-draggable .titlebar-fullscreen {
        -webkit-app-region: no-drag; }

    .titlebar-text {
      flex-grow: 1;
      text-align: center;
      font-family: 'Helvetica Neue', Helvetica;
      font-size: 14px;
      line-height: 24px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: default; }

    .titlebar-stoplight {
      flex-grow: 0;
      display: flex; }
      .titlebar-stoplight .titlebar-close,
      .titlebar-stoplight .titlebar-minimize,
      .titlebar-stoplight .titlebar-fullscreen {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 6px 4px;
        line-height: 0; }
      .titlebar-stoplight .titlebar-close {
        border: 1px solid #e2463f;
        background-color: #ff5f57;
        margin-left: 6px; }
        .titlebar-stoplight .titlebar-close:active {
          border-color: #ad3934;
          background-color: #bf4943; }
        .titlebar-stoplight .titlebar-close svg {
          width: 6px;
          height: 6px;
          margin-top: 2px;
          margin-left: 2px;
          opacity: 0; }
      .titlebar-stoplight .titlebar-minimize {
        border: 1px solid #e1a116;
        background-color: #ffbd2e; }
        .titlebar-stoplight .titlebar-minimize:active {
          border-color: #ad7d15;
          background-color: #bf9123; }
        .titlebar-stoplight .titlebar-minimize svg {
          width: 8px;
          height: 8px;
          margin-top: 1px;
          margin-left: 1px;
          opacity: 0; }
      .titlebar-stoplight .titlebar-fullscreen,
      .titlebar-stoplight .titlebar-maximize {
        border: 1px solid #12ac28;
        background-color: #28c940; }
      .titlebar-stoplight .titlebar-fullscreen:active {
        border-color: #128622;
        background-color: #1f9a31; }
      .titlebar-stoplight .titlebar-fullscreen svg.fullscreen-svg {
        width: 6px;
        height: 6px;
        margin-top: 2px;
        margin-left: 2px;
        opacity: 0; }
      .titlebar-stoplight .titlebar-fullscreen svg.maximize-svg {
        width: 8px;
        height: 8px;
        margin-top: 1px;
        margin-left: 1px;
        opacity: 0;
        display: none; }
      .titlebar-stoplight:hover svg, .titlebar-stoplight:hover svg.fullscreen-svg, .titlebar-stoplight:hover svg.maximize-svg {
        opacity: 1; }

    .titlebar:after,
    .titlebar-stoplight:after {
      content: ' ';
      display: table;
      clear: both; }
`;
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
