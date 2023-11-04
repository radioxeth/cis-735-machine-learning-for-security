# Week 3 Distance Measures

## Directory
- [Home](/README.md#table-of-contents)
- [Week 1 Introduction to Machine Learning in Security](/week1/README.md#week-1-introduction-to-machine-learning-in-security)
- [Week 2 Pattern Recognition and Classification](/week2/README.md#week-2-pattern-recognition-and-classificatoin)
- **&rarr;[Week 3 Distance Measures](/week3/README.md#week-3-distance-measures)**
- [Week 4 Feature Definition](/week4/README.md#week-4-feature-definition)
- [Week 5 Classification](/week5/README.md#week-5-classification)

## Why Measure Distance?

Overview of Distance Measures or Measures of Proximity

### Why Distance Measures
- Similarity or dissimilarity between two data points is a core requirement of many alogrithms that use distance computation.
  - clusering (k-means)
  - classification (k-NN, SVM, NN, etc)
  - Distance-based outlier detection

most algorithms treat similarity computation as an orthogonal step to main computation and so can make use of any distance measure

Two major types:
- noncategorical (both continuous and discrete) data
- categorical data (nominal or qualitative multistate data)

## Different Data Types

- nominal, ordinal, interval, and so on
- nominal eye colo, gender, zip codes,
- ordinal: rankings, likert scale, pain , rates from n-m
- interval: ages, 1-20, 20-40, etc

##3 Noncategorical Data
Examples include:
- keystroke timings, program run time, minututiae points, accelerometer readings in (x,y,z) direction


$d_{I_1,I_2}=\sum_{i=1}^{l}(x_i-y_i)^2$

### Categorical Data

- malicious software: trojan, virus, et
- social media: facebook, twitter
- vulnerability: buffer overflow, dangling pointer, screenshot
- attacks: presentation, side channel, algorithmic
- source: accelerameter, swipe, keyboard, logging, camera, gps et
- gender: male, female, nonbinary etc

...
- similarity measure between 
> X={zero effort attack, buffer overflow, USA male}
> Y={algorithmic, screenshot, germany, male}

### Distance Metric
A distance measure may or may not be a metric:
 The distance d(x,y) between x and y is a metric if it satisfies the following conditions:

- distance $d(x,y)=0$
- distance $d(x,y)=0$ if and only if $x=y$, that is, the objects $x$ and $y$ are identical
- distance $d(x,y)$ is symmetric, that is, $d(x,y)=d(y,x)$; distance from $x$ to $y$ is the same as the distance from $y$ to $x$
- distance $d(x,y)$ satisfies the triangle inequality, $d(x,z)\le{}d(x,y)+d(y,z)$
...
- Minkowski distance for p stritly between 0 and 1 does not satisfy triangular inequality
- cosign distance $x[1,0]$, $y[\sqrt{2}/2,\sqrt{2}/2]$, $z[0,1]$

## Minkowski Distances
Order 1: manhattan: Order 2: Euclindean distance

### Distance Measure: Noncategorical

#### Minkowski distance

Let there be two vectors = $X=(x_1,x_2,...,x_N)$ and $Y=(y_1,y_2,...,y_N)$. The minkowski distance between X and Y is given by:

$d_M(X,Y)=[\sum_{i=1}^N|x_i-y_i|^\lambda{}]^\frac{1}{\lambda{}}$

#### Manhattan distance

For $\lambda{}=1$, $d_M(X,Y)$ is referred to as Manhattan or city-block distance. it is given as
$d_M(X,Y)=\sum_{i=1}^N|x_i-y_i|$

#### Euclidean distance

For $\lambda{}=2$, $d_M(X,Y)$ is referred to as Euclidean distance. it is given as
$d_M(X,Y)=\sqrt{\sum_{i=1}^N(x_i-y_i)^2}$


### Normalized Rank Transform
Normalized rank transform
Convert the ordinal values into rank (r=1 to R)
Normlaize the rank into standard value from [0,1] as follows.

$x=\frac{\gamma{}-1}{R-1}$

### Hetergeneous Distance Functions
heterogeneous eucidean-overlap metric

$d_d(x,y)=$
- 1 if x or y is unknown
- overlap (x,y) if a is a nominal
- $rn_{diff_a}(x,y)=\frac{x-y}{\max{a}-\min{a}}$

## Live Session

### Probability Density Functions

use pytorch or tensor flow

### Parametric Density Estimation
- hypothesize a functional form
  - normal (guassian): parameters (mean, variance)
  - gamma: parameters (gamma)
  - bionomial: parameters (n,p)

- given functional form, pick a particular instance (hypothesis) of function as estimate of density (ie pick parameters values)

### Non parametric density estimation
- what if one does not have a clue concerning the unerlying functional form of the random process?
- how do we estimate?

### Kernel estimators are used to smooth
- kernel functions are related to histograms- but te histogram bin size & origin hyerparameters are replaced with kernel smoothing hyperparameter

### Kernel Functions
- Epanechnikov (epan values)
- biweight
- rectangle
- gaussian

### parametric vs nonparametric density

- parametric
  - advantages
    - data reductions (sufficient statistics)
    - injection of a priori knowledge concerning process
  - disadvantages
    - usually assumes a simple functional shape (normal) - cannot handle modeling arbitrary distribtuions
    - requires assumptions
- non parameteric
  - advantages
    - no assumptions
    
  - disadvantage
    - slow
    - data reduction goes away

### Semiparametric Density Estimation
- semiparametric density estimation attempt to combine the best attributes of nonparametric and parametric approaches.
- benefits
  - mixtures can estimate/extract physical phenomenon from data
    - for example: signal and noise as separate components of data
  - data reduction - no need to store complete data set
  - many novel techniques reduces to mixture approach
- cost
  - host to compute best solution
  - how to determine 'how many' component should be used


### Distance Functions
 see [minkowski distance](#minkowski-distance)

 see [manhattan distance](#manhattan-distance)

 see [euclidean distance](#euclidean-distance)

#### Mahalonobis Distance

$d(x,y)=\sqrt{(x-y)^{T}S^{-1}(x-y)}$

- Where $S$ is a covariance matrix
- given a point in n-dimensional space does it belong to a known set of points?
  - find the center of mass of the known set
  - the closer a point is to this center of points, the more likely it is to belong to the set
  - need to knw if the set is spread out over a large. If the distance etween the test point and the center of mass is less than one standard deviation, then it is highly probable that the test point belongs to the set
  - however set may not be spherical (ie eillipse), so we need distance and direction from center
  - covariance matrix represents an ellipsoid that corresponds to the set's probability distribution
  - mahalnobis is the distance of the test point from the cent mass divided by the width of the ellipsoid in the direction of the test point

#### Cosine Similarity
- unlike other similarity measures, a cosine similarity is a measure of the direction-length resemblance betewen vectors
- an angle of 0 means that cos(x,y)=1 and that the vectors are oriented in identical directions; ie that the corresponding data sets are completely similar to one another
- an angle of 90 means that cos(x,y)=0 and that the corresponding variables are perpendicular, but no necessarily that are uncorrelated unless these are also mean-centered.

$\cos{\theta{}}=\frac{A\cdot{B}}{||A||\space{}||B||}$
Slow - complex

multiplication and division are slow

#### Jaccard Distance
Measure of similarity between two sets:
$J(A,B)=\frac{|A\bigcap{B}|}{|A\bigcup{B}|}$

A={1,2,3,4}
B={2,4,6,8}

J(A,B)=2/6=33%

### assignemt 1
use python 

find eculidean distance and divide by standard deviation for 