/** @jsxImportSource @emotion/react */
import facepaint from 'facepaint'

export const breakpoints = [576, 768]

// const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export function ExampleMedia1() {
  // return <div
  //   css={{
  //     color: 'green',
  //     [mq[0]]: {
  //       color: 'gray'
  //     },
  //     [mq[1]]: {
  //       color: 'hotpink'
  //     }
  //   }}
  // >
  //   Some text.
  // </div>
  
  return <div
    css={[
      mq({
        color: ['green', 'gray', 'hotpink']
      }),
      {fontSize: 'xxx-large'}
    ]}
  >
    Some text.
  </div>
}