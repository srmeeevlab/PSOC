### INTRODUCTION`<br>`

#### The unit commitment using the priority list method used in heuristic for the purpose of rank generating units with help of increasing operation cost. Its deals with scheduling the ON/OFF status of the generating unit. Necessity is sufficient Units will be committed to supplying the system load and decreasing the loss.

### CONCEPT

#### The non-linear equations relating the measurements z and the state vector using the measurement functions h(x) with the noise vector v as z = h(x)+v.

#### It is assumed that the mistakes are independent random variables, and that they follow a Gaussian distribution with a mean of zero. The degree to which the measurement error varies from one instance to another is one way to assess the reliability of a given measurement. If there is a high variation, then the measurement that corresponds to it is probably not very accurate. In terms of the total variance of all measurements, the measurement error covariance matrix may be expressed as.

#### Since the mistakes themselves are random variables, this means that the measurements themselves are also random variables. In addition to this, has a Gaussian distribution, complete with a mean and a covariance. As an expression, the probability density function of may be written as

#### The goal of the SE problem is to estimate the state of the system in such a way that it maximizes the chance of the real value being equal to the measured quantity, or more specifically, that it maximizes the probability density function associated with the, estimate that is derived in this manner is referred to as the estimate with the highest probability.

#### In this scenario, the WLS estimate is the most popular name for the maximum likelihood estimate. This is due to the fact that the WLS estimate minimizes the error squared while taking into account the precision of the measurement.

#### When we solve the WLS issue, we get an estimated state that has to meet the following requirements:

#### You may achieve a solution that satisfies SE by repeatedly for until the value of is sufficiently minimal. Product is referred to as the gain matrix. If there are enough measurements and they are spread evenly, then the measurement Jacobian will have a complete rank, and as a result, the gain matrix will not be single. When this occurs, we say that the network is observable, which makes it possible for the algorithm to converge iteratively on a solution to the problem. When attempting to solve these equations, you will need to make an initial assumption. The most recent estimate serves as the basis for the first figure that serves as a guess. It is possible for it to be initialized with a flat voltage profile, in which the voltage magnitudes and their angles are considered to be 1.0 per unit and 0.0 radians correspondingly. This is one of the possible configurations. Despite this, the jacobian matrix is a function of the state vector, and it is necessary to calculate it at each iteration of the process. Therefore, a large amount of computing time is required in order to acquire the answer, and as a result, it is not very efficient. Nevertheless, it is able to do good filtering when the mistakes have a Gaussian distribution, but it is not successful when there is poor data.

#### Formulae

The probability density function of  is expressed as

It is clear from the property of the exponential function that maximizing  of Eq. (3) is equivalent to minimizing the quadratic term in the exponent:

The solution of the WLS problem of Eq. (4) gives the estimated state  , which must satisfy the following condition:
