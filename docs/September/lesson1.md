# Lesson 1: Your First Program

## Programming Basics

> This lesson will go over how to make your first program in Python which is one of the most popular, simple and widely used programming languages out there. This will teach basic concepts such as output, input, variables, loops and conditionels. This lesson will assume you have a working Python environment using Python (**3.10.12**) or later.

### Output

> To print text into the conosle, use the print("function)

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
