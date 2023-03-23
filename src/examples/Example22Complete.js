/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export default function Example22() {
    return <p
    css={css`
      color: green;
      ${mq[0]} {
        color: gray;
      }
      ${mq[1]} {
        color: hotpink;
      }
    `}
    >
        Some other text!
    </p>
}