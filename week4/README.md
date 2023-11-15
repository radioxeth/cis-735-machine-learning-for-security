# Week 4 Feature Definition

## Directory
- [Home](/README.md#table-of-contents)
- [Week 1 Introduction to Machine Learning in Security](/week1/README.md#week-1-introduction-to-machine-learning-in-security)
- [Week 2 Pattern Recognition and Classification](/week2/README.md#week-2-pattern-recognition-and-classificatoin)
- [Week 3 Distance Measures](/week3/README.md#week-3-distance-measures)
- **&rarr;[Week 4 Feature Definition](/week4/README.md#week-4-feature-definition)**
- [Week 5 Classification](/week5/README.md#week-5-classification)
- [Week 6 Neural Networks](/week6/README.md#week-6-neural-networks)
- [Week 7 Fusion and Selection](/week7/README.md#week-7-fusion-and-selection)

## Feature Definition, Extraction, and Reduction: Feature

Feature: > A distinctive attribute or aspect of something (dicitonary)
  - something we can use to separate classes or categories

### Why Feature Selection and Reduction?
Demand for more smaples grows exponentially with the dimensionality of the feature space
  - high-dim functions have thepotentioal of being more complicated than the lower-dimensional. These complications are difficult to discern
  - A complete quadratic discriminant function has $\frac{(d+1)(d+2)}/{2}$ terms. If d=50, kth order components lead to $O(d^k)$ terms, so will have k=2,3,4...

Redundancy: correlation between features; lack of contribution to variance

$\begin{bmatrix}n\\m\end{bmatrix}=\frac{m!}{n!(n-m)!}$

### Feature Extraction
through sensors: software or hardware sensors

find min/max/mean of windows of data

### Categories of Feature Extraction
Two borad categories
- wrappers: use the learning algos to evaluate th eusefulness of features
  - statistical resampling (such as cross validation) using the target learning algorithm to test accuracy of feature subsets
    - slow to execute becaues many calls are needed
    - will not scale well to large feature sets with large data
    - can be wrapped around continuous or discrete class learner
- filters: evaluate features according to heuristics based on the characteristics of the data
  - independent of learning algorithm
  - for example, correlation among feature information content of some features subsumed by other features
  - may use relevancy score - rank features
  - may work only on discrete class problems

### Information Gain and Mutual Information
H(p)H(q) vendiagram I(p,q)

H= entropy
I= mutual informaion

p,q
$I(p,q)=H(p)-H(p/q)$
$=\sum_{x,y}\gamma(x,y)\log{}_2\frac{\gamma{}(x,y)}{p(x)p(y)}$

Reduction in uncertainty about one variable 

### Correlation-Based Feature Selection CFS

Merit_s= heuristic merit of a feature subset S
the average feature-class correlation $\overline{\gamma{}}_{cf}$
the average feature-feature correlation $\overline{\gamma{}}_{ff}$

$Merit_s = \frac{R\overline{\gamma{}}_{cf}}{\sqrt{R+R(R-1)\overline{\gamma{}}_{ff}}}$

### CFS for Discrete Data
Discretize numeric features
Symmetric Uncertainty

$SU=2.0\frac{H(X)+H(Y)-H(X,Y)}{H(Y)+H(X)}$

### For Continuous Class Data
$r_{xy}=\frac{\sum{}xy}{n\sigma_x\sigma_y}$

or missing values - disctribute the counts across the representated frequencies in proportion to their relative frequencies

### P-value use in CFS and Rules of Thumb

### p-value
- test a null hypothesis against an alternate hypothesis (H_0 and H_1)
- test statistic and its null distribution
- for example, or for correlation (one example). (Student's t-distribution with n-2 degress of freedom)
$t=\frac{\overline{x_1}-\overline{x_2}}{\sqrt{\sigma}}$
$t=\gamma\sqrt{\frac{n-2}{1-\gamma^2}}$
- p-value: quantifies the strength of the evidence against the null hypothesis in favor of the alternative
- obtain a new dataset independent of the first dataset
- obtain a new value of the test statistic. what is the probability that the new value with be further out in the tail: p-value
- p-value is not the probability that the null hypothesis is true

H_0: average face length of group 1 !== average face length of group 2

| p-value           | Interpretation                                  |
|-------------------|-------------------------------------------------|
| p < 0.001     |  Very Strong evidence against the null hypothesis     |
| 0.001 ≤ p < 0.01     | Strong evidence against the null hypothesis     |
| 0.01 ≤ p < 0.1   | Moderate evidence against the null hypothesis   |
| 0.1 ≤ p < 0.3     | Weak evidence against the null hypothesis       |
| p ≥ 0.3           | Little or no evidence against the null hypothesis |


### Feature Reduction
#### Transforming to Low-Dimensional Features

([x1,[x2],x3],x3)

$f(x_1,x_2,...x_n)=y_1,y_2...y_m$
$m<<n$

### Principal Component Analysis
Principal component analysis (PCA) [Karhuenen-Loeve transfrom]

compute d-dimensional mean $\nu$ and dXd covariance matrix $\Sigma{}$ for the full dataset
Compute eigenvalue $\lambda{}_1$ with eigenvector $e_1$, eigenvalue $\lambda{}_2$ with eigenvector $e_2$ etc

choose K eigenvectors corresponding to the largest values. d-k vectors contains noise

From a matrix $A_{d\times{}k}$ whose columns consist of k eigenvectors. Project the data on to k-dimensional supspace according to 

### Background Information
### Perceptron
### Autoencoder
PCA in an itterative fasion to adjust the weights. Try weights, then regress and try new weights until it's clear.

### Nonineaner component anlsysis
dimensional reduction machine

in PCA eigenvectors give you a good idea
NLCA you know the reduced dimensions

if we have x and predict y, we want y-x=0
$\sum_i(y_i-x_i)=\min$



## Live Session

### The curse of dimensionality

- during training, as diemsionality goes up the classification performance will get more accurate.
- increasing dimensionality leads to overtraining
- overtraining can lead to worse performance on test data

### Nature of high dimensions
- as dimensionality increases points moved further apart from one another
- almost every point is loser to an edge than another point
- almost every point is an outlier in its own projection
### Modeling in High Dimensional Spaces
- statistical modelling of high dimensional data requires extensive training samples
- density of samples decreases exponentially with dimension
- with region based (ANN, SVM) approaches lower data affects performance
- ~2^N samples for N dimensions

### Hughes Effect
- As dimensions increase at some point the performance decreases on test data
- need to find the features selection that is just right
- even with enough data this could happen due to adding features that hurt performance

### Principal Component Analysis
- principal component analysis (PCA) allows for dimensionality reduction of data
- two main algorithms used
  - eigenvectors
  - singular value decomposition (SVD)
- PCA finds the hyperplanes that best fit the data
  - $\phi{}_1$ best fits the major axis of the data
  - all subsequent $\phi{}$ fit minor axis orthogonal the previous axes
- 5 or 6 components you start to lose performance
- PCA aims to lower dimensionality
### Eigenvector Representation
- Eigenvectors $\phi{}$ with the largest eigenvalues $\lambda{}$ best approxiate X
- Eigenvector equestion $\phi{}^T\sum{}\phi{}=\lambda{}$ where $\sum$ is the covariance of X

### Fisher Multiclass Analysis
- Discriminate analysis utilizes within-class, between-class, and total-scatter matrices to determine the best features for discrimination
- fisher (linear) multiclass analysis (LDA) selects features that minuize within-class scatter and maximize between class scatter

### Autoencoders
- AEs are a type of neural network that reduces the dimensionality of input data down to a lower dimension and the reconstructs the input as an output
  - can be used to reduced dimensionality by using the encoding part after the model has been trained
  - generally, the input and the output are the same for training

- often used for data compresssion