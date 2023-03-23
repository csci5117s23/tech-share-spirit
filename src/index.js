import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ExampleRender} from "./ExampleRender";

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
            (<div>Row 1</div>),
            (<div>Row 2</div>),
            (<div>Row 3</div>)
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