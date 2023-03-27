/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export function ExampleMediaReuse() {
  return <div
    css={{
      color: 'green',
      [mq[0]]: {
        color: 'gray'
      },
      [mq[1]]: {
        color: 'hotpink'
      }
    }}
  >
    Some text!
  </div>
}