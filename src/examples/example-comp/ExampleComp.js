/** @jsx jsx */
/** @jsxRuntime classic */

import React from "react";
import {css, jsx} from '@emotion/react'

const base = css`
    background-color: orange;
    color: white;
`

const red = css`
    color: red;
`

const blue = css`
    color: blue;
`

const green = css`
    color: green;
`

export const ExampleComp = () => {
    return(<>
        <div css={base}>This text will be white!</div>
        <div css={[base, red]}>This text will be red!</div>
        <div css={[base, blue]}>This text will be green!</div>
        <div css={[base, green]}>This text will be blue!</div>
        <div css={[red, base]}>This text should also be white!</div>
    </>);
}