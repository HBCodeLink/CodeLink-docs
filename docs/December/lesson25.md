# Lesson 2.5: Setting Up Google Colab with PyTorch

## Introduction

Google Colab is a free cloud service that allows you to run Jupyter notebooks without any setup. In this lesson, we will learn how to set up Google Colab with PyTorch, a popular deep learning framework.

## Steps to Set Up Google Colab with PyTorch

### Step 1: Open Google Colab

1. Go to [Google Colab](https://colab.research.google.com/).
2. Sign in with your Google account if you are not already signed in.
3. Click on `File` > `New Notebook` to create a new notebook.

### Step 2: Check the Runtime Type

1. Click on `Runtime` in the menu bar.
2. Select `Change runtime type`.
3. Ensure that the `Runtime type` is set to `Python 3`.
4. For hardware acceleration, you can select `GPU` or `TPU` under `Hardware accelerator` for faster computation.

### Step 3: Install PyTorch

1. In a new code cell, run the following command to install PyTorch:

```python
!pip install torch torchvision
```

2. Wait for the installation to complete. This will install PyTorch and Torchvision, which provides datasets, model architectures, and image transformations for computer vision.

### Step 4: Verify the Installation

1. In a new code cell, run the following code to verify that PyTorch is installed correctly:

```python
import torch
print(torch.__version__)
```

2. If PyTorch is installed correctly, this will print the version of PyTorch.

### Step 5: Test PyTorch with a Simple Example

1. In a new code cell, run the following code to test PyTorch with a simple tensor operation:

```python
# Create a tensor
x = torch.tensor([1.0, 2.0, 3.0])
# Perform a tensor operation
y = x * 2
print(y)
```

2. This should output a tensor with values `[2.0, 4.0, 6.0]`.

## Conclusion

You have successfully set up Google Colab with PyTorch. You can now start building and training your deep learning models using PyTorch in Google Colab.

## Additional Resources

- [PyTorch Documentation](https://pytorch.org/docs/stable/index.html)
- [Google Colab Documentation](https://colab.research.google.com/notebooks/intro.ipynb)
