import React from 'react';
import styled from 'styled-components';
import { COLOR } from '../utils/ellie';

const throttle = (fn, threshold = 100) => {
  let last;
  let timer;

  return () => {
    const now = +new Date();
    const timePassed = !!last && (now < last + threshold);

    if (timePassed) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        last = now;
        fn();
      }, threshold);
    } else {
      last = now;
      fn();
    }
  };
};

const Progress = ({ value, max, className }) => (
  <progress
    value={value}
    max={max}
    className={className}
  />
);

const StyledProgress = styled(Progress)`
  position: fixed;
  display: block;
  top: 0;
  width: 100vw;
  height: 0.4rem;
  border: 0;
  background-color: ${COLOR};
  color: ${COLOR};
  z-index: 1;
  &::-webkit-progress-bar {
    background: #FFF;
  }
  &::-webkit-progress-value {
    background:  ${COLOR};
  }
  &::-moz-progress-bar {
    background-color:  ${COLOR};
  }
`;

class ReadingProgress extends React.Component {
  constructor(props) {
    super(props);
    this.targetEl = null;
    this.rootEl = null;
    this.max = 0;
    this.viewportH = 0;
    this.targetHeight = 0;

    this.state = {
      value: 0,
    };
  }

  componentDidMount() {
    const { props } = this;

    this.targetEl = props.targetEl ? document.querySelector(props.targetEl) : document.body;
    this.rootEl = props.rootEl ? document.querySelector(props.rootEl) : window;

    this.measure();
    this.rootEl.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.rootEl.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  update = () => {
    const value = !this.props.rootEl
      ? window.pageYOffset || document.documentElement.scrollTop
      : this.rootEl.scrollTop;

    this.setState({
      value,
    });
  }

  handleResize = () => {
    throttle(this.measure(), 100);
  }

  handleScroll = () => {
    throttle(this.update(), 100);
  }

  measureViewportHeight() {
    return !this.props.rootEl
      ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      : this.rootEl.clientHeight;
  }

  measure() {
    this.targetHeight = this.targetEl.getBoundingClientRect().height;
    this.viewportH = this.measureViewportHeight();
    this.max = this.targetHeight - this.viewportH + this.targetEl.offsetTop;
  }

  render() {
    return (
      <StyledProgress
        value={this.state.value}
        max={this.max}
      />
    );
  }
}

export default ReadingProgress;
