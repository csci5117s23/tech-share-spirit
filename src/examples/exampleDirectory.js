import {Example1} from "./example1-css-prop/Example1";
import {Example1Complete} from "./example1-css-prop/Example1Complete";
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
        id: "ex4",
        name: "Example 4 - Styled Components",
        elements: [
            (<Example4 />),
            (<Example4Complete />),
        ]
    }
]