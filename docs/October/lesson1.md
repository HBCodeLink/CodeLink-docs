# Lesson 1: Your First Program

## Day 1

> This lesson will go over how to make your first program in Python which is one of the most popular, simple and widely used programming languages out there. This will teach basic concepts such as output, input, variables, loops and conditionals. This lesson will assume you have a working Python environment using Python (**3.10.12**) or later.

### Output

> To print text into the console, use the print("function)

> ```python
> print("Hello World!")
> ```
>
> Output:
>
> ```
> Hello World!
> ```
>
> This function will output Hello World! into the terminal. Text must be wrapped within quotes (This is called a string)

> To print a number, you can do the same thing without the quote as numbers are not a string
>
> ```python
> print(9)
> ```
>
> Output:
>
> ```
> 9
> ```

<details>
  <summary>Why do you not need a single or double quote for numbers</summary>
  This tells Python3 to perform calculations like they are number, not characters in text. While you can print "3" you can't do "3" * 3
</details>

### Variables

> Variables store data into memory to be accessed later. A variable must have a name to be assigned and a value. To declare a variable type this

> ```python
> age = 15
> ```
>
> This will assign the variable "age" to the value 15. This value can be access later in different situations, by replacing the value with the variable
>
> ```python
> print(age)
> ```
>
> Output:
>
> ```
> 15
> ```
>
> The value can be modified later also, but it will only apply to the lines after it is changed
>
> ```python
> age = 10
> print(age)
> age = 15
> print(age)
> ```
>
> Output:
>
> ```
> 10
> 15
> ```
>
> There are 4 main types of variables we will go in this lesson each representing different values
>
> #### Strings
>
> These values represent text and is surrounded with single or double quotes
>
> ```python
> name = "bob"
> name2 = 'john'
> ```
>
> #### Integers
>
> These values represent a non decimal number positive or negative
>
> ```python
> age = 15
> score = 99
> ```
>
> #### Floats
>
> These values represent a positive or negative decimal
>
> ```python
> cost = 4.99
> length = 9.87
> ```
>
> #### Booleans
>
> These values represent a value of either True or False
>
> ```python
> is_allowed = True
> is_male = False
> ```
>
> ### Input
>
> To receive an input from the user and store it into a variable, use the input() function
>
> ```python
> name = input("Please enter your name")
> ```
>
> To use receive non-strings as input, you must convert it into that type
>
> ```python
> age = int(input("Please enter your name"))
> cost = float(input("Please enter the cost"))
> ```
>
> For boolean, an empty string or the number 0 is False, while other values are considered True. Even the string "False" is considered True!

## Day 2

### Math Basics

Now we will learn math operators in python
Here are the primary operators

```python
from math import *

a = 5
b = 2
print(a+b) # Addition
print(a-b) # Subtraction
print(a*b) # Multiplication
print(a/b) # Division
print(a**b) # Exponentiation
print(sqrt(a)) # Square Root
print(a%b) # Modulo
```

You can also use more functions from the Python math module

```python
import math

print(math.sqrt(a)) // Square Root
print(math.ceil(a)) // Ceiling (9.2 -> 10)
print(math.floor(a)) // Floor (9.2 -> 9)
print(math.e) // e = 2.7
print(round(a)) // Rounds a number
```

<details>
  <summary>Why do you need to import math?</summary>
  Math is an built in python library. The reason it is not built in is that it only loads if you need it. If you do not need it, it is a waste of time importing more functions.
</details>

### Functions

Functions are a piece of code that has one or many input and a singular output. These can be repeated any number of times without having to manually re-write code.

To define a function use the `def` keyword and the name of the function with a colon. All code **INSIDE** the function is indented, while code outside is not.

```python
def myfunc:

```

Now we need some arguments. In this case we are going to make an addition function that will add two numbers. We need two numbers for the user to enter so we are going to have 2 parameters (`a` and `b`)

```python
def myfunc(a, b):

```

Now we need to compute the function. Lets make a variable c that represents the output

```python
def add_two_numbers(a, b):
  c = a + b
```

Variable c is a **local** variable. This means it can't be used outside the function and has a higher priority than a **global** variable (outside the function). We will talk about this in the next few lessons, but remember to keep it in mind.

Now we need to return c to the program. Now what is returning? This means that if the input is (1, 2) the output (returned value) should be 3.

We can do that with the `return` keyword

```python
def add_two_numbers(a, b):
  c = a + b
  return c
```

<details>
  <summary>How can we simplify this?</summary>
  We can directly return `a+b` without making a separate variable by just saying `return a + b`
</details>

## Next Steps

> Read the next lesson
