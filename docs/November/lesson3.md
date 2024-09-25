# Lesson 3: JavaScript and HTML/CSS

> This self study guide will go over how to integrate JavaScript with your HTML and CSS code. This will allow your website to not become boring like edward

In this lesson we are going to be building a number guesser.

## App Description

- This will choose a number between 1 and 100
- If the number is up to 5 greater or lesson, it is hot
- If it is up to 10 it is warm
- If it is up to 30 it is cool
- Else it is freezing

<details>
  <summary>Try making an if/else if/else (Hint use the Math.abs() function for absolute val) conditional with this game</summary>
  Solution <a href="https://codefile.io/f/JoJs0P97Zr">here</a>
</details>

## HTML Creation

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

## HTML Forms

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
</form>
```
