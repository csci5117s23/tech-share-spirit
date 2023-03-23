/** @jsx jsx */
/** @jsxRuntime classic */

import {css, jsx} from "@emotion/react";
import {Link} from "react-router-dom";
import {colors} from "./palette";

const ExampleTabs = (props) => (
    <div css={css`
      background: ${colors.background};
      height: 92vh;
      width: 100%;

      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: row;

      & .fullHeight {
        background: ${colors.surface};
        border: 1px solid ${colors.outline};
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
    `}>
        {props.elements.map((element, index) => (<div key={index}> {element} </div>))}
    </div>
)

export const ExampleRender = ({key, elements, examples}) =>
    (<div css={css`
      background: ${colors.tertiary};
      height: 7.5vh;
      box-shadow: 1px solid ${colors.tertiary};

      & a {
        text-decoration: none;
        font-size: 1.25rem;
        font-weight: 600;
        color: ${colors.onTertiary};
      }

      & a:active, a:focus, a:hover {
        color: ${colors.secondaryContainer};
      }
    `}>
        <div className={`fullHeight`} css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            height: 7.5vh;
        `}>
            {examples.map(route => (
                <Link to={`/${route.id}`}>{route.name}</Link>
            ))}
        </div>
        <div><ExampleTabs key={key} elements={elements} /> </div>
    </div>)