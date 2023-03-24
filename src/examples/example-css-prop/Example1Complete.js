/** @jsxImportSource @emotion/react */

import React from 'react';
import {css, jsx} from "@emotion/react";

const backgroundColor = "#8c1c68"
const textColor = "#ffffff"
const hoverTextColor = "#7b71d7"
export const Example1Complete = () => {

    return (<>
        <div css={css`
            background-color: ${backgroundColor};
            color: ${textColor};
            
            &:hover,:focus,:active {
              color: ${hoverTextColor};
            }
        `}>Hover me to turn purple!</div>
    </>)
}