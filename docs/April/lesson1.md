# Lesson 1: Intro to Numpy

## Lesson Overview

> This self-study guide will cover how to use NumPy arrays. We will explore array creation, indexing and array math. Although you will not directly deal with NumPy arrays for your final project, it is a useful tool to learn and understand. This lesson will assume you have a working Python environment using Python (**3.10.12**) or later.

## Installation

> The installation of NumPy is very simple. It requires only two steps:  
> 
1. Install the package (type into terminal):
```bash
pip install numpy 
```
2. Import the package (type into python file):
```python
import numpy as np
```

## Numpy Arrays
> A numpy array is a grid of values, all of the same type, and is indexed by a tuple of nonnegative integers. The number of dimensions is the "rank" of the array. The "shape" of the array returns the number of dimensions in the form of a tuple. It essentially tells you how many elements there are in each dimension.

> We can initialize numpy arrays from nested Python lists, and access elements using square brackets:
```python
import numpy as np

a = np.array([1, 2, 3])   # Create a rank 1 array
print(type(a))            # Prints "<class 'numpy.ndarray'>"
print(a.shape)            # Prints "(3,)"
print(a[0], a[1], a[2])   # Prints "1 2 3"
a[0] = 5                  # Change an element of the array
print(a)                  # Prints "[5, 2, 3]"

b = np.array([[1,2,3],[4,5,6]])    # Create a rank 2 array
print(b.shape)                     # Prints "(2, 3)"
print(b[0, 0], b[0, 1], b[1, 0])   # Prints "1 2 4"
```

> ### Practice
> What is the rank of the following array?
```python
a = np.array([[1, 2, 3], [3, 2, 1]])
```
> Answer: 2    
> 
> What is the shape of the following array?
```python
a = np.array([[9, 8, 7, 6], [3, 2, 5, 1]])
```
> Answer: a.shape = (2, 4)
>
> What is the output of the following line?
```python
a = np.array([[9, 8, 7, 6], [3, 2, 5, 1]])
print(a[0, 3], a[1, 2])
```
> Answer: 6 5
## Indexing
> Numpy offers several ways to index into arrays.

> Slicing: Similar to Python lists, numpy arrays can be sliced. Since arrays may be multidimensional, you **must** specify a slice for each dimension of the array
> 
```python
import numpy as np

# Create the following rank 2 array with shape (3, 4)
# [[ 1  2  3  4]
#  [ 5  6  7  8]
#  [ 9 10 11 12]]
a = np.array([[1,2,3,4], [5,6,7,8], [9,10,11,12]])

# Use slicing to pull out the subarray consisting of the first 2 rows
# and columns 1 and 2; b is the following array of shape (2, 2):
# [[2 3]
#  [6 7]]

b = a[:2, 1:3]  

# A slice of an array is a view into the same data, so modifying it
# will modify the **ORIGINAL** array. A slice is NOT a copy. This is
# a key concept with NumPy arrays.
print(a[0, 1])   # Prints "2"
b[0, 0] = 77     # b[0, 0] is the same piece of data as a[0, 1]
print(a[0, 1])   # Prints "77"
```
> ### Practice
> What is the output of the following lines of code?
```python
a = np.array([[1, 2, 3], [4, 5, 6]])
b = a[0:2, 0:2]
print(b)
```
> Answer: [[1, 2], [4, 5]]
> Using a and b from the previous question, what is the new output?
```python
b[1, 1] = 10
print(b)
print(a)
```
> Answer: [[1, 2], [4, 10]]  
>         [[1, 2, 3], [4, 10, 6]]
## Math
> Basic mathematical functions operate elementwise on arrays (Operation is applied to each element rather than the array as a whole). The reason why we use NumPy operations is that it can compute these operations **much faster** compared to regular array operations.
```python
import numpy as np

x = np.array([[1,2],[3,4]], dtype=np.float64) # dtype just means the datatype
y = np.array([[5,6],[7,8]], dtype=np.float64) # float64 are decimal numbers

# Elementwise sum; both produce the array
print(x + y)
print(np.add(x, y))
# [[ 6.0  8.0]
#  [10.0 12.0]]

# Elementwise difference; both produce the array
print(x - y)
print(np.subtract(x, y))
# [[-4.0 -4.0]
#  [-4.0 -4.0]]

# Elementwise product; both produce the array
print(x * y)
print(np.multiply(x, y))
# [[ 5.0 12.0]
#  [21.0 32.0]]

# Elementwise division; both produce the array
print(x / y)
print(np.divide(x, y))
# [[ 0.2         0.33333333]
#  [ 0.42857143  0.5       ]]

# Elementwise square root; produces the array
print(np.sqrt(x))
# [[ 1.          1.41421356]
#  [ 1.73205081  2.        ]]
```
### Practice
> What is the output of the following line
```python
x = np.array([[1,3],[23,69]], dtype=np.float64) # dtype just means the datatype
y = np.array([[69,23],[3,1]], dtype=np.float64) # float64 are decimal numbers
print(np.multiply(x, y))
```
> Answer: [[69, 69], [69, 69]]
## Next Steps
> If you want to learn more about NumPy, here are some resources:  
[W3schools](https://www.w3schools.com/python/numpy/default.asp) (Website)  
[freeCodeCamp](https://www.youtube.com/watch?v=QUT1VHiLmmI) (Video tutorial)  
> Otherwise, proceed to the next lesson!