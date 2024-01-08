# Week 8 Machine Learning Methods Applied to Security Domain

## Directory
- [Home](/README.md#table-of-contents)
- [Week 1 Introduction to Machine Learning in Security](/week1/README.md#week-1-introduction-to-machine-learning-in-security)
- [Week 2 Pattern Recognition and Classification](/week2/README.md#week-2-pattern-recognition-and-classificatoin)
- [Week 3 Distance Measures](/week3/README.md#week-3-distance-measures)
- [Week 4 Feature Definition](/week4/README.md#week-4-feature-definition)
- [Week 5 Classification](/week5/README.md#week-5-classification)
- [Week 6 Neural Networks](/week6/README.md#week-6-neural-networks)
- [Week 7 Fusion and Selection](/week7/README.md#week-7-fusion-and-selection)
- **&rarr;[Week 8 Machine Learning Methods Applied to Security Domain](/week8/README.md#week-8-machine-learning-methods-applied-to-security-domain)**

## Machine Learning Methods Applied to Security Domain

1) Keystroke based authentication
2) mobile device
   - authentication
   - data description
   - feature extraction
   - cleaning
3) BCI (brain computer interface)
   - authentication

### Keystroke Dynamics
- an example of behavioral biometrics
  - relatively high variability between successive samples
  - still provides ability to distinguish
  - stable over shorter time spans
  - phone to replay attacks
- advantages
  - samples can be collected remotely, for example, on the internet
  - widespread use: desktops, laptops, and mobile devices
  - non-intrusive 
- choice of device, for example, desktop keyboard or mobile device, can affect sample variability
  - methods to find invariants are successful
- useful as second-factor in authentication

### Feature Extraction, Fixed Text and Free Text

#### Feature definition and selection
- kht: key hold time
- kil: key interval latency
- kpl: key press latency

### Feature Cleaning
#### Outlier Detection
Method 1
$x\epsilon\{x-w\sigma{}\mu{},x+w\sigma\mu{}\}$

Method 2
Define a neighborhood of a feature value as region
$N=\{\bar{x}_i-r,\bar{x}_i+r\}$
A feature vector is an outlier if fewer than $\beta$ values fall within the neighborhood.

$x_i=\{247,476,281,250,281,265,1235\}$

in practice for keystroke analysis:

$r=100$
$\beta=60\%$


{50,60,80,50,500,78,90} 

### Classification: Verification and Identification
#### Classification: verification and identification, modified naive bayes

- a set of L users , U ={U1,U2,U3..UL}
- feature vector Z={Z1,Z2,...,Zn}; each Z has components KIL and so on

how is the system trained? how does the system use classification?

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
  - the underlying process is too generalized - under-fitting
  - cannot learning the underlying map adequately
- too many parameters?
  - the underlying process is too specific - over-fitting

### Approaches to model selection
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