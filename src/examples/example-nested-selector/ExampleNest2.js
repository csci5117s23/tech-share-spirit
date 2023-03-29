/** @jsx jsx */
/** @jsxRuntime classic */

import React from "react";
import {css, jsx} from '@emotion/react';

const exampleNest = css`
    background-color: black;
    color: turquoise;
    font-weight: bold;
    font-size: 2em;

    span & {
        color: magenta;
    }
`
export const ExampleNest2 = () => {
    return (<>
        <p css={exampleNest}>This text is turquoise because it's not in a span!</p>
        <span>
            <p css={exampleNest}>This text is magenta because it's in a span!</p>
        </span>
    </>);
}
