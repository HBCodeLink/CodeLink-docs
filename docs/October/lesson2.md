# Lesson 2: Conditionals and Loops

## Day 3

## Programming Basics

> This lesson will go over how to loop over data and use conditionals to add dynamic code to your project. This lesson will assume you have a working Python environment using Python (**3.10.12**) or later.

## Conditional

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
> ### Negation
>
> To run the statement if the condition is NOT True use the exclamation mark ! or use the not keyword
>
> ```python
> name = "Bob"
> if (name != "John"):
>    print("Your name is Bob")
> ```
>
> This piece of code run if the name is NOT "John"
>
> ### Else statements
>
> This piece of code runs if the previous condition is not true. For example if the age is not greater than 15 than can run another condition
>
> ```python
> name = "Bob"
> if (name != "John") # Name is NOT John
>   print("Your name is not John")
> else: ## Name is John
>   print("Your name is John")
> ```
>
> The else statement will run **ONLY** if the name is John
>
> ### Else if statements
>
> This piece of code runs if the previous condition is not true. Unlike an else this includes a condition. Multiple elif statements can be used in parallel going from the top to the bottom
>
> ```python
> name = "Bob"
> if (name == "Bob")
>   print("Your name is Bob")
> else if (name == "John"):
>    print("Your name is John")
> else if (name == "Edward"):
>   print("Your name is Edward")
> else:
>   print("Your name is not Bob John or edward")
> ```
>
> #### Output
>
> ```
> Your name is Bob
> ```
>
> The code will run top to bottom from the if to the else. If the condition isn't met it will go to the next statement.

## Day 4

## Loops

Loops make it easier to run a piece of code continuously until a condition is fulfilled. There are 2 main types of loops: a while loop and a for loop

### While Loops

While loops run until a condition is fulfilled. If that condition is not fulfilled it will continue running. If you put while (True) it will run forever, while doing While(False) will make it not run

```python
password = ""
while (password != "password123")
  password = input("Please enter the password ")
print("Access Granted")
```

#### Input

```
Please enter the password bob
Please enter the password bob2
Please enter the password password123
```

#### Output

```
Access Granted
```

### For Loops

For loops run for a set number of times, not until a condition is fulfilled. For example you can make it run 3 times then exit.

```python
for i in range(5):
  print(i)
```

#### Output

```
0
1
2
3
4
```

In this loop i represents the current number and range(5) represents the number **up to 5, but not including 5** (0, 1, 2, 3, 4)

#### Break statements

Break statements manually exit the loop even if the outer condition is not fulfilled or the set number of times the loop should run is not reached

```python
for i in range(5):
  print(i)
  if (i == 2):
    break
```

#### Output

```
0
1
2
```

## Next Steps

Read the next lesson (1.3)
