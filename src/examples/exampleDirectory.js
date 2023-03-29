import { ExampleMedia1 } from "./example-media-queries/ExampleMedia1";
import { ExampleMedia2 } from "./example-media-queries/ExampleMedia2";
import {Example1} from "./example-css-prop/Example1";
import {Example1Complete} from "./example-css-prop/Example1Complete";
import {ExampleComp} from "./example-comp/ExampleComp";
import {ExampleNest} from "./example-nested-selector/ExampleNest";
import {ExampleNest2} from "./example-nested-selector/ExampleNest2";
import {Example4} from "./example-styled-components/Example4";
import { Example4Complete } from "./example-styled-components/Example4Complete";
import React from "react";
import {Example1ReactCSS} from "./example-css-prop/Example1ReactCSS";


export const examples = [
    {
        id: "ex1",
        name: "CSS Prop Example",
        elements: [
            (<Example1ReactCSS />),
            (<Example1 />),
            (<Example1Complete />),
        ]
    },
    {
        id: "comp",
        name: "Composition Example",
        elements: [
            (<ExampleComp />)
        ]
    },
    {
        id: "nest",
        name: "Nested Selector Example",
        elements: [
            (<ExampleNest />),
            (<ExampleNest2 />)
        ]
    },
    {
        id: "ex4",
        name: "Styled Components Example",
        elements: [
            (<Example4 />),
            (<Example4Complete />),
        ]
    },
    {
        id: "mediaEx1",
        name: "Media Queries Example 1",
        elements: [
            (<ExampleMedia1/>),
        ]
    },
    {
        id: "mediaEx2",
        name: "Media Queries Example 2",
        elements: [
            (<ExampleMedia2/>),
        ]
    }
]