import {Example1} from "./example1-css-prop/Example1";
import {Example1Complete} from "./example1-css-prop/Example1Complete";
import {ExampleMediaBasic} from "./example-media-queries/ExampleMediaBasicComplete";
import {ExampleMediaReuse} from "./example-media-queries/ExampleMediaReuseComplete";
import {ExampleFacepaint} from "./example-media-queries/ExampleFacepaintComplete";
import {Example1} from "./example-css-prop/Example1";
import {Example1Complete} from "./example-css-prop/Example1Complete";
import {ExampleComp} from "./example-comp/ExampleComp";
import {ExampleNest} from "./example-nested-selector/ExampleNest";
import {Example4} from "./example-styled-components/Example4"
import { Example4Complete } from "./example-styled-components/Example4Complete";
import React from "react";


export const examples = [
    {
        id: "ex1",
        name: "CSS Prop Example",
        elements: [
            (<Example1 />),
            (<Example1Complete />),
        ]
    },
    {
        id: "mediaQueries",
        name: "Media Queries Examples",
        elements: [
            (<ExampleMediaBasic/>),
            (<ExampleMediaReuse/>),
            (<ExampleFacepaint/>),
        ]
    },
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
            (<ExampleNest />)
        ]
    },
    {
        id: "ex4",
        name: "Styled Components Example",
        elements: [
            (<Example4 />),
            (<Example4Complete />),
        ]
    }
]