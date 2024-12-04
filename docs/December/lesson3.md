# Lesson 3: Creating and Importing a Dataset

In this lesson, we will learn how to work with datasets in PyTorch. We'll take it step by step to ensure you understand each concept thoroughly.

## Part 1: Understanding PyTorch Datasets

Before we write any code, let's understand what a dataset is in PyTorch:

- A dataset is a collection of data samples that we use for training or testing.
- Training is where we give the model ideal inputs and outputs and it tries to modify the recipe so each input gives the desired output.
- Each sample can include input data and its corresponding label
- PyTorch provides a `Dataset` class that we can use as a template

## Part 2: Creating a Simple Custom Dataset

Let's start by creating a very basic custom dataset. We'll begin with the necessary imports:

```python
import torch
from torch.utils.data import Dataset, DataLoader
```

Next, we'll define our custom dataset class by subclassing `torch.utils.data.Dataset` and overriding the `__len__` and `__getitem__` methods:

```python
class CustomDataset(Dataset):
  def __init__(self, data, labels):
    self.data = data
    self.labels = labels

  def __len__(self):
    return len(self.data)

  def __getitem__(self, idx):
    sample = {'data': self.data[idx], 'label': self.labels[idx]}
    return sample
```

Now, let's create some example data and instantiate our custom dataset:

```python
# Example data
data = torch.randn(100, 3, 32, 32)  # 100 samples of 3x32x32 images
labels = torch.randint(0, 10, (100,))  # 100 labels (0-9)

# Create dataset
dataset = CustomDataset(data, labels)
```

Finally, we'll use a `DataLoader` to iterate through our dataset in batches:

```python
# Create DataLoader
dataloader = DataLoader(dataset, batch_size=4, shuffle=True)

# Iterate through the DataLoader
for batch in dataloader:
  print(batch)
```

## Part 3: Importing an Existing Dataset

PyTorch provides several popular datasets through the `torchvision` library. We will use the CIFAR-10 dataset as an example.

### Step 1: Importing Required Libraries

First, let's import the necessary libraries:

```python
import torch
import torchvision
import torchvision.transforms as transforms
from torch.utils.data import DataLoader
```

### Step 2: Defining Transformations

Next, we'll define the transformations for the training and test sets:

```python
transform = transforms.Compose([
  transforms.ToTensor(),
  transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))
])
```

### Step 3: Downloading and Loading the Data

Now, let's download and load the training and test data:

```python
# Download and load the training data
trainset = torchvision.datasets.CIFAR10(root='./data', train=True, download=True, transform=transform)
trainloader = DataLoader(trainset, batch_size=4, shuffle=True)

# Download and load the test data
testset = torchvision.datasets.CIFAR10(root='./data', train=False, download=True, transform=transform)
testloader = DataLoader(testset, batch_size=4, shuffle=False)
```

### Step 4: Iterating Through the DataLoader

Finally, we'll iterate through the DataLoader to access the data:

```python
# Iterate through the DataLoader
for images, labels in trainloader:
  print(images, labels)
```

## Summary

In this lesson, we learned how to create a custom dataset in PyTorch by subclassing `torch.utils.data.Dataset` and how to import an existing dataset using the `torchvision` library in Google Colab. We also saw how to use the `DataLoader` to iterate through the dataset in batches.

Feel free to experiment with different datasets and transformations to get more comfortable with PyTorch's data handling capabilities.
