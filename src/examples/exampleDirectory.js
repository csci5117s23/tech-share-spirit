import {ExampleMediaBasic} from "./example-media-queries/ExampleMediaBasicComplete";
import {ExampleMediaReuse} from "./example-media-queries/ExampleMediaReuseComplete";
import {ExampleFacepaint} from "./example-media-queries/ExampleFacepaintComplete";
import {Example1} from "./example-css-prop/Example1";
import {Example1Complete} from "./example-css-prop/Example1Complete";
import {ExampleComp} from "./example-comp/ExampleComp";
import {ExampleNest} from "./example-nested-selector/ExampleNest";
import {ExampleNest2} from "./example-nested-selector/ExampleNest2";
import {Example4} from "./example-styled-components/Example4";
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
        id: "mediaBasic",
        name: "Media Queries Ex1",
        elements: [
            (<ExampleMediaBasic/>),
        ]
    },
    {
        id: "mediaReuse",
        name: "Media Queries Ex2",
        elements: [
            (<ExampleMediaReuse/>),
        ]
    },
    {
        id: "mediaFacepaint",
        name: "Media Queries Ex3",
        elements: [
            (<ExampleFacepaint/>),
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
    }
]