[Home](/README.md#table-of-contents)
[Week 1 Introduction to Machine Learning in Security](/week1/README.md#week-1-introduction-to-machine-learning-in-security)
[Week 2 Pattern Recognition and Classification](/week2/README.md#week-2-pattern-recognition-and-classificatoin)
**&rarr;[Week 3 Distance Measures](/week3/README.md#week-3-distance-measures)**
[Week 4 Feature Definition](/week4/README.md#week-4-feature-definition)


## Live Session

### Probabiliy Densities vs Discriminant Functions
- probability density functions
  - naive bayes classifier
  - pro
    - easy to generate
    - give probability is correct
  - con
    - time consuming
    - sometimes impossible

- Discriminant function
  - k-means, k-nearset neighbor, perception, artifical neural networks, support vector machines, decision trees
  - pro
    - works in most cases
    - gives definitive classifications of object
  - con
    - does not give probability correct?

### Linear Discriminant Function: definition

- in an n-dimensional space, a general linear discriminant function is defined by
$g(\hat{x})=w\cdot{}\hat{x}+\hat{b}=\sum_{i=1}^{n}w_i\cdot{x_i}+b$

- b is translation off the origin, often called the bias and the orientation of the hyperplane is given by **w**

- the hyperplane divides the space into two halves 
$g(\hat{x})<0$ and $g(\hat{x})>0$

can generalize to quadratic function

### Linear discriminant functions:

### support vector machines:

$x\in{R},y\in[-1,1]$
$\Phi=X\rarr$

### The Kernel Trick
- a kernel function g(x) replaces the inner product

$f(x)=\sum_{i=1}^l w_i \Phi(x)+b= \sum_{i=1}^l\alpha_i y_i(g(x,x))+b$

### SVM Kernels: Polynomial
g(x,x)=(x^tx^t)^d

if d>3, start to overfit data

SVM Kernels: Radial basis function
- where the function g(x,x) is defined as $exp(\frac{-||x-x'||^2}{2\sigma{}^2})$
where d is a polynomial parameter

### SVM Kernels: Overview
- SVMs are excellent classifiers
- usually require kernel trick
- pros
  - always find the best solution for data given
- cons
  - can become overtrained


## Neural Networks
### Feedforward NN vs Convoultional NN

- FNN
- intput&rarr;hidden&rarr;single output
- 