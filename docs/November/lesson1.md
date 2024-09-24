# Lesson 1: JavaScript basics

> This self study guide will teach all you need to know about JavaScript.

# Day 1

## Installing NodeJS

- Go to their official [website](https://nodejs.org)
- Click download for your operating system
- For MacOS drag and drop the app into the applications folder
- For Windows use the built in installer
- For WSL Linux type in `sudo apt install node`

## Create a JavaScript file

- Go on visual studio code
- Create a new ".js" file

## Start using JavaScript

To print "hello world" to the terminal you can do

```javascript
console.log("hello world");
```

This will do the same thing as print("Hello World")
on Python3

<details>
<summary>Try adding a semi-colon? Does the code give an error</summary>
<br>
The code does not give an error as JavaScript like the majority of programming languages require a semi-colon to end a line. This is unlike Python which is a unique language in this case. JavaScript is a hybrid as it neither requires nor does not support the use of semi-colons in code
</details>
<br />

# Day 2

## Python and JavaScript differences

### Variables

- Create a variable exactly as how you do in python
- Now is your variable going to change. This will determine if it is constant or not
- The "const" keyword creates a constant variable which **CANNOT** be changed.
- The "let" keyword creates a mutable (you can change it) variable which **CAN** be changed
- Use the keyword you want in **front** of the variable name

```javascript
const PI = 3.14159; // Immutable
let money = 9999; // Mutable
```

<details>
<summary>Have you noticed something? (Hint: look after the semicolon)</summary>
<br>
The "//" character represents a comment in JavaScript. This is the same as how Python uses "#" as a comment. You will notice this change with other programming languages with some using other characters as a symbol for comments.
</details>
<br />

### Conditionnals and loops

- First, create a python if statement like this

```python
if (age > 18):
  print("access allowed")
elif (age > 13):
  print("Must be with a parent")
else:
  print("Not allowed")

```

- Then replace the colon for indentation with a pair of curly brackets
- The start goes where the usually is and the end goes right before the next condition

Your conditionnal will now be like this

```javascript
if (age > 18) {
  print("access allowed");
} elif (age > 13) {
  print("Must be with a parent");
} else {
  print("Not allowed");
}
```

- Remember how to print in JS? Think for 30 seconds
- Thats right! You use console.log();
- Now replace all the print statements with console.log!

```javascript
if (age > 18) {
  console.log("access allowed");
} elif (age > 13) {
  console.log("Must be with a parent");
} else {
  console.log("Not allowed");
}
```

We're still not done. You see how the "elif" has no color? This means it is not a valid statement.

- Replace the "elif" with "else if"

Now you have your full if/else/else structure

```javascript
if (age > 18) {
  console.log("access allowed");
} else if (age > 13) {
  console.log("Must be with a parent");
} else {
  console.log("Not allowed");
}
```

<details>
<summary>What is different about about the elif statement</summary>
<br>
Instead of using the word elif it uses the words else and if and if you use "elif" it will give an error.
</details>
<br />

Note that we use curly brackets to denote conditional loops and functions. Any thing inside the curly bracket is part of the function

<details>
<summary>What major part of python is technically optional in JavaScript</summary>
<br>
Indentation! You do not technically need to indent your code, but you should to make your code more readable and user-friendly
</details>
<br />

# Day 3

Now we can talk about where Python and JavaScript truly separate. This is with for loops.

To create a for loop in JS follow these steps

- Create a for loop in python like this

```python
for i in range(5):
  print(i)
```

- JavaScript uses a different way of formatting
- instead of

```python
for i in range(5)
```

- it uses

```javascript
for (let i = 0; i < 5; i++)
```

Now it looks like this is too complicated, but we will go step by step.

- The variable i (current number) is initialized at zero
- This is the same as python, but we have to state it explicitly
- Now the next part "i < 5" will say to run until the condition is not fulfilled. In this case it will tell python to run until the current number is **NOT** less than 5

- The next part "i++" is a short form of i = i + 1 or i += 1. The only thing this done is every time the loops run it will increaser i by 1.

- In conclusion this loop will set the current number to zero, run the loop until the number is greater than or equal to 5, and increase the current number by one each time the loop runs.

Now we have this

```javascript
for (let i = 0; i < 5; i++):
  print(i)
```

- Now remember to use curly brackets instead of indentation
- and to change print to console log

and we are done!

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

# Day 4

## Functions

This day will be dedicated to functions and classes in JavaScript

To define a function in JS first create a python function

```python
def a(i):
  return i*2
```

- First replace the `def` keyword with the `function` keyword
- Next use curly braces as before
- You're done!

The end result is this

```javascript
function a(i) {
  return i * 2;
}
```

What is unique about JavaScript is that a function can be a variable.
To convert a function to a variable, you have to just say

```javascript
const myfunc = function (i) {
  return i * 2;
};
```

This will create a function named `myfunc` as a variable

The last type of function we will use is the arrow function. This type of function does not require any keyword, but my be less intuitive to some people.

```javascript
const myfunc = (i) => {
  return i * 2;
};
```

<details>
<summary>Is this a variable function?</summary>
<br>
Yes! This function has the keyword const for a variable and is thus a variable.
</details>
<br />

## Classes

Heres an example python3 class

```python
class Car:
  def __init__(self, color):
    self.color = color
  def drive():
    print("Vroom")
```

to convert this into JavaScript

- Convert the functions and add curly braces to the class
- change the name of `__init__` to `constructor` and remove the function keyword
- remove self and use `this` and not `self` (you don't need to add this as a parameter)
- Convert the other pieces of code such as the print statement

The new JS class is

```javascript
class Car {
  constructor (color) {
    this.color = color
  }
  function drive () {
    console.log("Vroom!");
  }
}
```

<details>
<summary>What do both "this" and "self" represent?</summary>
<br>
They represent the object it is modifying.
</details>
<br />

# Day 5

This lesson is dedicated to the smaller differences between the two languages

## Import

To import something in javascript use the import statement

```javascript
import {function} from "package"
```

## Arrays

Arrays are similar as in Python, but you can't call on arr[-1]

```javascript
const arr = [1, 2, 3];
```

You can also arrays using the **new** keyword

- Create a variable with a name
- Set it to a `new Array()`
- Add the elements in the list as parameters

```javascript
const arr = new Array(1, 2, 3);
```

## Dictionaries/Objects

A dictionary and object are the same thing in Python and JavaScript, you even use the same curly bracket notation to define one

```javascript
const mydict = {
  name: "bob",
  age: 15,
};
```

Note that you do not need quotes on the key unlike python

Now you can call

```javascript
console.log(mydict.age);
```

Output

```
15
```
