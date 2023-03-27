import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ExampleRender} from "./ExampleRender";
import {Example1} from "./examples/example-css-prop/Example1";
import {Example1Complete} from "./examples/example-css-prop/Example1Complete";
import {examples} from "./examples/exampleDirectory";

const root = ReactDOM.createRoot(document.getElementById('root'));

const allExamples = [
    {
        id: "", // base
        name: "Home",
        elements: [
            <div>Welcome! Please choose an example from the tab above.</div>
        ]
    },
    ...examples
]

const routes = allExamples.map(example => ({
    path: `/${example.id}`,
    element: <ExampleRender elements={example.elements} key={example.id} examples={allExamples}></ExampleRender>
}))

const router = createBrowserRouter(routes)

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);