# Week 7 Fusion and Selection

## Directory
- [Home](/README.md#table-of-contents)
- [Week 1 Introduction to Machine Learning in Security](/week1/README.md#week-1-introduction-to-machine-learning-in-security)
- [Week 2 Pattern Recognition and Classification](/week2/README.md#week-2-pattern-recognition-and-classificatoin)
- [Week 3 Distance Measures](/week3/README.md#week-3-distance-measures)
- [Week 4 Feature Definition](/week4/README.md#week-4-feature-definition)
- [Week 5 Classification](/week5/README.md#week-5-classification)
- [Week 6 Neural Networks](/week6/README.md#week-6-neural-networks)
- **&rarr;[Week 7 Fusion and Selection](/week7/README.md#week-7-fusion-and-selection)**
- [Week 8 Machine Learning Methods Applied to Security Domain](/week8/README.md#week-8-machine-learning-methods-applied-to-security-domain)

## Multiple Classifier Systems

### Why Multiple Classifier Systems?
- Statistical
  - different classifiers have different generalization errors
- Computational
  - some algorithms perform hill climbing or random search which may lead to different local optima
- representational 
  - linear classifier combines linear classifier to get a non-linear classification

### Building multiple classifier systems
Large dataset
- train in a single classifier
- train the base classifier on non-overlapping datasets
- train the ensemble and individual classifier
  - test

### Majority Voting

Labeled output of classifiers as c-dimensional binary [d_{i,1},...d_{i,c}] in {0,1}, i=1...l, where d_{i,j}=1 if D_i labels X in w_j and 0 otherwise

$\sum_{i=1}^Ld_{i,k}=\max_{j=1}^c\sum_{i=1}^Ld_{i,j}$

### Weighted Majority Voting
If the classifiers are not of identical accuracy

The discriminant function for class w_j obtained through weighted voting is

$g_j(X)=\sum_{i=1}^Lb_id_{i,j}$

### Naive Bayes Combination

### Combining by Error-Correcting Codes: Method

- an ensemble method designed for multiclass classificaiton problem
- multiclass classification problem
  - decide one label from c possible class labels where c > 2
  - example digit recognition
    - need to classify each handwriten digit to one of c=10 possible classes
- algorithms such as decision tree, naive bayes, and neural network, can handle multiclass problem directly
- ecoc mthod comines several binary classifiers to solve multiclass problem

#### ECOC Overview
- each binary classifier solves a two-class problem
- multiclass problem: c={c_0,c_1,c_2,c_3}
- corresponding seven different binary classification problems {D_1,...,D_2}

### Combining by error-correcting codes

## Live Session

### Data Fusion and Missing Data

### Data Fusion
- why data fusion? Because the world is physics!
- The world spans many Factors of Variation (FoV)
- Sensors observe the world, coupled across many FoVs

issues with data fusion
- two sensors probably have difference resolutions
- the information is at different angles

#### when to fuse
- **feature level**: Combine features from different modalities to create a new set of features that a classifier would learn over.
  - pros: this is generally most robust solution
  - cons: requires system to be completely retrained to add a new modality
- **score level**: each modality has an independent classifier which computes a numeric score. The scores are combined using some mathematical formula to compute a combined score. Common approaches: max, sum, product, minimum, median, mean, etc
- **decision level**: allow each modality/classifier compute a decision and reconcile disagreements via voting or other strategies

### What happens when we have missing data
- if a given measurement is marked as invalid or missing, you can specify what probabilities the variables should default to
  - examples
    - put a default value in place of the missing value eg mean
    - generate models that do not use value

### Different Kinds of Unknowns
- what makes this problem interesting is that there are multiple situations in which we may receive no measurement on a feature
  - the feature was not measured, but should have been
  - the feature was not measured, and it should not have been
  - the feature was not measured, and we don't know if it should have been or not
    - this is the hard one to solve
- each of these situations require different handling on of the 'no measurement' situation to properly interpret the information
- we could have multiple objects competing with different features missing for different reasons

#### Solution 1 - ignore unknowns
- this solution is equivalent to treating all features as should not have been measured
- when a feature is missing, rely wholly on the input from other features
- to implement the approach, one must introduce an unknown variable to each feature's variable set, and use the unknown value when the feature is not measured

#### Solution 1 problem - false alarms
- solution #1 puts all objects on equal footing, regardless of how many features they have measured
  - an object with 12 features active has the same rang e of probabilities as the object with one feature

#### Solution 2 - penalize unknown
- this solution is equivalent to treating all features as should have been measured
- when a feature is missing, introduce some probability of unknown which is not "is not assigned"

#### Solution 2 problem - varying conditions
- objects with fewer features measured have a certain percentage of their probability siphoned off into the unknown variable
- this creates problems when not all features can be computed
  - max score is 100%
  - if one has 6 features that can only be computed one sensor and 4 on the other, the 1st sensors will always have a distinct advantage


#### Solution 3 - meta features
- rather than assuming all features should or should not have been measured, why not tell the system when a feature is expected or not?
  - best of both worlds

#### Solution 3 problem - complexity

- number of rules required to define the Bayes Net increases polynomial with number of features
  - we need 108 rules just for this four feature set
  - for large sets the number of features is intractably large

#### Solution 4 - meta features and intermediary variables
- a close inspection of the tables describing solution 3 shows some redundancy of rules




#### Solution 2
