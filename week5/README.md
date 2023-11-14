# Week 5 Classification

## Directory
- [Home](/README.md#table-of-contents)
- [Week 1 Introduction to Machine Learning in Security](/week1/README.md#week-1-introduction-to-machine-learning-in-security)
- [Week 2 Pattern Recognition and Classification](/week2/README.md#week-2-pattern-recognition-and-classificatoin)
- [Week 3 Distance Measures](/week3/README.md#week-3-distance-measures)
- [Week 4 Feature Definition](/week4/README.md#week-4-feature-definition)
- **&rarr;[Week 5 Classification](/week5/README.md#week-5-classification)**


## Classificatoin
Different formulas. Here is one

Examples:
-Supervised: decision trees, multilayer perceptron with backpropagation weight update rule
- unsupervised clustering


### k-means clustering
begin
- choose n,k,$\nu_1$, $\nu_2$
- choose k cluster centers
  - either through domain knowledge or other ways: one way is to take a sample, put it in cluster 1; take second smaple, put it in cluster 1; take second sample. If||u_1, X||<d put it in the same cluster

- for i=i,n
```
for i=1,n
{
  classify ith sample according to neraest u

  recompute u_h
}
```

### Naive Bayes
- bayesian classifier
  - V_hap=augment v_j\in(y) p(v1/p1...pn)
- $p(A|B)=\frac{p(B|A)p(A)}{p(B)}$

We have evens (a1,a2,a3,a4....,an)u_j

### Naieve Bayes Classifier

- m-estimate of probability
  - number of values of the attribute; n is the total number
- p is a prior estimate of the probability
- m a constant called equivalent sample size, which determines how heavily to weight p relative to the observed data


### Perceptron and Backpropagation Weight Update

Connecting perceptrons we can design a multi layer perceptron
ID function

$\Phi{\epsilon}=\frac{1}{1+e^{-\lambda{}\epsilon}}$

### Decision Trees
- Can classify a pettern through a sequence of questions. The choice of next question may depend on the answer to the current questoin.
- a sequence of quesitions is displayed in a directred decision treen with a root node displayed at the top, the leaf nodes at the bottom, and the root node connected to the leaf nodes through successive links to other nodes.

$Entropy(S)=\sum_{i=1}^{k}-p_{i}\cdot{}log(p_i)$

$Gain(S,A)=Entropy(S)-\sum_{v\in{values(A)}}\frac{|S_v|}{|S|}Entropy(S_v)$
- here Values(A) is the set of all possible values for attribute A. S_v is the subset of S for which attribute A has value v.

### Support Vector Machines

Find an optimal hyperplane that maximizes the distance between two classes
- depends on the choice of kernel or many kernels

[Support vector machine video](https://www.youtube.com/watch?v=LXGaYVXkGtg&list=WL&index=4)
[Linear classifier SVM](https://www.youtube.com/watch?v=IOetFPgsMUc)

### K-Nearest Neighbors
k-nn

- instance based learning
- lazy learners
- expensive

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