/** @jsxImportSource @emotion/react */

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
      box-shadow: 1px solid ${colors.tertiary};
      flex-wrap: wrap;

      & a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        padding: 8px;
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
            flex-wrap: wrap;
            align-items: center;
            min-height: 7.5vh;
        `}>
            {examples.map(route => (
                <Link to={`/${route.id}`}>{route.name}</Link>
            ))}
        </div>
        <div><ExampleTabs key={key} elements={elements} /> </div>
    </div>)