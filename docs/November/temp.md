# Day 2

## Creating the project

To create a basic ReactJS project open the **terminal** and type `npx create-react-app <your project name>`
Replace `<your project name>` with the name you want.
This will create a new folder containing your application

# Day 3

## Create a basic page

Go to the src folder of your new project and then the App.Js file. This will contain the HTML and JavaScript you need to get started
Remove all the code in the project and add this

```javascript
import logo from "./logo.svg";
import "./App.css";

function App() {
  return <div>Hello World</div>;
}

export default App;
```

# Day 4, 5, 6, 7 (Watch 10-15 min of the video per day)

This will create an empty page with the text hello right now. Try adding more tags by going on Net Ninjas HTML [tutorial](https://www.youtube.com/watch?v=mbeT8mpmtHA&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&index=2) (Episode 2 and 3) and learning some tags. He will use basic HTML, the only difference is that you must put your html code in the return statement and instead of "class" you type "className".

## Primary HTML Tags

```html
<a href="/">Hey! Im a Link</a>
```

This is an "a" tag. This representss a link to another page on the website such as the login page. The href represents where you want to go. Relative routes are to go to any page in the website. For example if you want to go to the login page hosted at /login the href value would be '/login'. For external websites you would type its HTTPS address

# Day 8

## Styling

To style this Hello world component you can use CSS. First add a class name so the CSS knows what to modify.
You can enter any name, but you should use a descriptive name. In this example we will call this main-text

```jsx
import logo from "./logo.svg";
import "./App.css";

function App() {
  return <div className="main-text">Hello World</div>;
}

export default App;
```

# Day 9, 10, 11 (Watch 10-15 min per day)

Now that we have a class name to identify it we can style it. Go to App.css to further modify it. Again remove everything and add this. Try adding more styling on CSS elements by refering to Net Ninjas HTML and CSS [tutorial](https://www.youtube.com/watch?v=mbeT8mpmtHA&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G&index=2) (Episode 4)

```css
.main-text {
  color: blue;
}
```

This will make all elements with the class "main-text" the color blue.

Lets add some interactivity to the page

# Day 12

## JavaScript

First go back to App.js add a button the user can click by using the button tag

```jsx
import logo from "./logo.svg";
import "./App.css";

function App() {
  return;
  <>
    <div className="main-text">Hello World</div>
    <button>Click Me</button>
  </>;
}

export default App;
```

Then we will use the on click prop (field) to run a piece of code when the button is clicked

```jsx
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-text">Hello World</div>
      <button onClick={() => console.log("Hello!")}>Click Me</button>
    </>
  );
}

export default App;
```

# Day 13, 14

Lets make some more complex program. We will make a program that will continously increase the number on display when clicked. Import the "useState" function from react. This will create a variable caleld number and a function that sets the number to any value. Const means a constant value that wont change directly, but can be changed indirectly such as with use state. The useState function takes in a prop which is the default value of number. Refer to [this](https://react.dev/reference/react/hooks) for more info on hooks

```jsx
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className="main-text">{number}</div>
      <button onClick={() => setNumber(number + 1)}>Click Me</button>
    </>
  );
}

export default App;
```

The {} shows that you will pass on a variable instead of raw text. Now when you click the button the number will go up
