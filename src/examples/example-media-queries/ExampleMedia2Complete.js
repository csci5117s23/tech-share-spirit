/** @jsxImportSource @emotion/react */

import { breakpoints } from './ExampleMedia1Complete'

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export function ExampleMedia2() {
    return <div
        css={[
                {
                    color: 'green',
                    [mq[0]]: {
                        color: 'gray'
                    },
                    [mq[1]]: {
                        color: 'hotpink'
                    }
                },
                {fontSize: 'xxx-large'}
        ]}
    >
        Other text!
    </div>
}