import {Example1} from "./example1-css-prop/Example1";
import {Example1Complete} from "./example1-css-prop/Example1Complete";
import {ExampleNest} from "./example-nest/ExampleNest";
import React from "react";


export const examples = [
    {
        id: "ex1",
        name: "Example 1",
        elements: [
            (<Example1 />),
            (<Example1Complete />),
        ]
    },
    {
        id: "nest",
        name: "Nested Selector Example",
        elements: [
            (<ExampleNest />)
        ]
    }
]