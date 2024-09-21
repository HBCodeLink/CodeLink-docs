# Lesson 2: Object Oriented Programming

## Overview

> This self-study guide will cover how to use object oriented programming for more advanced cases. This will include inheritance, abstraction, encapsulation and polymorphism This lesson will assume you have a working Python environment using Python (**3.10.12**) or later, though you only need version **3.0.0** to follow **most** of the course

## The 4 Pillars of Object Oriented Programming

> There are 4 main pillars in Object-Oriented Programming or (OOP) which are essential for good code. These are abstraction, inheritance, encapsulation and polymorphism

## Inheritance

> Inheritance is when you a class is based on another class. For example you can have a vehicle class, and subclasses inheriting from them such as cars, trucks and planes

```python
class Vehicle:
  __init__(self, color, speed):
    self.color = color
    self.speed = speed
  drive(self):
    print("Driving at ", speed)


class Car(Vehicle):
  __init__(self, color, wheels, speed):
    self.color = color
    self.speed = speed
    self.wheels = wheels

class Boat(Vehicle):
  __init__(self, color, speed, captain):
    self.color = color
    self.speed = speed
    self.captain = captain
```

## Abstraction

> Abstraction is when you hide the background process going on to do a task, and only see the end result of the task which is the only thing they need to see.

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

## Next Steps

Read about OOP on W3Schools if you want more information or continue to the next lesson
