import { createGlobalStyle, keyframes, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fefefe;
    height: 100vh;
    overscroll-behavior: none;
    width: 100%;
  }
`;

export const showBrandKeyFrames = keyframes`
  from {
    opacity: 0;
    font-size: xx-small;
    top: 0%;
  }
  to {
    opacity: 1;
    font-size: x-large;
    top: 10%;
  }
`;

export const sideSlideKeyFrames = keyframes`
  60% {
    transform: scale(1);
    color: #808080;
  }

  80% {
    transform: scale(1);
    color: #808080;
  }

  99% {
    transform: scale(1.2);
    color: #FB202D;
  }

  100% {
    transform: scale(1);
    opacity: 1;
    color: #000000;
  }
`;

export const rotateHexImgKeyFrames = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const animation = ({ keyFrames = null, duration = '1s', timing_function = 'ease', delay = '0s', iteration_count = '1', direction = 'normal', fill_mode = 'none', play_state = 'running'} = {}) =>
  css`
    animation: ${keyFrames} ${duration} ${timing_function} ${delay} ${iteration_count} ${direction} ${fill_mode} ${play_state};
  `;

