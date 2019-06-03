import styled from '@emotion/styled'

export const color = {
  green: '#8cc63f',
  lightGreen: '#D9E021',
  blue: '#0077FF',
  lightBlue: '#00FFFF',
  brown: '8CC63F',
  brownGray: '#7D7D7D',
  gray: '#F2F2F2',
  darkGray: '#4D4D4D',
}

export const Container = styled.div`
  max-width: 64rem;
  padding: 0 1.5rem;
`

export const onSmallMobile = `@media (max-width: 320px)`
export const onMobile = `@media (max-width: 768px)`
export const onTablet = `@media (max-width: 1024px)`
export const onDesktop = `@media (min-width: 1025px)`
