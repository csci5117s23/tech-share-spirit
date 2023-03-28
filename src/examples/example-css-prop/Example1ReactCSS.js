import React from 'react';
import './example1react.css';

export const Example1ReactCSS = () => {

    return (<>
        <div style={{
            backgroundColor: "#8c1c68",
            color: "#ffffff"

            // Hover text?? Can't be specified here, need to import a CSS file.
        }}
             className="blue-hover-text" // Also, need to use !important because of precedence 😬
        >
            Hover me to turn purple!
        </div>
    </>)
}