/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

export default function Example21() {
    return <p
    css={css`
        font-size: 30px;
        @media (min-width: 420px) {
        font-size: 50px;
        }
    `}
    >
        Some text!
    </p>
}