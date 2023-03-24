/** @jsx jsx */
/** @jsxRuntime classic */

import React, {useState} from "react";
import {css, jsx} from '@emotion/react'

const paragraphWidth = "500px";

const backgroundColorNormal = "beige";
const textColorNormal = "black";
const highlightNormal = "blue";
const textHighlightNormal = "rgb(208, 208, 208)";
const hoverColorNormal = "red";
const hoverHighlightTextNormal = "white"
const normal = css`
    background-color: ${backgroundColorNormal};

    & p {
        max-width: ${paragraphWidth};
        &:hover {
            color: ${hoverColorNormal};
            & span {
                color: ${hoverHighlightTextNormal};
            }
        }
        & span {
            background-color: ${highlightNormal};
            color: ${textHighlightNormal};
        }
    }
    color: ${textColorNormal};
`

const backgroundColorDark = "rgb(0, 30, 56)";
const textColorDark = "rgb(208, 208, 208)";
const highlightDark = "rgb(255, 225, 0)";
const textHighlightDark = "rgb(128, 128, 128)";
const hoverColorDark = "greenyellow";
const hoverHighlightTextDark = "black";
const dark = css`
    background-color: ${backgroundColorDark};
    color: ${textColorDark};

    & p {
        max-width: ${paragraphWidth};
        &:hover {
            color: ${hoverColorDark};
            & span {
                color: ${hoverHighlightTextDark};
            }
        }
        & span {
            background-color: ${highlightDark};
            color: ${textHighlightDark}
        }
    }
`


export const ExampleNest = () => {
    let [darkMode, changeMode] = useState(normal);

    function toggleMode() {
        if(darkMode == normal) {
            changeMode(dark);
        } else {
            changeMode(normal);
        }
    }

    return (<>
        <div css={darkMode}>
            <h1>Hover over some text to change the color of the paragraph!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent non est nulla. 
                Duis scelerisque massa et malesuada commodo. Nulla facilisi. <span>
                    Donec auctor nibh a gravida auctor. Nunc ac fermentum nisi. 
                </span> Sed vestibulum, metus sed aliquet lacinia, felis elit interdum velit, sed ullamcorper orci mi consectetur ex. 
            </p>
            <p>
                Aliquam posuere elementum auctor. Duis viverra iaculis vestibulum. <span>
                    Quisque vel hendrerit sapien. Mauris ultrices maximus mauris, non rutrum neque egestas a.
                </span> Vivamus rhoncus ac magna eu ultricies. 
                Nulla ultricies augue vitae neque hendrerit, eu vestibulum ipsum elementum. 
                Nunc sed libero ligula.
            </p>
            <p>
                In egestas interdum est eu maximus. 
                Maecenas porttitor mi ac lobortis molestie. 
                Sed at luctus ligula, volutpat sollicitudin eros. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean hendrerit urna a dolor tristique, eget fringilla metus efficitur. <span>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </span> Nam a commodo nibh. Donec sollicitudin dapibus lectus, et maximus nibh porta nec. 
            </p>
            <p>
                Suspendisse semper tortor nec rutrum ultrices. Phasellus ut justo 
                aliquet, finibus elit tempor, pharetra lacus. Curabitur dignissim 
                sapien arcu, et imperdiet lorem faucibus ac. Curabitur aliquet id 
                nisl nec tincidunt. Proin condimentum, metus vitae malesuada 
                lobortis, ante eros tincidunt augue, sed blandit lectus diam sed
                nulla. Vivamus neque risus, bibendum id nunc nec, consectetur 
                dignissim tellus. Cras vel molestie lorem, eu suscipit quam. <span> 
                    Praesent hendrerit lectus quis lectus elementum venenatis.
                </span>
            </p>
            <button onClick={toggleMode}>Toggle dark mode</button>
        </div>
    </>);
}