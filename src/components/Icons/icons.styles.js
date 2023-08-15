import { styled, keyframes } from 'styled-components';

const stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const scale = keyframes`

  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const fill = keyframes`
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
`;

export const CheckMarkCircle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`;

export const CheckmarkSvg = styled.svg`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: block;
  stroke-width: 8;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation:
    ${fill} 0.4s ease-in-out 0.4s forwards,
    ${scale} 0.3s ease-in-out 0.9s both;
`;

export const CheckMarkCheck = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`;


const circleAnimation = keyframes`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`;

const firstLineAnimation = keyframes`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`;

const secondLineAnimation = keyframes`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`;


export const ErrorIcon = styled.div`
  width: 26px;
  opacity: 0;
  height: 26px;
  border-radius: 13px;
  background: ${(p) => p.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${circleAnimation} .8s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${firstLineAnimation} .4s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 4px;
    opacity: 0;
    background: ${(p) => p.secondary || '#fff'};
    bottom: 11px;
    left: 4px;
    height: 4px;
    width: 16px;
  }

  &:before {
    animation: ${secondLineAnimation} .4s ease-out forwards;
    animation-delay: 300ms;
    transform: rotate(90deg);
  }
`;
