# Lesson 1: Basics of Neural Networks

## Introduction

Neural networks are a key part in machine learning which itself is the most important part in AI. They are inspired by how the human brain works and are made up of layers of "neurons" that process data.

## Neurons

A neuron is like a tiny function that takes in input, processes it, and sends out an output. Each neuron has weights and biases that change during training to make the network better at its task.

![Neural Network Layers](https://miro.medium.com/max/2000/1*-IPQlOd46dlsutIbUq1Zcw.png)

## Layers

Neural networks have different types of layers:

1. **Input Layer**: This layer gets the input data. Think of this as the ingredients which are give to the next layer for further processing.
2. **Hidden Layers**: These layers do the work of processing the data. Think of this as the recipe. This is the part being trained to make it more accurate similar to how you can modify a recipe to make it more tasty.
3. **Output Layer**: This layer gives the final result. This is the final dish that is desired.

### Types of Layers

- **Dense (Fully Connected) Layer**: Every neuron in this layer connects to every neuron in the previous layer.
- **Convolutional Layer**: Mainly used for images, it processes the input by looking at small parts of it.
- **Pooling Layer**: Makes the data smaller and easier to work with.
- **Recurrent Layer**: Used for sequences, like sentences, it remembers previous data.

## Gradient Descent

Gradient descent is a way to make the neural network better. It changes the weights and biases to reduce errors. Think of it like rolling a ball down a hill to find the lowest point. In this case, it wants to minimize the difference between the recipe of the model and the ideal recipe.

### Steps of Gradient Descent

1. **Initialize Weights**: Start with random weights.
2. **Forward Propagation**: Calculate the output with the current weights.
3. **Calculate Loss**: Measure how far off the prediction is from the actual value.
4. **Backward Propagation**: Find out how to change the weights to reduce the error.
5. **Update Weights**: Change the weights to make the network better.

![Gradient Descent 3D](https://raw.githubusercontent.com/rasbt/python-machine-learning-book-3rd-edition/master/ch02/images/02_12.png)

## Conclusion

Knowing the basics of neural networks, like neurons, layers, and gradient descent, is important for building and training models. In the next lesson, we will look at using code to create neurons using PyTorch
