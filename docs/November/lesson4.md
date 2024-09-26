# Lesson 4: ReactJS Basics

> This self study guide will go over the basics of ReactJS and how to use it in integration with the other technologies we have mentioned including HTML, CSS and JS

## Day 1

### Create a ReactJS App

To create a ReactJS app, you need NodeJS installed. If not refer to the first lesson

Next, run this in the terminal

```
npx create-react-app@latest my-app
```

Replace my app with the name of your application

This will intialize a new react application

Now that you have opened the new folder created we need to go to our HTML.

Now you don't see any HTML files do you. ReactJS uses JSX which adds your HTML inside the JavaScript directly.

### JSX

JSX is a special technologies designed to integrate HTML into your JavaScript. The HTML is code is the result of the returned function. For example

```jsx
function MyApp() {
  return <div>Hello</div>;
}
```

In this example we are going to build a Singe Page app. If you want to learn how to do a multi page application with routes, please consult our resources section.

<details>
  <summary>Does JSX add JavaScript to HTML</summary>
  No! JSX adds HTML to JavaScript, thus the opposite. This is unlike Svelte which adds JS to Html with the .svelte extension.
</details>

### Start

Lets add some basic HTML code. We do not need to add the boiler plate code as that is already handled.

Lets just directly add a `div` element which is just a container and does not add anything along with `h1` and `p` tags

```jsx
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <p>The app</p>
    </div>
  );
}

export default App;
```

ReactJS requieres there only be one parent element. If you do not want any outer tag that modifies it, use a the fragment element `<></>`
For example

```jsx
<>Hello</>
```

### Adding variables

You can add variables directly to your HTML. This is used with curly brackets

You add it like this

```jsx
const app = () => {
  const name = "Bob";
  return <div>{name}</div>;
};
```

You can also use conditions and loops to map through arrays to provide html elements. Lets try to do that

- First create an array of objects (in this case names)
- Then use curly brackets and call array.map()
- Then we called a **anoynmous function**
  - These are functions with no name. These functions are typically use in props such as onClick
  - They must be arrow functions
- If there is **exactly one** prop in an arrow function, you do not need brackets
- This `element` object represents each item in the array
- We need a `key` prop to identify this element
- Then we render the element using curly braces

```jsx
const app = () => {
  const myarr = ["Shishi", "The Han Han", "Nimmy", "Timmy"];
  return (
    <div>
      {myarr.map((element) => {
        <div key={element}>{element}</div>;
      })}
    </div>
  );
};
```

Now we see all the elements listed out in order

If we change the list, the HTML will be updated accordingly. No more `document.getItemByID.innerHTML` now!

Now lets move on to the next topic Hooks!

## Day 2

### Hooks

Hooks are functions that allow you to use React functions in your components. The two we are going to use are `useState` and `useEffect`

#### Use State

Use state are hooks that keeps tract of the state of an object. Unlike variables when a state is changed, the entire page reloads.

Remove everything and add some boilerplate

```jsx
const app = () => {
  return <div></div>;
};
export default app;
```

We are going to make a counter and when the button is pressed it will increase by one.

- First add a button element that will increse the number
- Next add a button that will reset the counter

```jsx
const app = () => {
  return (
    <div>
      <button id="increase-button">Increase</button>
      <button id="reset-button">Reset</button>
    </div>
  );
};
export default app;
```

Now lets use the use state. We set an array to the imported `useState` function. VSCode should auto import, but if not import manually.

```jsx
const app = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button id="increase-button">Increase</button>
      <button id="reset-button">Reset</button>
    </div>
  );
};
export default app;
```

The first element in the array represents the count, and the secondElement is a function that sets the count. The parameter in `useState` is the default value, in this case 0

- Next create an `h1` with the content to the count variable
- Also set the onClick prop of the button (This will be a function stored on click) to set the count to the count + 1
- Finally, make the reset button set the count to 0

```jsx
import { useState } from "react";
const app = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{Count}</h1>
      <button id="increase-button" onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button id="reset-button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};
export default app;
```

<details>
  <summary>Why do we need curly brackets inside onClick</summary>
  Because this is running JavaScript code. All JS Code needs curly brackets
</details>

Note that we do not need curly brackets in one line code

We will still use the counter app so don't delete it

#### The `useEffect` hook

The useEffect hook runs by default when the application is reloaded. It also runs when the variables you selected are changed. These are called **dependencies**

First import the useEffect hook and copy this above the return, but after variable defintion

```jsx
useEffect(() => {}, []);
```

This will run the useEffect hook. The array represents the variables that when changed will be re run. If this prop is removed, it will always run. If the prop is an empty array, it will ignore variable changes.

- Lets add our count to this array
- Next lets run `console.log(count)` when changed

Now our code is like this

```jsx
import { useState, useEffect } from "react";

const app = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <h1>{Count}</h1>
      <button id="increase-button" onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button id="reset-button" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};
export default app;
```

## Day 3

### Challenge

Create the app we made in Lesson 3 using React. Make sure to add useState and useEffect to this application.
