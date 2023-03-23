import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ExampleRender} from "./ExampleRender";
import {Example1} from "./examples/example1-css-prop/Example1";
import {Example1Complete} from "./examples/example1-css-prop/Example1Complete";

const root = ReactDOM.createRoot(document.getElementById('root'));

const examples = [
    {
        id: "", // base
        name: "Home",
        elements: [
            <div>Welcome! Please choose an example from the tab above.</div>
        ]
    },
    {
        id: "ex1",
        name: "Example 1",
        elements: [
            (<Example1 />),
            (<Example1Complete />),
        ]
    }
]

const routes = examples.map(example => ({
    path: `/${example.id}`,
    element: <ExampleRender elements={example.elements} key={example.id} examples={examples}></ExampleRender>
}))

const router = createBrowserRouter(routes)

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);