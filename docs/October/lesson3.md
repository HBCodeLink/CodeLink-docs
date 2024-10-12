# Lesson 3: Object Oriented Programming

## Day 5

## Overview

> This self-study guide will cover how to use object oriented programming. This will include making classes, constructors and methods inside classes, along with calling these functions. This lesson will assume you have a working Python environment using Python (**3.10.12**) or later, though you only need version **3.0.0** to follow **most** of the course

## Classes

> Classes can represent any object that has **properties** and/or functions. For example a car has properties of the number of wheels, the length width, etc... Classes can also include subclasses such as a wheel for the example of a car.>

## Declaration

> To declare a class use the class keyword follow by the name of the class. Like functions the contents of the class **MUST** be indented

```python
class Car:
```

## Fields and Constructor

> The fields of the class are variables that the class needs such as wheels or length in the previous example. Constructors are a function that is called when the class is initialized. This can include setting default values or setting values from the user.

> In python a constructor **MUST** be called "\_\_init\_\_"

> Heres an example of a field and constructor.

```python
class Car:
    __init__(self, brand, color, integrity):
      self.brand = brand
      self.color = color
      self.integrity = integrity
```

> Note that the first argument is self representing the object that is created

## Day 6

> As said before classes can have functions that can modify that data or perform another task. As an example of a car we can repair it increasing the integrity

```python
class Car:
    __init__(self, brand, color, integrity):
      self.brand = brand
      self.color = color
      self.integrity = integrity
    repair(self):
        if (self.integrity > 80):
            self.integrity = 100
        else:
            self.integrity += 20
```

> This will increase the cars integrity by 20% when called

## Create an object

> To create an object of the class you can just initialize a variable of the class

```python3
car1 = Car("Toyota", "red", 99)
```

> This will create a red toyota with 99% integrity

> Create a class plan which represents the properties of a plane such as length, capacity, color, maker etc...
> Make sure you add a constructor and some functions such as fly and land

## Challenge

Create a `Student` Class that represents a student. These should be the fields

```
grade
name
age
gpa
teachers (array of strings)
```

and should have these functions

```python
# Modify the students GPA based on the grade and weight of the test in decimal 50% -> (0.5)
def test (grade, weight):
  # Changes the GPA
```

```python
def attend_class(number):
  # Prints attending class period: number
```
