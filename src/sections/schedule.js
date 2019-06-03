import React, { useState } from 'react'
import GenSection from '../components/gen-section'
import { color, onMobile } from '../components/common'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const headerStyle = css`
  background-color: ${color.green};
  color: white;

  font-weight: 600;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
`

const SessionList = styled.div`
  display: grid;
  grid-template-columns: 7.8125rem auto;
  grid-column: span 2;
`

const tableGridStyle = css`
  display: grid;
  grid-template-columns: 7.8125rem auto 10.9375rem;

  ${onMobile} {
    grid-template-columns: 7rem auto 5rem;
  }
`

const Time = styled.div`
  background-color: rgba(124, 124, 124, 0.1);
  width: 7.8125rem;
  color: ${color.darkGray};
  padding: 0.625rem;
`

const MainHall = () => (
  <div
    css={css`
      background-color: rgba(124, 124, 124, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    `}
  >
    Main Hall
  </div>
)
const Session = ({ title, speaker }) => (
  <div
    css={css`
      display: flex;
      padding: 0.625rem 1.5rem;
      justify-content: flex-start;
      text-align: left;
      flex-direction: column;
    `}
  >
    <div
      css={css`
        font-weight: 600;
      `}
    >
      {title}
    </div>
    <div
      css={css`
        font-size: 0.75rem;
        color: ${color.darkGray};
      `}
    >
      {speaker}
    </div>
  </div>
)

const FirstHalf = () => (
  <div
    css={[
      tableGridStyle,
      css`
        grid-template-rows: 3.25rem auto 3.25rem;
      `,
    ]}
  >
    <div
      css={[
        headerStyle,
        css`
          width: 7.8125rem;
        `,
      ]}
    >
      Time
    </div>
    <div
      css={[
        headerStyle,
        css`
          justify-content: flex-start;
        `,
      ]}
    >
      Sessions
    </div>
    <div css={headerStyle}>Venue</div>

    <SessionList>
      <Time>8:30 am</Time>
      <Session title="Registration" />

      <Time>9:30 am</Time>
      <Session title="Opening Remark" speaker="Organizer & Gosoft" />

      <Time>10:30 am</Time>
      <Session
        title="Automating at scale:Challenges and (some) solutions"
        speaker="Max Panasenkov, iOS developer at Adoda"
      />
    </SessionList>

    <MainHall />

    <div
      css={css`
        grid-column: 1 / span 3;
        background-color: #e6e7e8;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      Lunch break for 80 mins
    </div>
  </div>
)

const tabStyleFor = (hall, expected) => [
  css`
    color: ${color.green};
    border: solid ${color.green} 0.1rem;
  `,
  hall === expected &&
    css`
      background-color: ${color.green};
      color: white;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        width: 98%;
        height: 0.07rem;
        background-color: white;
        bottom: 0;
      }
    `,
]

const Hall1Sesssions = () => (
  <SessionList>
    <Time>8:30 am</Time>
    <Session title="Registration" />

    <Time>9:30 am</Time>
    <Session title="Opening Remark" speaker="Organizer & Gosoft" />

    <Time>10:30 am</Time>
    <Session
      title="Automating at scale:Challenges and (some) solutions"
      speaker="Max Panasenkov, iOS developer at Adoda"
    />
  </SessionList>
)
const Hall2Sesssions = () => (
  <SessionList>
    <Time>8:30 am</Time>
    <Session
      title="Mobile app hacking in a nutshell"
      speaker="Prathan Phongthiproek, iOS developer at Adoda"
    />

    <Time>9:30 am</Time>
    <Session
      title="Going react native without breaking"
      speaker="Leomid Olevsky, iOS developer at Adoda"
    />

    <Time>10:30 am</Time>
    <Session
      title="Mobile app hacking in a nutshell"
      speaker="Prathan Phongthiproek, iOS developer at Adoda"
    />
  </SessionList>
)

const SecondHalf = () => {
  const [hall, setHall] = useState(1)

  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          align-items: center;

          div {
            display: flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            height: 3.25rem;
            width: 50%;
            font-weight: 600;
            transition: background-color 0.4s ease;
          }
        `}
      >
        <div css={tabStyleFor(hall, 1)} onClick={() => setHall(1)}>
          Hall 1 Sessions
        </div>
        <div css={tabStyleFor(hall, 2)} onClick={() => setHall(2)}>
          Hall 2 Sessions
        </div>
      </div>

      <div
        css={[
          tableGridStyle,
          css`
            * {
              background-color: ${color.green};
            }
          `,
        ]}
      >
        {hall === 1 ? <Hall1Sesssions /> : <Hall2Sesssions />}
        <div />
      </div>

      <div css={[tableGridStyle]}>
        <SessionList>
          <Time>8:30 am</Time>
          <Session title="Registration" />

          <Time>9:30 am</Time>
          <Session title="Opening Remark" speaker="Organizer & Gosoft" />

          <Time>10:30 am</Time>
          <Session
            title="Automating at scale:Challenges and (some) solutions"
            speaker="Max Panasenkov, iOS developer at Adoda"
          />
        </SessionList>
        <MainHall />
      </div>
    </>
  )
}
const Schedule = () => (
  <GenSection id="schedule" title="EVENT SCHEDULE">
    <FirstHalf />
    <SecondHalf />
  </GenSection>
)

export default Schedule
