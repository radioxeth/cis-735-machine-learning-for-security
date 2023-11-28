# Week 8 
- [Home](/README.md#table-of-contents)
- [Week 1 Introduction to Machine Learning in Security](/week1/README.md#week-1-introduction-to-machine-learning-in-security)
- [Week 2 Pattern Recognition and Classification](/week2/README.md#week-2-pattern-recognition-and-classificatoin)
- [Week 3 Distance Measures](/week3/README.md#week-3-distance-measures)
- [Week 4 Feature Definition](/week4/README.md#week-4-feature-definition)
- [Week 5 Classification](/week5/README.md#week-5-classification)
- [Week 6 Neural Networks](/week6/README.md#week-6-neural-networks)
- [Week 7 Fusion and Selection](/week7/README.md#week-7-fusion-and-selection)

## Live Session

### Epistemological Parsimony

- epistemological parsimony deals with the number of things that a theory posits.
  - Ockham's razor
> one should not increase, beyond what is necessary, the number of entities required to explain anything


### How do we pick simple models
 
- given a set of data, how many bumps/modes/components/clusters exist?
- what is the best representation for the data
- what happens if you guess wrong?
- how can we use mathematical principles and not just guess?

### Model Capacity/Complexity Issue
- increasing model complexity implies more model capacity to fix/map arbitrary data
- issue is applicable to all data modeling techniques
- for instance, model capacity is direct consequence of the architecture defined by the model its number of associated free parameters
  - neural network hidden layers
  - parametric/semi-parametric density estimation

### What happens when you guess wrong?
- too few parameters?
  - the underlying process is too generalized - underfitting
  - cannot learning the underlying map adequately
- too many parameters?
  - the underlying process is too specific - overfitting

### Approaches to model selectoins
- ad hoc
  - user defined
  - mean square error (MSE)
  - self organizing map
- information Theoretic Approaches
  - Akaiake Akiake's Information Criterion (AIC)
  - Schwarz Bayesian Information Criterion (BIC)

### Information Theoretic Approaches
- use statistical principles, information theory to provide guiding principles in model complexity selection
- regularization is through the balancing model fitness and complexity
  - fitness is the performance of the model
  - fitness is number of free parameters

-score = Fitness + Complexity
### Akaike Information Criterion
>$AIC(\Theta{})=-2\ln(L)+2k$

- $\Theta$ is the parameters
- $k$ is the number of parameters
- $L$ is the max perofmance with parameter and data given

### Bayesian Information Criterion

> $BIC(\Theta)=-\log(L)+1/2k\log{n}$

- $-\log(L)$ fitness
- $1/2k\log{n}$ complexity


- $\Theta$ is the parameters
- $k$ is the number of parameters
- $L$ is the max performance with parameter and data given
- $n$ is the number of observations