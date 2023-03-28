/** @jsx jsx */
/** @jsxRuntime classic */

import React from "react";
import {css, jsx} from '@emotion/react'

const base = css`
    font-size: 2em;
    background-color: orange;
    color: black;
`

const red = css`
    color: #C70000;
`

const blue = css`
    color: #0000FF;
`

const green = css`
    color: #007500;
`

export const ExampleComp = () => {
    return(<>
        <div css={base}>This text will be black!</div>
        <div css={[base, red]}>This text will be red!</div>
        <div css={[base, blue]}>This text will be green!</div>
        <div css={[base, green]}>This text will be blue!</div>
        <div css={[red, base]}>This text should also be black!</div>
    </>);
}