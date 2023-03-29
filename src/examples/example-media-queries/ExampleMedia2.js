/** @jsxImportSource @emotion/react */

// ========== Media Queries in a Separate CSS File ==========
import './ExampleMedia2.css'

export function ExampleMedia2() {
    return <div class='exMedia2'>
        Other text!
    </div>
}



// ========== Media Queries in Javascript with Breakpoints Values Stored in a const Variable ==========
// import { breakpoints } from './ExampleMedia1'

// const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

// export function ExampleMedia2() {
//     return <div
//         css={[
//                 {
//                     backgroundColor: 'orange',
//                     [mq[0]]: {
//                         backgroundColor: 'gray'
//                     },
//                     [mq[1]]: {
//                         backgroundColor: 'blue'
//                     }
//                 },
//                 {fontSize: 'xxx-large'}
//         ]}
//     >
//         Other text!
//     </div>
// }