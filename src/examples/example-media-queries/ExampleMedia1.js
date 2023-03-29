/** @jsxImportSource @emotion/react */

// ========== Media Queries in a Separate CSS File ==========
import './ExampleMedia1.css'

export function ExampleMedia1() {
  return <div class='exMedia1'>
    Some text.
  </div>
}



// ========== Media Queries in Javascript with Breakpoints Values Stored in a const Variable ==========
// export const breakpoints = [600, 800]

// const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

// export function ExampleMedia1() {
//   return <div
//     css={[
//       {
//         backgroundColor: 'green',
//         [mq[0]]: {
//           backgroundColor: 'gray'
//         },
//         [mq[1]]: {
//           backgroundColor: 'hotpink'
//         }
//       },
//       {fontSize: 'xxx-large'}
//     ]}
//   >
//     Some text.
//   </div>
// }



// ========== Define the CSS Property (color) at Each Media Query (breakpoint) Using an Array ==========
// import facepaint from 'facepaint'

// export const breakpoints = [600, 800]

// const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

// export function ExampleMedia1() {
//   return <div
//     css={[
//       mq({
//         backgroundColor: ['green', 'gray', 'hotpink']
//       }),
//       {fontSize: 'xxx-large'}
//     ]}
//   >
//     Some text.
//   </div>
// }
