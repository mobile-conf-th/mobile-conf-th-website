import React, { useState, useEffect, useRef } from 'react'
import { Container, color } from '../components/common'
import { css } from '@emotion/core'
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  parseISO,
} from 'date-fns'

const countdownContainer = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Box = ({ num, unit }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: white;
      box-shadow: 0px 17px 15px -1px rgba(0, 0, 0, 0.1);
      width: 70px;
      height: 70px;
      padding: 5px 2px;
      border-radius: 4px;
    `}
  >
    <div>{num}</div>
    <div
      css={css`
        color: ${color.brownGray};
      `}
    >
      {unit}
    </div>
  </div>
)

const remainingTimeUntil = (now, target) => {
  const days = differenceInDays(target, now)
  const hours = differenceInHours(target, now)
  const minutes = differenceInMinutes(target, now)
  const seconds = differenceInSeconds(target, now)

  if (seconds <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days,
    hours: hours - days * 24,
    minutes: minutes - hours * 60,
    seconds: seconds - minutes * 60,
  }
}

const getRemainingTime = () =>
  remainingTimeUntil(new Date(), parseISO('2019-06-11T11:30:30+07:00'))

const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime())

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(getRemainingTime())
    }, 1000)
  }, [])

  return (
    <Container css={countdownContainer}>
      <h3
        css={css`
          color: white;
        `}
      >
        Event will start in
      </h3>
      <div
        css={css`
          display: flex;
          height: 100px;

          & > div {
            margin: 0 10px;
          }
        `}
      >
        <Box num={remainingTime.days} unit="days" />
        <Box num={remainingTime.hours} unit="hours" />
        <Box num={remainingTime.minutes} unit="minutes" />
        <Box num={remainingTime.seconds} unit="seconds" />
      </div>
    </Container>
  )
}

export default Countdown
