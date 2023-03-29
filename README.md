# Emotion Tech Share

Team Spirit, 3/29/23

## Using this Example Repository

Set up the examples we're going to go through in this tech share.

### Clone Repository

```
git clone https://github.com/csci5117s23/tech-share-spirit.git
```

### Setup Project

```
npm install
npm run start
```

## Setting up Emotion

Our guide follows using Emotion with React and Create-React-App specifically. Emotion is framework agnostic and can be
set up with other techniques, please consult the [official installation docs](https://emotion.sh/docs/install).

### Package Install

```
npm install --save @emotion/react @emotion/styled facepaint
```

### Setting up CSS Prop

Every file that uses the ``css`` prop (which we will discuss below), must add the following pragma directive to the top
of your file:

```
/** @jsxImportSource @emotion/react */
```

These lines are necessary for ``create-react-app`` because we cannot add custom Babel configurations with CRA. If you
are using your own webpack setup, you can also follow the [Babel preset](https://emotion.sh/docs/css-prop#babel-preset)
setup if you do not want to add these two pragmas everywhere that you use the ``css`` prop.

# Examples

### Example Structure

All examples we will show in class are within the ``src/examples/`` folder. These consist of two files each:

```
ExampleN.js
ExampleNComplete.js
```

Each example contains the structure to follow along with what we are showing in class, and you can see the complete
example
on the right to see what your end-goal is.

## Example 1: CSS in JS

This example walks you through how to use the ``css`` prop in emotion to apply CSS styles in JS.

It also covers nested selectors and variable interpolation.

### Creating the div

Let's start with a simple div.

```jsx
<div>
    Hover me to turn purple!
</div>
```

### Adding the CSS styles

We can use object styles just like in regular React, but with some extras. However, one more interesting part of Emotion
is the `css` prop, which allows us to write standard CSS, except we can also include JS variables in the mix!

To add in the background color and text color, let's start with the basic css prop:

```jsx
<div css={css`

`}>
    Hover me to turn purple!
</div>
```

We can put regular CSS statements within the string templates here:

```jsx
<div css={css`
    background-color: red;
    color: blue;
`}>
    Hover me to turn purple!
</div>
```

This is great, but we **do not want to** copy and paste the variable contents of the provided
colors. Instead, we can use variable interpolation! Adding in ``${variableName}`` will substitute ``variableName`` into
the CSS prop.

```jsx
<div css={css`
    background-color: ${backgroundColor};
    color: ${textColor};
`}>
    Hover me to turn purple!
</div>
```

Now, let's add the hover color. Emotion provides **nested selectors** to allow us to do this easily. We can use
the ``&`` symbol to denote the *current class* whose CSS rules are applied to an element.

This would mean we can do ``&:hover`` to add in a hovering style.

```jsx
<div css={css`
    background-color: ${backgroundColor};
    color: ${textColor};
    
    &:hover {
      color: ${hoverTextColor};
    }
`}>
    Hover me to turn purple!
</div>
```

We'll add in the ``:focus`` and ``:active`` pseudo-classes too, just for good measure:

```jsx
<div css={css`
    background-color: ${backgroundColor};
    color: ${textColor};
    
    &:hover,:focus,:active {
      color: ${hoverTextColor};
    }
`}>
    Hover me to turn purple!
</div>
```

And we're done!

## Styled Components

This example covers styled components, highlighting the basic usage, how to use props with styled components, and how to use styled components with any react component.

### Basic usage

Start with a basic button

```jsx
<button>my button</button>
```

Styled components allow you to attach styling to a specific component. For example, lets say you want a flexbox div to put the button in. To accomplish this, you can create a new component and call styled with the div tag. 

```jsx
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
```

Now, you can use the Container component with the starting code. Note that the Container component has the styles specified earlier, and the standard div tag does not.

```jsx
<Container>
    <div>
        <button>my button</button>
    </div>
</Container>
```

### Usage with props

Styled components can also have different styles depending on the props used. For example, lets say you want to have two different background colors for a button component. 

```jsx
const success = "green";
const danger = "red";

const MyButton = styled.button`
    background-color: ${props => (props.success ? success : danger)};
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 50px;
    color: white;
`
```

The background color will be the success color if the MyButton component has the success prop, and will default to the danger color. Adding the MyButton component to the previous example looks like this

```jsx
<Container>
    <div>
        <MyButton success>my button 2</MyButton>
        <MyButton>my button 2</MyButton>
    </div>
</Container>
```

The first button will be green, and the second will be red

### Usage with any component

Styled components are not limited to basic html tags. You can use them with any react component as long as they accept a className prop.
As an example, lets use the clickable name component from the last lecture.

```jsx
import { useState } from "react"

export default function Name({className, name}){
    const [visible, setVisible] = useState(false);

    function toggleVisible(){
        setVisible(!visible);
    }
    if(visible){
        return <span className={className} onClick={toggleVisible}> {name} </span>
    }
    else{
        return <span className={className} onClick={toggleVisible}> Click to show! </span>
    }
}

```

Notice that it takes in an additional className prop, and that the className prop is used in the html returned. The syntax to make a styled react component looks like this

```jsx
const SpecialName = styled(Name)`
  color: purple;
  font-size: 50px;
  `
```

Finally, we can add this to the previous example

```jsx
<Container>
    <div>
        <MyButton success>my button 2</MyButton>
        <MyButton>my button 2</MyButton>
    </div>
    <div>
        <SpecialName name="me"></SpecialName>
    </div>
</Container>
```

## Media Queries
This section is formulated based on the [offical docs](https://emotion.sh/docs/media-queries) from Emotion.

### About Media Queries
Media query is a CSS technique that allows us to apply different style sheets on different devices. Most of you may have seen this before on the layouts provided by [Pure CSS](https://purecss.io/layouts/). Here is a very simple example of using media queries to change the background color of a div on different screen width:

React component in Javascript:
```jsx
import './exampleMedia1.css'

export function ExampleMedia1() {
  return <div class='exMedia1'>
    Some text.
  </div>
}
```

And the corresponding ``exampleMedia1.css``:
```jsx
.exMedia1 {
    font-size: xxx-large;
    background-color: green;
}

@media (min-width: 600px) {
    .exMedia1 {
        background-color: gray;
    }
}

@media (min-width: 800px) {
    .exMedia1 {
        background-color: hotpink;
    }
}
```
What the media queries in ``exampleMedia1.css`` do is to set the ``background-color`` of the ``div`` to ``hotpink`` when the width of screen is larger than ``800px``, set the color to ``green`` when the width is smaller than ``600px``, and set the color to ``gray`` otherwise.

### Basic Media Queries in CSS Props
With Emotion we can add the media queries directly to the ``css`` prop. And you do not need to specify any selectors inside the media query block. We can re-write the example above like this:

```jsx
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

export function ExampleMedia1() {
  return <div
    css={css`
      background-color: green;
      @media (min-width: 600px) {
        background-color: gray;
      }
      @media (min-width: 800px) {
        background-color: hotpink;
      }
    `}
  >
    Some text.
  </div>
}
```

### Reuse the Media Queries
One issue from the previous example is that the media queries are not reusable -- Imagine a situation like this: You have two or more different components that all have some style changes on breakpoints ``600px`` and ``800px``. Now you want to change the two breakpoint values to ``500px`` and ``900px``. What you may want to do is to go to each of the components that have these two breakpoint values and change them. This is repeated work and may lead to UI inconsistency if you are not careful enough.

In order to deal with this issue, Emotion allows us to move the media queries into a constant variable which can be shared between multiple different components. And each component can just refer to this variable whenever a media query occurs.

```jsx
/** @jsxImportSource @emotion/react */

export const breakpoints = [600, 800]

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export function ExampleMedia1() {
  return <div
    css={
      {
        backgroundColor: 'green',
        [mq[0]]: {
          backgroundColor: 'gray'
        },
        [mq[1]]: {
          backgroundColor: 'hotpink'
        }
      }
    }
  >
    Some text.
  </div>
}
```
As you can see in the code snippet above, other components can just refer to the exported constant ``breakpoints`` if they want to do media queries on the same breakpoints. (Note: We are using [object styles](https://emotion.sh/docs/object-styles) for the css prop in the code snippet above, you can also use string styles like before).

### Define Each CSS Property at Each Media Query Using Arrays
As you can see in this example above, we need to refer to the media queries variable multiple times for changing the same property ``backgroundColor`` at different breakpoints.

In order to deal with this issue, Emotion provides us a tool called "facepaint." Facepaint allows us to define the values of each CSS property at multiple breakpoints using an array.

```jsx
import facepaint from 'facepaint'

export const breakpoints = [576, 768]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export function ExampleMedia1() {
  return <div
    css={
      mq({
        backgroundColor: ['green', 'gray', 'hotpink']
      })
    }
  >
    Some text.
  </div>
}
```
As you can see the code snippet above, the css prop is much cleaner (Note: you must use the object styles here due to the limitaions of facepaint).

