import React, { useState, useEffect } from "react";
import { Container, color, onSmallMobile } from "./common";
import { css } from "@emotion/core";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  parseISO
} from "date-fns";

const countdownContainer = css`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = ({ num, unit }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: white;
      box-shadow: 0rem 1.0625rem 0.9375rem -0.0625rem rgba(0, 0, 0, 0.1);
      width: 6.25rem;
      height: 6.25rem;
      border-radius: 0.375rem;
      box-shadow: 0 0 1.1875rem 0.0625rem rgba(0, 0, 0, 0.12);
    `}
  >
    <div
      css={css`
        font-size: 2.25rem;
        margin: 0.375rem auto;
      `}
    >
      {num}
    </div>
    <div
      css={css`
        font-size: 0.75rem;
        letter-spacing: 0.125rem;
        color: ${color.brownGray};
      `}
    >
      {unit}
    </div>
  </div>
);

const remainingTimeUntil = (now, target) => {
  const days = differenceInDays(target, now);
  const hours = differenceInHours(target, now);
  const minutes = differenceInMinutes(target, now);
  const seconds = differenceInSeconds(target, now);

  if (seconds <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days,
    hours: hours - days * 24,
    minutes: minutes - hours * 60,
    seconds: seconds - minutes * 60
  };
};

const getRemainingTime = () =>
  remainingTimeUntil(new Date(), parseISO("2019-08-20T08:30:30+07:00"));

export const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);
  }, []);

  return (
    <Container css={countdownContainer}>
      <h3
        css={css`
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.4;
        `}
      >
        The biggest mobile developer conference in Thailand will start in
      </h3>
      <div
        css={css`
          display: flex;
          height: 6.25rem;
          margin-top: 2rem;

          & > div {
            margin: 0 0.625rem;
          }
        `}
      >
        <Box num={remainingTime.days} unit="DAYS" />
        <Box num={remainingTime.hours} unit="HOURS" />
        <Box num={remainingTime.minutes} unit="MINUTES" />
        <Box num={remainingTime.seconds} unit="SECONDS" />
      </div>
    </Container>
  );
};
