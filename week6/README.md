# Week 6

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