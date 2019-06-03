import React, { useState } from 'react'
import GenSection from '../components/gen-section'
import { color } from '../components/common'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import data from '../data/sessions.json'

const headerStyle = css`
  background-color: ${color.green};
  color: white;

  font-weight: 600;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
`

const tableGridStyle = css`
  display: grid;
  grid-template-columns: 125px auto 175px;
`

const Time = styled.div`
  background-color: rgba(124, 124, 124, 0.1);
  width: 125px;
  padding: 10px;
`

function buildSession(data) {
  return data.map(session => [
    <Time>{session.time}</Time>,
    <Session title={session.title} speaker={session.speaker} />,
  ])
}

const Session = ({ title, speaker }) => (
  <div
    css={css`
      display: flex;
      padding: 10px 24px;
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
        font-size: 12px;
      `}
    >
      {speaker}
    </div>
  </div>
)

const MorningSection = () => (
  <div
    css={[
      tableGridStyle,
      css`
        grid-template-rows: 52px auto 52px;
      `,
    ]}
  >
    <div
      css={[
        headerStyle,
        css`
          width: 125px;
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

    <div
      css={css`
        display: grid;
        grid-template-columns: 125px auto;
        grid-column: span 2;
      `}
    >
      {buildSession(data.morning)}
    </div>

    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      Main Hall
    </div>
    <div
      css={css`
        grid-column: 1 / span 3;
        background-color: ${color.gray};
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      Lunch Break: 90 mins
    </div>
  </div>
)

const AfternoonSection = () => {
  const [hall, setHall] = useState(1)

  return (
    <div>
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
            height: 52px;
            width: 50%;
            font-weight: 600;
            transition: background-color 0.4s ease;
          }
        `}
      >
        <div
          css={[
            css`
              color: ${color.green};
            `,
            hall === 1 &&
              css`
                background-color: ${color.green};
                color: white;
              `,
          ]}
          onClick={() => setHall(1)}
        >
          Hall 1 Sessions
        </div>
        <div
          css={[
            css`
              color: ${color.green};
            `,
            hall === 2 &&
              css`
                background-color: ${color.green};
                color: white;
              `,
          ]}
          onClick={() => setHall(2)}
        >
          Hall 2 Sessions
        </div>
      </div>
      <div>
        <div
          css={css`
            display: grid;
            grid-template-columns: 125px auto;
            grid-column: span 2;
            background-color: ${color.green};
            color: white;
          `}
        >
          {hall == 1
            ? buildSession(data.afternoon1)
            : buildSession(data.afternoon2)}
        </div>
      </div>
      <div
        css={[
          tableGridStyle,
          css`
            grid-template-rows: 52px auto 0px;
          `,
        ]}
      >
        <div
          css={css`
            grid-column: 1 / span 3;
            background-color: ${color.gray};
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          Afternoon Break: 45 mins
        </div>
      </div>
    </div>
  )
}

const EveningSection = () => (
  <div
    css={[
      tableGridStyle
    ]}
  >
    <div
      css={css`
        display: grid;
        grid-template-columns: 125px auto;
        grid-column: span 2;
      `}
    >
      {buildSession(data.evening)}
    </div>
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      Main Hall
    </div>
  </div>
)

const Schedule = () => (
  <GenSection id="schedule" title="EVENT SCHEDULE">
    <MorningSection />
    <AfternoonSection />
    <EveningSection />
  </GenSection>
)

export default Schedule
