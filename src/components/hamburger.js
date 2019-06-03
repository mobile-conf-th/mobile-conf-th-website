import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { onDesktop } from '../components/common'

const SvgContainer = styled.div`
  position: relative;
  height: 0;
  width: 4rem;
  padding: 0;
  padding-bottom: 15%;
  .ham {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }

  .line {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #8bc53d;
    stroke-width: 2.5;
    stroke-linecap: round;
  }
  .ham4 .top {
    stroke-dasharray: 40 121;
  }
  .ham4 .bottom {
    stroke-dasharray: 40 121;
  }
  .ham4.active .top {
    stroke-dashoffset: -68px;
  }
  .ham4.active .bottom {
    stroke-dashoffset: -68px;
  }

  ${onDesktop} {
    display: none;
  }
`
export const Hamburger = ({ onClick, isOpen }) => {
  const svgRef = useRef(null)
  return (
    <SvgContainer onClick={onClick}>
      <svg
        className={`ham hamRotate ham4 ${isOpen ? 'active' : ''}`}
        viewBox="0 0 100 100"
        ref={svgRef}
        onClick={onClick}
      >
        <path
          className="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path className="line middle" d="m 70,50 h -40" />
        <path
          className="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
      </svg>
    </SvgContainer>
  )
}
