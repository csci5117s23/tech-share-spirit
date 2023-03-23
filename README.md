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
npm install --save @emotion/react
```

### Setting up CSS Prop

Every file that uses the ``css`` prop (which we will discuss below), must add the following pragma directives to the top
of your file:

```
/** @jsx jsx */
/** @jsxRuntime classic */
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

TODO