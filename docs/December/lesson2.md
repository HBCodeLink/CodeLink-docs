# Lesson 2: PyTorch Basics

## Introduction

In this lesson, we'll explore the fundamental data structures in PyTorch that form the building blocks of deep learning models.

## Scalars

A scalar is a single number. In PyTorch, you can create a scalar tensor:

```python
scalar = torch.tensor(7)
```

Scalars are 0-dimensional tensors, often used for loss values or simple numerical operations.

## Vectors

A vector is a 1-dimensional array of numbers. Think of it as a line of values:

```python
vector = torch.tensor([1, 2, 3, 4])
```

Vectors are commonly used for representing features or single data points.

## Matrices

A matrix is a 2-dimensional array of numbers, organized in rows and columns:

```python
matrix = torch.tensor([[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]])
```

Matrices are essential for representing images, feature maps, or layers of neural networks.

## Tensors

Tensors are the generalization of vectors and matrices to higher dimensions. They're the core data structure in PyTorch:

```python
# 3D tensor
tensor = torch.tensor([[[1, 2], [3, 4]],
            [[5, 6], [7, 8]]])
```

### Key Tensor Properties

- **Shape**: Describes the dimensions of a tensor
- **Rank**: Number of dimensions
- **Device**: Where the tensor is stored (CPU/GPU)

```python
# Example of tensor properties
t = torch.tensor([[1, 2], [3, 4]])
print(f"Shape: {t.shape}")
print(f"Rank: {len(t.shape)}")
print(f"Device: {t.device}")
```

## Practice Exercise

Try creating a Tensor to represent a common use case in your life. For example use a matrix to represent a list of students, where each inner array is 1 class. Then use a Tensor where each inner array represents a grade and the array inside that a class.
