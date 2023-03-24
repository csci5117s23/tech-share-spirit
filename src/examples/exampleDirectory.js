import {Example1} from "./example1-css-prop/Example1";
import {Example1Complete} from "./example1-css-prop/Example1Complete";
import {ExampleComp} from "./example-comp/ExampleComp";
import {ExampleNest} from "./example-nest/ExampleNest";
import {Example4} from "./example4-styled-components/Example4"
import { Example4Complete } from "./example4-styled-components/Example4Complete";
import React from "react";


export const examples = [
    {
        id: "ex1",
        name: "Example 1 - CSS Prop",
        elements: [
            (<Example1 />),
            (<Example1Complete />),
        ]
    },
    {
        id: "comp",
        name: "Composition example",
        elements: [
            (<ExampleComp />)
        ]
    },
    {
        id: "nest",
        name: "Nested Selector Example",
        elements: [
            (<ExampleNest />
        ]
    },
    {
        id: "ex4",
        name: "Example 4 - Styled Components",
        elements: [
            (<Example4 />),
            (<Example4Complete />),
        ]
    }
]