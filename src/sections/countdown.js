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
      justify-content: center;
      background-color: white;
      box-shadow: 0px 17px 15px -1px rgba(0, 0, 0, 0.1);
      width: 100px;
      height: 100px;
      border-radius: 6px;
      box-shadow: 0 0 19px 1px rgba(0, 0, 0, 0.12);
    `}
  >
    <div css={css`
      font-size: 36px;
      margin: 6px auto;
    `}>
      {num}
    </div>
    <div
      css={css`
        font-size: 12px;
        letter-spacing: 0.2px;
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
          font-size: 20px;
          font-weight: 600;
        `}
      >
        The biggest mobile developer conference in Thailand will start in 
      </h3>
      <div
        css={css`
          display: flex;
          height: 100px;
          margin-top: 32px;

          & > div {
            margin: 0 10px;
          }
        `}
      >
        <Box num={remainingTime.days} unit="DAYS" />
        <Box num={remainingTime.hours} unit="HOURS" />
        <Box num={remainingTime.minutes} unit="MINUTES" />
        <Box num={remainingTime.seconds} unit="SECONDS" />
      </div>
    </Container>
  )
}

export default Countdown
