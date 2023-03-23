/** @jsx jsx */
/** @jsxRuntime classic */

import React from "react";
import {css, jsx} from '@emotion/react'

const paragraphWidth = "500px";

const backgroundColorNormal = "beige";
const textColorNormal = "black";
const hoverColorNormal = "red";
const highlightNormal = "blue";
const hoverHighlightTextNormal = "white"
const normal = css`
    background-color: ${backgroundColorNormal};
    color: ${textColorNormal};
    
    &:hover {
        color: ${hoverColorNormal};
    }

    &.highlight: {
        ${highlightNormal};

        &:hover {
            color: ${hoverHighlightTextNormal};
        }
    }
`

const backgroundColorDark = "rgb(0, 30, 56)";
const textColorDark = "rgb(208, 208, 208";
const highlightDark = "rgb(255, 225, 0)";
const hoverColorDark = "greenyellow";
const hoverHighlightTextDark = "black";
const dark = css`
    background-color: ${backgroundColorDark};
    color: ${textColorDark};
    
    &:hover {
        color: ${hoverColorDark};
    }

    &.highlight: {
        ${highlightDark};

        &:hover {
            color: ${hoverHighlightTextDark};
        }
    }
`

export const Example3Complete = () => {
    return (<>
        <div css={normal}>
            <h1>Hover over some text to change the color of the paragraph!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent non est nulla. 
                Duis scelerisque massa et malesuada commodo. Nulla facilisi. 
                <span class="highlight">
                    Donec auctor nibh a gravida auctor. Nunc ac fermentum nisi. 
                </span>
                Sed vestibulum, metus sed aliquet lacinia, felis elit interdum velit, sed ullamcorper orci mi consectetur ex. 
            </p>
            <p>
                Aliquam posuere elementum auctor. Duis viverra iaculis vestibulum. 
                <span class="highlight">
                    Quisque vel hendrerit sapien. Mauris ultrices maximus mauris, non rutrum neque egestas a.
                </span> 
                Vivamus rhoncus ac magna eu ultricies. 
                Nulla ultricies augue vitae neque hendrerit, eu vestibulum ipsum elementum. 
                Nunc sed libero ligula.
            </p>
            <p>
                In egestas interdum est eu maximus. 
                Maecenas porttitor mi ac lobortis molestie. 
                Sed at luctus ligula, volutpat sollicitudin eros. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean hendrerit urna a dolor tristique, eget fringilla metus efficitur. 
                <span class="highlight">
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </span> 
                Nam a commodo nibh. Donec sollicitudin dapibus lectus, et maximus nibh porta nec. 
            </p>
            <p>
                Suspendisse semper tortor nec rutrum ultrices. Phasellus ut justo 
                aliquet, finibus elit tempor, pharetra lacus. Curabitur dignissim 
                sapien arcu, et imperdiet lorem faucibus ac. Curabitur aliquet id 
                nisl nec tincidunt. Proin condimentum, metus vitae malesuada 
                lobortis, ante eros tincidunt augue, sed blandit lectus diam sed
                nulla. Vivamus neque risus, bibendum id nunc nec, consectetur 
                dignissim tellus. Cras vel molestie lorem, eu suscipit quam. 
                <span class="highlight">
                    Praesent hendrerit lectus quis lectus elementum venenatis.
                </span>
            </p>
            <button onclick="toggleDarkmode()">Toggle dark mode</button>
        </div>
    </>);
}