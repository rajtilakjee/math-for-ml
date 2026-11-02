---
title: Polynomial Functions
description: Explore polynomial structure, operations, roots, division, graph behaviour, symmetry, and machine-learning applications.
tags:
  - mathematics
  - polynomials
---

## Introduction to Polynomials

Before studying polynomial functions, let's understand what a polynomial is.

A **polynomial** is an algebraic expression consisting of variables,
coefficients, and non-negative integer powers of variables, combined using
addition, subtraction, and multiplication.

For example:

$$
3x^2+5x+2
$$

is a polynomial.

So are:

$$
x^3-4x^2+7x-1
$$

and:

$$
5x^4+2x^2-9
$$

A polynomial can contain one term or several terms.

However, not every algebraic expression is a polynomial.

For example:

$$
\frac{1}{x}+2
$$

is not a polynomial because the variable appears with a negative exponent:

$$
x^{-1}+2
$$

Similarly:

$$
\sqrt{x}+3
$$

is not a polynomial because:

$$
\sqrt{x}=x^{1/2}
$$

The exponent of a variable in a polynomial must be a non-negative integer.

### 1.1 General form of a polynomial

A polynomial in one variable $x$ can be written as:

$$
\boxed{P(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_2x^2+a_1x+a_0}
$$

where:

- $P(x)$ represents the polynomial function.
- $x$ is the variable.
- $a_0,a_1,\ldots,a_n$ are constants called coefficients.
- $n$ is a non-negative integer.
- $a_n\ne0$.

The highest power of $x$ determines the degree of the polynomial.

For example:

$$
P(x)=4x^3+2x^2-5x+7
$$

Here:

$$
a_3=4,\quad a_2=2,\quad a_1=-5,\quad a_0=7
$$

The degree is 3 because the highest exponent is 3.

---

## Terms, Coefficients, Constants and Degree

To understand polynomials, we need to understand their individual
components.

Consider:

$$
P(x)=5x^4-3x^3+2x^2+7x-9
$$

### 2.1 Terms

A term is an individual part of an expression separated by addition or
subtraction.

The terms are:

$$
5x^4,\quad -3x^3,\quad 2x^2,\quad 7x,\quad -9
$$

### 2.2 Coefficients

A coefficient is the numerical factor multiplying a variable or its power.

In the expression:

$$
5x^4-3x^3+2x^2+7x-9
$$

the coefficients are:

$$
5,\quad -3,\quad 2,\quad 7
$$

The constant term is $-9$.

### 2.3 Constant term

A constant term is a term that does not contain a variable.

For example:

$$
P(x)=3x^2+5x+8
$$

The constant term is 8.

### 2.4 Degree of a polynomial

The degree of a polynomial is the highest exponent of its variable with a
non-zero coefficient.

For example:

$$
P(x)=7x^5+3x^3-2x+4
$$

The degree is 5.

The degree does not depend on how many terms the polynomial contains. It
depends only on the highest exponent.

For a non-zero constant polynomial:

$$
P(x)=7
$$

the degree is 0.

The zero polynomial, whose value is always zero, does not have a defined
degree under the usual convention.

---

## Types of Polynomials

Polynomials can be classified according to their degree.

### 3.1 Constant polynomial

A constant polynomial has degree 0.

General form:

$$
P(x)=c
$$

Example:

$$
P(x)=8
$$

Its graph is a horizontal line.

### 3.2 Linear polynomial

A linear polynomial has degree 1.

General form:

$$
P(x)=ax+b,\qquad a\ne0
$$

Example:

$$
P(x)=3x+2
$$

Its graph is a straight line.

### 3.3 Quadratic polynomial

A quadratic polynomial has degree 2.

General form:

$$
P(x)=ax^2+bx+c,\qquad a\ne0
$$

Example:

$$
P(x)=x^2-5x+6
$$

Its graph is a parabola.

### 3.4 Cubic polynomial

A cubic polynomial has degree 3.

General form:

$$
P(x)=ax^3+bx^2+cx+d,\qquad a\ne0
$$

Example:

$$
P(x)=x^3-3x^2+2x+1
$$

Its graph can have more complicated shapes than a straight line or parabola.

### 3.5 Quartic polynomial

A quartic polynomial has degree 4.

General form:

$$
P(x)=ax^4+bx^3+cx^2+dx+e,\qquad a\ne0
$$

Example:

$$
P(x)=2x^4-3x^2+5
$$

### 3.6 Higher-degree polynomials

Polynomials can have any non-negative integer degree.

For example:

$$
P(x)=x^5+2x^3-x+1
$$

is a fifth-degree polynomial.

A polynomial of degree $n$ can have at most $n$ distinct real roots.

---

## Polynomial Functions

A polynomial expression becomes a polynomial function when we define a
relationship between an input and an output.

For example:

$$
f(x)=x^2+3x+2
$$

This function takes an input $x$, squares it, multiplies it by 3, and adds 2.

If we substitute $x=2$:

$$
f(2)=2^2+3(2)+2
$$

$$
=4+6+2
$$

$$
\boxed{f(2)=12}
$$

The function maps the input 2 to the output 12.

### 4.1 Evaluating polynomial functions

Consider:

$$
f(x)=2x^3-3x^2+x+4
$$

To evaluate the function at $x=2$, substitute 2 everywhere we see $x$:

$$
f(2)=2(2)^3-3(2)^2+2+4
$$

Calculate each term:

$$
=16-12+2+4
$$

Therefore:

$$
\boxed{f(2)=10}
$$

Substitution is the basic operation used to evaluate any polynomial
function.

### 4.2 Domain of polynomial functions

One important property of polynomial functions is that their domain is
always all real numbers.

For example:

$$
f(x)=x^3-4x^2+2x+5
$$

We can substitute any real number for $x$.

There are no restrictions caused by division by zero, square roots of
negative numbers, or logarithms.

Therefore:

$$
\boxed{\text{Domain}=(-\infty,\infty)}
$$

The range, however, depends on the particular polynomial.

For example:

$$
f(x)=x^2
$$

has range:

$$
[0,\infty)
$$

while:

$$
g(x)=x^3
$$

has range:

$$
(-\infty,\infty)
$$

---

## Polynomial Arithmetic

Polynomials can be added, subtracted, multiplied, and divided.

These operations follow the same algebraic principles we have already
learned.

### 5.1 Addition of polynomials

To add polynomials, combine like terms.

Like terms have the same variable raised to the same power.

Consider:

$$
P(x)=3x^2+2x+5
$$

and:

$$
Q(x)=2x^2+4x+3
$$

Add them:

$$
P(x)+Q(x)
$$

$$
=(3x^2+2x+5)+(2x^2+4x+3)
$$

Combine like terms:

$$
=5x^2+6x+8
$$

Therefore:

$$
\boxed{P(x)+Q(x)=5x^2+6x+8}
$$

### 5.2 Subtraction of polynomials

Consider the same two polynomials:

$$
P(x)=3x^2+2x+5
$$

$$
Q(x)=2x^2+4x+3
$$

Subtract:

$$
P(x)-Q(x)
$$

$$
=(3x^2+2x+5)-(2x^2+4x+3)
$$

Distribute the negative sign:

$$
=3x^2+2x+5-2x^2-4x-3
$$

Combine like terms:

$$
\boxed{P(x)-Q(x)=x^2-2x+2}
$$

### 5.3 Multiplication of polynomials

To multiply polynomials, multiply every term in the first polynomial by
every term in the second polynomial.

Consider:

$$
(x+2)(x+3)
$$

Multiply:

$$
=x(x+3)+2(x+3)
$$

$$
=x^2+3x+2x+6
$$

Combine like terms:

$$
\boxed{x^2+5x+6}
$$

For larger expressions, the same distributive principle applies.

For example:

$$
(x^2+2x+1)(x+2)
$$

Multiply each term:

$$
=x^3+2x^2+x^2+4x+x+2
$$

Combine like terms:

$$
\boxed{x^3+3x^2+5x+2}
$$

### 5.4 Degree of a product

When two non-zero polynomials are multiplied, the degree of the resulting
polynomial is the sum of their degrees.

For example:

$$
P(x)=x^2+1
$$

has degree 2, and:

$$
Q(x)=x^3+2
$$

has degree 3.

Their product has degree:

$$
2+3=5
$$

This property is useful when predicting the degree of a polynomial without
expanding the entire expression.

---

## Roots and Zeros of Polynomial Functions

A root or zero of a polynomial is a value of $x$ that makes the polynomial
equal to zero.

For a polynomial function:

$$
P(x)
$$

a root is a value $r$ such that:

$$
\boxed{P(r)=0}
$$

For example:

$$
P(x)=x^2-5x+6
$$

To find its roots, set the function equal to zero:

$$
x^2-5x+6=0
$$

Factorise:

$$
(x-2)(x-3)=0
$$

Therefore:

$$
x=2\quad\text{or}\quad x=3
$$

The roots are:

$$
\boxed{2,\quad3}
$$

### 6.1 Roots and x-intercepts

Roots have a direct geometric interpretation.

The graph of a polynomial function intersects the horizontal axis wherever:

$$
P(x)=0
$$

Therefore, the roots of a polynomial are the x-coordinates of the points
where its graph crosses or touches the x-axis.

For example:

$$
P(x)=x^2-4
$$

has roots:

$$
x=-2,\quad x=2
$$

Its graph intersects the x-axis at:

$$
(-2,0),\quad(2,0)
$$

This creates a connection between algebraic solutions and graphical
behaviour.

### 6.2 The Fundamental Theorem of Algebra

The Fundamental Theorem of Algebra states that every non-constant polynomial
of degree $n$ has exactly $n$ complex roots when roots are counted with
multiplicity.

For example, a polynomial of degree 2 has two complex roots, a polynomial of
degree 3 has three, and a polynomial of degree 4 has four.

Some of these roots may be real, while others may be complex.

A real polynomial of degree $n$ can have at most $n$ distinct real roots.

---

## The Factor Theorem

The Factor Theorem provides a connection between the roots of a polynomial
and its factors.

It states:

If:

$$
P(r)=0
$$

then:

$$
\boxed{(x-r)\text{ is a factor of }P(x)}
$$

In other words, if a number $r$ is a root of a polynomial, then $x-r$ must
be one of its factors.

### 7.1 Understanding the Factor Theorem

Consider:

$$
P(x)=x^2-5x+6
$$

We know that:

$$
P(2)=2^2-5(2)+6
$$

$$
=4-10+6
$$

$$
=0
$$

Therefore, 2 is a root.

According to the Factor Theorem:

$$
(x-2)
$$

must be a factor.

Similarly:

$$
P(3)=3^2-5(3)+6
$$

$$
=9-15+6
$$

$$
=0
$$

Therefore, 3 is also a root, and:

$$
(x-3)
$$

is another factor.

Thus:

$$
\boxed{P(x)=(x-2)(x-3)}
$$

The Factor Theorem is useful when identifying polynomial factors and finding
roots.

---

## The Remainder Theorem

The Remainder Theorem tells us what happens when a polynomial is divided by
a linear expression.

It states:

When a polynomial $P(x)$ is divided by $x-r$, the remainder is:

$$
\boxed{P(r)}
$$

For example, consider:

$$
P(x)=x^2+3x+5
$$

Suppose we divide it by:

$$
x-2
$$

According to the Remainder Theorem, the remainder is:

$$
P(2)
$$

Substitute 2:

$$
P(2)=2^2+3(2)+5
$$

$$
=4+6+5
$$

$$
=15
$$

Therefore, the remainder is:

$$
\boxed{15}
$$

If the remainder is zero, the divisor is a factor of the polynomial.

This connects the Remainder Theorem directly to the Factor Theorem.

---

## Polynomial Division

Polynomial division is similar to ordinary numerical long division.

It allows us to divide one polynomial by another and express the result as a
quotient and remainder.

The general division relationship is:

$$
\boxed{P(x)=D(x)Q(x)+R(x)}
$$

where:

- $P(x)$ is the dividend.
- $D(x)$ is the divisor.
- $Q(x)$ is the quotient.
- $R(x)$ is the remainder.

The degree of the remainder must be smaller than the degree of the divisor.

### 9.1 Polynomial long division

Consider:

$$
\frac{x^2+5x+6}{x+2}
$$

We want to find the quotient.

First, divide the leading term of the dividend by the leading term of the
divisor:

$$
\frac{x^2}{x}=x
$$

Multiply the divisor by $x$:

$$
x(x+2)=x^2+2x
$$

Subtract:

$$
(x^2+5x+6)-(x^2+2x)
$$

$$
=3x+6
$$

Now divide the new leading term by the leading term of the divisor:

$$
\frac{3x}{x}=3
$$

Multiply:

$$
3(x+2)=3x+6
$$

Subtract:

$$
(3x+6)-(3x+6)=0
$$

The remainder is zero.

Therefore:

$$
\boxed{\frac{x^2+5x+6}{x+2}=x+3}
$$

This also confirms the factorisation:

$$
x^2+5x+6=(x+2)(x+3)
$$

### 9.2 Synthetic division

Synthetic division is a shortened method for dividing a polynomial by a
linear factor of the form:

$$
x-r
$$

It uses the root $r$ instead of writing the entire divisor repeatedly.

For example, dividing:

$$
P(x)=x^2+5x+6
$$

by:

$$
x+2
$$

uses $r=-2$.

The coefficients are:

$$
1,\quad5,\quad6
$$

Synthetic division proceeds as follows:

1. Bring down the first coefficient, 1.
2. Multiply it by $-2$, giving $-2$.
3. Add it to 5, giving 3.
4. Multiply 3 by $-2$, giving $-6$.
5. Add it to 6, giving 0.

The quotient coefficients are 1 and 3, so the quotient is:

$$
x+3
$$

The remainder is 0.

Synthetic division is particularly useful when repeatedly dividing
higher-degree polynomials by linear factors.

---

## Multiplicity of Roots

A root can appear more than once in the factorisation of a polynomial.

This is called its **multiplicity**.

Consider:

$$
P(x)=(x-2)^2
$$

Expanding:

$$
P(x)=x^2-4x+4
$$

The root is:

$$
x=2
$$

However, the factor $(x-2)$ appears twice.

Therefore, 2 is a root of multiplicity 2, also called a repeated root or
double root.

Similarly:

$$
P(x)=(x-1)^3
$$

has a root at:

$$
x=1
$$

with multiplicity 3.

### 10.1 How multiplicity affects a graph

Multiplicity influences how a polynomial behaves near a root.

When a root has odd multiplicity, the graph generally crosses the x-axis at
that root.

When a root has even multiplicity, the graph touches the x-axis and turns
around instead of crossing it.

For example:

$$
P(x)=(x-2)^2
$$

touches the x-axis at $x=2$ and turns upward.

But:

$$
Q(x)=(x-2)^3
$$

crosses the x-axis at $x=2$.

This is an important connection between algebraic factorisation and the
shape of polynomial graphs.

---

## Behaviour of Polynomial Graphs

Polynomial functions can have many different graph shapes depending on their
degree and coefficients.

One particularly important property is their **end behaviour**.

End behaviour describes what happens to the output of a function as the
input becomes very large in the positive or negative direction.

For a polynomial:

$$
P(x)=a_nx^n+\cdots+a_1x+a_0
$$

the end behaviour is determined primarily by:

- The degree $n$.
- The leading coefficient $a_n$.

The leading term is:

$$
a_nx^n
$$

For very large positive or negative values of $x$, the highest-degree term
dominates the behaviour of the polynomial.

### 11.1 Even-degree polynomials with a positive leading coefficient

Consider:

$$
P(x)=x^2
$$

The degree is 2, which is even, and the leading coefficient is positive.

As $x$ becomes very large in either direction, the function increases
towards positive infinity.

$$
\lim_{x\to\infty}P(x)=\infty
$$

$$
\lim_{x\to-\infty}P(x)=\infty
$$

Both ends of the graph point upwards.

### 11.2 Even-degree polynomials with a negative leading coefficient

Consider:

$$
P(x)=-x^2
$$

The degree is even, but the leading coefficient is negative.

Both ends of the graph point downwards:

$$
\lim_{x\to\infty}P(x)=-\infty
$$

$$
\lim_{x\to-\infty}P(x)=-\infty
$$

### 11.3 Odd-degree polynomials with a positive leading coefficient

Consider:

$$
P(x)=x^3
$$

The degree is 3, which is odd, and the leading coefficient is positive.

As $x$ approaches positive infinity, the output approaches positive
infinity.

As $x$ approaches negative infinity, the output approaches negative
infinity.

$$
\lim_{x\to\infty}P(x)=\infty
$$

$$
\lim_{x\to-\infty}P(x)=-\infty
$$

The left end points downwards and the right end points upwards.

### 11.4 Odd-degree polynomials with a negative leading coefficient

Consider:

$$
P(x)=-x^3
$$

The degree is odd and the leading coefficient is negative.

The left end points upwards, and the right end points downwards:

$$
\lim_{x\to\infty}P(x)=-\infty
$$

$$
\lim_{x\to-\infty}P(x)=\infty
$$

### 11.5 Summary of polynomial end behaviour

| Degree | Leading coefficient | Left end | Right end |
|---|---|---|---|
| Even | Positive | Up | Up |
| Even | Negative | Down | Down |
| Odd | Positive | Down | Up |
| Odd | Negative | Up | Down |

This gives us a quick way to understand the general shape of a polynomial
graph without calculating every point.

---

## Turning Points and Local Extrema

Polynomial graphs can change direction.

A point where a graph changes from increasing to decreasing, or from
decreasing to increasing, is called a **turning point**.

A polynomial of degree $n$ can have at most:

$$
\boxed{n-1\text{ turning points}}
$$

For example:

- A linear polynomial has no turning points.
- A quadratic polynomial can have at most one turning point.
- A cubic polynomial can have at most two turning points.
- A quartic polynomial can have at most three turning points.

A turning point can be a local maximum or a local minimum.

A **local maximum** is a point where the function has a higher value than
nearby points.

A **local minimum** is a point where the function has a lower value than
nearby points.

These concepts become much more important when we study calculus,
particularly derivatives and optimisation.

---

## Symmetry in Polynomial Functions

Some polynomial functions have useful symmetry properties.

Two important types are even functions and odd functions.

### 13.1 Even functions

A function is even if:

$$
\boxed{f(-x)=f(x)}
$$

for every input in its domain.

For example:

$$
f(x)=x^2
$$

Substitute $-x$:

$$
f(-x)=(-x)^2=x^2
$$

Therefore:

$$
f(-x)=f(x)
$$

The graph of an even function is symmetric about the y-axis.

Examples include:

$$
f(x)=x^2
$$

and:

$$
g(x)=x^4+2x^2+1
$$

### 13.2 Odd functions

A function is odd if:

$$
\boxed{f(-x)=-f(x)}
$$

For example:

$$
f(x)=x^3
$$

Substitute $-x$:

$$
f(-x)=(-x)^3=-x^3
$$

Therefore:

$$
f(-x)=-f(x)
$$

The graph of an odd function has symmetry about the origin.

Examples include:

$$
f(x)=x^3
$$

and:

$$
g(x)=2x^5-3x^3+x
$$

A polynomial containing only even powers is an even function, provided it
has no odd-power terms.

A polynomial containing only odd powers and no constant term is an odd
function.

---

## Polynomial Functions with Multiple Variables

So far, we have focused on polynomials in one variable.

Polynomials can also contain multiple variables.

For example:

$$
P(x,y)=3x^2+2xy+5y^2+4x-7
$$

This is a polynomial in two variables, $x$ and $y$.

Each term has a coefficient and powers of one or more variables.

For example:

$$
3x^2
$$

has a total degree of 2.

The term:

$$
2xy
$$

also has a total degree of 2 because:

$$
1+1=2
$$

The term:

$$
5y^2
$$

has a total degree of 2.

The total degree of a multivariable polynomial is the highest sum of the
exponents in any term.

For example:

$$
P(x,y)=x^3y^2+2x^2y+5
$$

The first term has total degree:

$$
3+2=5
$$

The second term has total degree:

$$
2+1=3
$$

The constant has degree 0.

Therefore, the total degree of the polynomial is:

$$
\boxed{5}
$$

Multivariable polynomials are particularly important in machine learning
because datasets often contain many input variables, also called features.

---

## Why Polynomial Functions Matter in Machine Learning

Polynomial functions are not just an algebra topic. They appear in several
important areas of machine learning.

### 15.1 Polynomial regression

Linear regression models a relationship using a linear function:

$$
y=wx+b
$$

However, not every relationship between inputs and outputs is linear.

For example, a dataset might show a curved relationship.

Polynomial regression extends linear regression by introducing higher powers
of the input:

$$
\boxed{y=w_0+w_1x+w_2x^2+\cdots+w_nx^n}
$$

Here:

- $w_0$ is the intercept.
- $w_1$ is the coefficient of the first-degree term.
- $w_2$ is the coefficient of the quadratic term.
- $w_n$ is the coefficient of the highest-degree term.

For example, a second-degree polynomial regression model is:

$$
y=w_0+w_1x+w_2x^2
$$

This model can represent curved relationships that a straight-line model
cannot capture.

### 15.2 Polynomial feature expansion

Polynomial feature expansion transforms an input into additional features
based on its powers.

For a single input variable $x$, a degree-3 expansion produces:

$$
[x,\ x^2,\ x^3]
$$

For two input variables $x_1$ and $x_2$, a degree-2 expansion can include:

$$
[x_1,\ x_2,\ x_1^2,\ x_1x_2,\ x_2^2]
$$

These additional features allow a model to represent interactions and
nonlinear relationships.

An important detail is that polynomial regression can still be linear in its
parameters, even though it is nonlinear in its input variables.

For example:

$$
y=w_0+w_1x+w_2x^2
$$

is linear with respect to the parameters $w_0,w_1,w_2$.

This distinction is useful when studying linear models and feature
engineering.

### 15.3 Overfitting and polynomial degree

Increasing the degree of a polynomial gives the model more flexibility.

A low-degree polynomial may be too simple to represent the underlying
relationship. This is called underfitting.

A very high-degree polynomial may fit the training data extremely closely
but behave poorly on new data. This is called overfitting.

The objective is to choose a suitable model complexity that captures the
underlying pattern without fitting random noise.

This introduces an important machine learning concept: the bias-variance
trade-off.

We will study that in more detail when we reach classical machine learning.

---

## Summary

We have covered the major mathematical ideas behind polynomial functions.

### Core concepts

- A polynomial is an expression containing variables raised to non-negative
  integer powers.
- The degree is the highest exponent with a non-zero coefficient.
- Polynomials can be constant, linear, quadratic, cubic, quartic, or
  higher-degree.
- Polynomial functions accept all real numbers as inputs.
- Polynomials can be added, subtracted, multiplied, and divided.
- Roots are the inputs that make a polynomial equal to zero.
- The Factor Theorem connects roots to polynomial factors.
- The Remainder Theorem helps determine the remainder of polynomial
  division.
- Root multiplicity affects how a graph behaves near the x-axis.
- The degree and leading coefficient determine the end behaviour of a
  polynomial.
- Even and odd functions have different symmetry properties.
- Multivariable polynomials contain more than one variable.

### Connection to machine learning

Polynomial functions provide the mathematical foundation for:

- Polynomial regression.
- Feature expansion.
- Modelling nonlinear relationships.
- Understanding model complexity.
- Understanding underfitting and overfitting.

With polynomial functions, we have extended our understanding beyond linear
and quadratic equations.

Our next topic is **Function Composition**, where we will learn how
functions can be combined and how the output of one function can become the
input of another.

This concept will later help us understand how layers in a neural network
are composed into a larger mathematical function.
