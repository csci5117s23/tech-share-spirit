import {Example1} from "./example1-css-prop/Example1";
import {Example1Complete} from "./example1-css-prop/Example1Complete";
import {ExampleMediaBasic} from "./example-media-queries/ExampleMediaBasicComplete";
import {ExampleMediaReuse} from "./example-media-queries/ExampleMediaReuseComplete";
import {ExampleFacepaint} from "./example-media-queries/ExampleFacepaintComplete";
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
]