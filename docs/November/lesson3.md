# Lesson 3: JavaScript and HTML/CSS

> This self study guide will go over how to integrate JavaScript with your HTML and CSS code. This will allow your website to not become boring like edward

In this lesson we are going to be building a number guesser.

## Day 1

### App Description

- This will choose a number between 1 and 100
- If the number is up to 5 greater or lesson, it is hot
- If it is up to 10 it is warm
- If it is up to 30 it is cool
- Else it is freezing

<details>
  <summary>Try making an if/else if/else (Hint use the Math.abs() function for absolute val) conditional with this game</summary>
  Solution <a href="https://codefile.io/f/JoJs0P97Zr">here</a>
</details>

### HTML Creation

Lets start by creating an empty HTML file. Use the `!` shortcut to create some boilerplate code.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

Steps

- Lets give this website a good name.
- Add an `h1` element that describes the app

## Day 2

### HTML Forms

Forms are a special HTML element contained of multiple elements. These elements work together to create a form.

The two that we will be using are Inputs and Buttons

### Input

- Input records data typed by the user, such as a guess.
- It will then send this to the JavaScript when submitted

### Button

- Buttons are elements that when clicked on, and inside a form submits a form
- Buttons can also do actions independently of a form

### Code

Now to create a form with an input and button type this

```html
<form>
  <input id="guess" type="text" />
  <label for="guess">Enter a number</label>
  <button type="submit">Guess!</button>
  <h1 id="out"></h1>
  <h1 id="num">0 Guesses left</h1>
</form>
```

Now what is a label. A label is an element that describes an input

#### Labels

What do labels need

- Content that describes the input
- The id of the input it is describing

#### IDs

Now you see the ID prop on these elements. You might be wondering what are IDS

IDs are similar to classes in that it tells HTML what to modify, but are generally used for one or a few elements. Therefore they take precedence over classes during a conflict.

IDs must be unique in the entire page unlike edward who can't be unique a single time

<details>
  <summary>If an object represents a large number of student names, should you use an ID or Class</summary>
  You should use a class is it describes a large amount of data
</details>

## Day 3

Now lets start writing JS code. First we need to wait for all the HTML load (DOM).
To do that type this

```javascript
document.addEventListener("DOMContentLoaded", init);
```

`document` refers to the HTML document. This code waits until the DOM is loaded then runs the init function. Now we dont have an init function just yet. Lets create one at the top!

```javascript
const init = () => {
  document.getElementById("button-send").addEventListener("click", calc);
};
```

This piece of code will get the `button-send` and wait until it is clicked

If it is clicked it will run the calculate function.

Now lets make the calculate function.

Remember the exercise from before. Copy that code into the document (See homework is useful kids!)

```javascript
const calc = function () {
  let diff = Math.abs(num - parseInt(guess));

  if (diff === 0) {
    console.log("CORRECT");
  } else if (diff <= 5) {
    console.log("HOT");
  } else if (diff <= 10) {
    console.log("WARM");
  } else if (diff <= 30) {
    console.log("COOL");
  } else {
    console.log("FREEZING");
  }
};
```

- Now lets create a variable called output and set the values instead of logging them.
- Then lets run `e.preventDefault` which will not do the default action and run the function instead. For this we need to take e which is the event handler (we will explain this later)
- Next lets get the elements value by making the guess equal to the `document.getElementById("guess").value`
  - This will get the element with ID "guess" and get the value contained inside

Our code currently looks like this

```javascript
const calc = function (e) {
  e.preventDefault();
  const guess = document.getElementById("guess").value;
  let diff = Math.abs(num - parseInt(guess));

  if (diff === 0) {
    out = "CORRECT";
  } else if (diff <== 5) {
    out = "HOT";
  } else if (diff <== 10) {
    out = "WARM";
  } else if (diff <== 30) {
    out = "COOL";
  } else {
    out = "FREEZING";
  }
};
```

## Day 4

Next we need to show this `out` to the user.

First lets modify the element with the class out which represents the output `h1`

Right now it is empty, but we cant modify it with this

```javascript
document.getElementById("out").innerHTML = `${out}`;
```

The backticks in JS allow you to insert variables into string by inserting the variable name between `${}`

This will set the content of the element with id `out` to `${out}`

Next we need to generate a random number

We will create a random generator function that will generate an integer from 1 to 100

```javascript
const genNum = () => Math.floor(Math.random() * 100);

let num = genNum();
```

genNum is an arrow function. If it is a one line with no curly brackets, the content after the arrow is automatically **returned**

Then we set a **global** variable that will represent the current number

Now we need to reset the number when a correct attempt is created

To do this we can just set the num = genNum(); in the function

```javascript
if (diff === 0) {
  out = "CORRECT";
  num = genNum();
}
```

Our application is now done for the core features. You can continue and learn how to do bonus features.

## Day 5

### Bonus
