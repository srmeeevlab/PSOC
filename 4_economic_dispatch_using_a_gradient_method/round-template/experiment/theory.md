### INTRODUCTION<br>
#### The objective of the electric utility or grid operator on an hour-to-hour basis is to minimize the total generation cost of meeting electricity demand. Economic Dispatch is the procedure by which the utility selects which of its generators it will use to meet electricity demand. You can think about economic dispatch like clearing the electricity market, as follows:

#### The utility constructs a marginal cost (supply) curve for its entire system.
#### Demand is often assumed to be price-inelastic (vertical demand curve).
#### The marginal cost of generation at the market-clearing point (supply = demand) is called the "System Lambda."
#### The generator whose output serves the marginal kWh of electricity demand is called the "marginal unit."
#### We will go through the economic dispatch procedure using two models for power generation costs. The first model assumes that the marginal costs of power plants are all constant. The second assumes that the marginal costs of power plants are all linear (so marginal cost increases as more power is generated).

<br>

### CONCEPT<br>
#### We discussed the equal incremental principle for classical Economic dispatch (ED) in the previous sections. Generally, the equal incremental principle is good only if the       input–output characteristic of the generation unit is a quadratic function, or the incremental input–output characteristic is a piecewise linear function.  If the input–output characteristics of the practical power generating unit may be a cubic function, or more complex. 
#### If the input-output curve of unit i  is quadratic, we can write
#### img

#### In this case, the Gradient Method is used for solving Economic Dispatch problem due to highly nonlinear input-output characteristics (Fuel Vs Cost) of power plant.
#### The principle of the gradient method is that the minimum of a function, f (x), can be found by a series of steps that always go in the downward direction. The gradient of the function f (x) can be expressed as follows:

#### img
#### •	The gradient  always points to the direction of maximum ascent.
#### •	If we want to move in the direction of maximum descent, we negate the gradient. Thus the direction of steepest descent form minimizing a function can be found by use of the direction
#### img
#### Applying the gradient method to ED, the objective function will be
#### img
#### The constraint is the real power balance equation,
 img
#### As mentioned before, to solve this classic ED problem, the Lagrange function should be constructed first
img
#### The gradient of the Lagrange function is
 img
#### To use the gradient ∇L to solve the ED problem, the starting values 
#### P0G1, P0G2, … , P0GN, and 𝜆0 should be given.  Then the new values will be computed by the following equation.
 img
#### where the vectors x1, x0 are
 
