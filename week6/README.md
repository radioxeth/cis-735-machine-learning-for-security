# Week 6 Neural Networks
- [Home](/README.md#table-of-contents)
- [Week 1 Introduction to Machine Learning in Security](/week1/README.md#week-1-introduction-to-machine-learning-in-security)
- [Week 2 Pattern Recognition and Classification](/week2/README.md#week-2-pattern-recognition-and-classificatoin)
- [Week 3 Distance Measures](/week3/README.md#week-3-distance-measures)
- [Week 4 Feature Definition](/week4/README.md#week-4-feature-definition)
- [Week 5 Classification](/week5/README.md#week-5-classification)
- **&rarr;[Week 6 Neural Networks](/week6/README.md#week-6-neural-networks)**

## Neural Networks

### Motivation and History of Neural Networks
- Humans are expert patern recognizers
  - reading
  - language
  - driving
  - etc

### History of Artifical Neural Networks
- Hebbian learning rule: 1949
  - One of the simplest learning algorithms for two-layer networks
  - Hebb's rule: simultaneous excitation of two neurons results in a strengthening of the connections between them
    - $w_{ij}=\gamma{}\cdot{}X_i\cdot{}X_j$
  - Hebb's rule is analogous to Pavlovian conditioning
    - forming an association between two stimuli

#### Connectoinst learning theory
- Connectionist learning theory
  - information is encoded and distributed across a network of nodes (neurons) via weights (synapses)
  - learning occurs as weights are modified to encode input/output mappings

#### Key Achievements in early history
- 1943 - McColluch and Pitts: MP neuron (first neural network); fires only if threshold is exceeded, fixed threshold, no learning
- 1957 - Rossenberg: the perceptron
- 1969 - goemetrical limitiations of the perceptrons

### General Charactersistics

#### Claims of Neural Networks
- Model cognition/brain functions
- Naturally self-organize
- minimal model assumptions
- neural networks are universal approximators (can map arbitrary input/output models)
- distributed nature of models
  - inherently robust
  - lead to parallel processing
- neural network consists of nodes (neurons) and weights (synapses)
- biological analogy
  - input layer: sensory neurons
  - hidden layer: all other neurons
  - output layer: motor neurons

### Weights and  Activation Functions
A hidden node, x, is activated (1) when the sum of the inputs multiplied by the weights, w, are greater than a threshold, $\theta{}$, and inactive (-1) otherwise.

### Learning Functions Determine Weight
- how are the weight values set?
  - in general, the intial weights are set with random values
  - then, a learning function (optimization) find the weights using training data where the outut is known for the input data.

### Hyperparameter Tuning
- The huperparameters, generally, need to be tuned (customized) for each application
  - Number of layers
  - Number of nodes per layer
  - Activation functions
  - Learning functions
  - Number of epochs

- Experience allows for one to get a feeling for the data and what hyperparameters work best for a given application (called the dark arts)

### Activation Functions

#### Activation Functions Differentiate Nodes
- with a differentiable activation function, f(net), output of neuron (y) is computed via applying a function to sum of the weighted input and a bias term

#### Tanh (sigmoid) Activation Function
- Hyperbolic tangent funtion is a continuous function that ranges from -1 to 1

$$f(x)=tanh(b\cdot{x})=\frac{e^{bx}-e^{-bx}}{e^{bx}+e^{-bx}}$$

#### Linear Activation Function
- linear function ranging from -1 to 1
$$f(x)=x$$

- not used very often

#### Rectified Linear Unit (ReLU) Activation Function
- the ReLU function is a disjointed linear function with a range from 0 to 1.
$$f(x)=\max(0,x)$$

### Learning

#### Errors and Learning
- Training error is the sum of squared errors

$$J(w)=\frac{1}{2}\sum_{i=1}^n(t_i-z_i)^2$$

-
 - $t_i$ = node i target output
 - $z_i$ = node i network output

- weights should be changed to treduce error
$$\Delta{\hat{w}}=-\nu{}\frac{\delta{j}}{\delta{\hat{w}}}$$
- $\nu$ is learning rate
- If activation function is differentiable, the calculus chain rule can be used to determine proportion of error to each weight

#### Loss Function
- the goal of neural network learning is to minimize the loss function value ie find the global minima
- oops easy to find the **local** minima instead of the **global** minima

#### Errors and Learning
- Backpropaatoin starts with the output layer and then adjusts the weights in sequence to the input layer
  - output layer to hidden layer (given c output nodes)
    - Weight from k to j EQUALS learning rate times (target_k - current_k)f'(net_k)f(x_j)
  - hidden to input layer (c hidden nodes)
  - input node times the sum of the errors before

#### What is Backpropagation
- all backpropagation is gradient descent
- it is slow and subject to local minima
  - to avoid local minima, retrain with different start conditions
  - to speed it up, use momentum

#### Error backpropagation and momentum
- low-pass filtering of error vector
$$$$
- where a is between 0 and 1, typiclaly 0.9

#### Epochs
- to speed up training of weights, batching of training data is used, where a batch is percentage of the training data, then error is backpropagated.
- all the batches going through trianing forms an epoch
- the number of epochs run is usually a parameter set by the user.

#### Feedforward Neural Networks (FNN)
- defined as:
  - using basic activation functions
  - fully connected (all weights go tot he next layer)
  - using backpropagation
- but there are many other types of neural networks
- and each hidden layer can be a different type of neural network

### Probabilistic Neural Networks
- Generalize a hidden layer neuron for each data point ie m=n
- normalize all input/training vectors

$$f_c(x)=\sum_{k=1}^m(\frac{1}{m})\Phi(x,w_k)+w_0$$
- where

$$\Phi(x,w_k)\approx{}\exp{\frac{-(w_k-x)^T(w_k-x)}{2\sigma{}^2}}$$

- classification is based on:
$$f_c(x)=\max{}_i\{f_i(x)\}$$


### Radial Basis Neural Networks
- Radial Basis Neural Networks
- choose number of basis functions (neurons, clusters, etc) *and* locations of centers, $v_k$, via k-means, self organizing maps, where m<<<n

$$f_c(x)=\sun{}_{k=1}^{m}w_k\Phi(x,v_k)$$
and
$$\Phi(x,z_k)\approx{}\exp{\frac{-||x-v_k||}{\alpha{}_k}}$$
- classification is based on 
$$f_c(x)=\max{}_i\{f_i(x)\}$$


## Live Session

### Feedforward NN vs Convolutional NN
- FNN
  - input features assume independence from other features
- CNN
  - inputs assume connection between inputs physically near each other
  - adds a pooling layer after convolution

### How does Convolution Improve Classification
- convolution is a function that combines two functions to process a third function
- in terms of images and signal processing, convolution is generally thought of a way blur images with a set filter
- convolution of signals (images) make classifiers more robust to transformational differences between training and testing data for classification.

- Convolution is good tool for image/signal processing

### Convolution Layer
- the convolution layer convolves input signal with a kernel
  - the input for an image would be defined as height, width, and number of channels (colors)(h x w x c)
  - the kernel is defined in the same number of dimensions as the input
  - example for a monochromatic image of 512 x 448 pixels the kernel a 3x3 kernel could be used

### Pooling layer Further Reduces the Dimensionality

- The pooling layer is used to reduce the dimensionality of the data and extract dominate features
  - lower computational time
  - makes classification easier
- for the pooling layer the parameter set by the user is the window size
- two types of pooling functions
  - max pooling: take the largest value in the window, good for noise suppression
  - average pooling: take the average of the values in the window

Poling selection affects values passed to next layer
  - generally max pooling is selected because it acts as noise suppressant

### Recurrent Neural Networks
- recurrent neural networks (RNN) process data over time-sequences
  - both CNNs and FNNs are thought of as not using previous signal as part of classification
- multiple units are used in sequence to take advantage of data from different time sequences
- generally used for natural language processing and other time sampled data
- there are two main RNNs
  - gated recurrent unit (GRU)
  - long short-term memory (LSTM)

### GRUs for RNNSs

- GRUs are relatively simple RNNs
  - they take in two input vectors x[t] and h[t-1]
    - h[t-1] is the output from previous unit
    - r[t] is the reset vector
    - z[t] is the update vector

### LSTMs for RNNs
- LSTMs are more complicated RNNs but are considered better performers
  - they take in three input vectors x[t], h[t-1], c[t-1]
    - the additions of the memory cell, c, helps pass through information from cell to cell
    - h is the short term memory, c is the long term memory

### Softmax Layer
- for multiclass networks, normally a softmax layer is used
  - the softmax activatoin function is a logistic probability function
  - in essence a regression function that returns a probability for each class
  - for classification the class with the highest probability is selected as the likely class

### Transformers
- deep learning models for replacing LSTMs
- used for large language models (LLMs) like ChatGPT
- allows for self-attenuation
  - mimics cognitive attention: enhancing some parts of the input and minimizing others

### Putting it all together
- each layer can be mixed and matched with each other
  
### Pros and Cons of Neural Networks
- pros
  - generally are good for most classification/regression situations
  - lots of tools available (tensorflow, pytorch) 

- cons
  - models can be extrememly complicated (thought of as black box)
  - local minimas cause errors in classification, hard to remedy