# Lesson 2: Conditionals and Loops

## Programming Basics

> This lesson will go over how to loop over data and use conditionals to add dynamic code to your project. This lesson will assume you have a working Python environment using Python (**3.10.12**) or later.

### Conditional

> To check if a variable is equal to a value, use the if statement

> ```python
> age = 5
> if (age == 5):
>    print("You are 5 years old")
> ```
>
> Output:
>
> ```
> You are 5 years old
> ```
>
> Note that we used two equal signs. This notes that it is a condition, not a declaration of a variable. Code that runs after a condition is true **must be indented either 2 or 4 spaces** relative to the statement

> To use the greater, greater or equal, less, less or equal signs, use the following signs in order
> \> (greater), >= (greater or equal), < (less), (<=) less or equal
>
> ```python
> age = 4
> if (age < 5):
>    print("You are less than 5 years old")
> ```
>
> Output:
>
> ```
> You are less than 5 years old
> ```
>
> The same is true for all the other signs
>
> #### Negation
>
> To run the statement if the condition is NOT

### Variables

> Variables store data into memory to be accessed later. A variable must have a name to be assigned and a value. To decalre a variable type this

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
> These values represent text and is surruounded with single or double quotes
>
> ```python
> name = "bob"
> name2 = 'john'
> ```
>
> #### Integers
>
> These values represent a non decimal number postive or negative
>
> ```python
> age = 15
> score = 99
> ```
>
> #### Floats
>
> These values represent a postive or negative decimal
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
> To recieve an input from the user and store it into a variable, use the input() function
>
> ```python
> name = input("Please enter your name")
> ```
>
> To use recieve non-strings as input, you must convert it into that type
>
> ```python
> age = int(input("Please enter your name"))
> cost = float(input("Please enter the cost"))
> ```
>
> For boolean, an empty string or the number 0 is False, while other values are considered True

## Next Steps

> Read the next lesson
