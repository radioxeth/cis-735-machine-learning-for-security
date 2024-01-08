# Week 9

## Directory
- [Home](/README.md#table-of-contents)
- [Week 1 Introduction to Machine Learning in Security](/week1/README.md#week-1-introduction-to-machine-learning-in-security)
- [Week 2 Pattern Recognition and Classification](/week2/README.md#week-2-pattern-recognition-and-classificatoin)
- [Week 3 Distance Measures](/week3/README.md#week-3-distance-measures)
- [Week 4 Feature Definition](/week4/README.md#week-4-feature-definition)
- [Week 5 Classification](/week5/README.md#week-5-classification)
- [Week 6 Neural Networks](/week6/README.md#week-6-neural-networks)
- [Week 7 Fusion and Selection](/week7/README.md#week-7-fusion-and-selection)
- [Week 8 Machine Learning Methods Applied to Security Domain](/week8/README.md#week-8-machine-learning-methods-applied-to-security-domain)
- [Week 9](/week9/README.md#week-9)

## Live Session

- camouflage, concealment, and deception (CCD) in cyber ML

### camouflage, concealment, and deception
- camouflage: altering the structure of an object so it cannot be detected
- concealment: altering the structure of an object so it is not recognizable as the original object
- deception: drawing attention away from intended object to another object

### Camouflage
 - camouflage is used so an opponent cannot detect an object
 - countermeasures are difficult to develop unless you know when camouflage is used
   - develop new sensors or specific machine learning techniques

#### Steganography (Malware Camouflage)
- steganography is camouflaging data or a file in another file
  - hiding a malware in am image
- steganography countermeasures
  - looks for blurring on edges
  - comparing to original image

### Concealment
- concealment is used to change what an object looks like so it will not be detected
- countermeasures usually require one to make specific cases for the concealment used or look for physical properties that cannot be change

#### Span (Email Intend Concealment)
- spam is used to sell or act as a trojan horse by looking like benign emails
- spam countermeasures
  - use a bayesian classifier with a bagging method to detect spam

### Deception
- Deception is used to focus the attention of an enemy from real objects of interest
- like with concealment, generally models have to be trained on specific traits the decoys do ont have

#### Honeypot (Deception from True Goal of a Hack)
- honeypots are deliberate deceptions that look like data valuable to hackers on an information system
- honeypot countermeasures
  - too good to be true
  - out of the ordinary files