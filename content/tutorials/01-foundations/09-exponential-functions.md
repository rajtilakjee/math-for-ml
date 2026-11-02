---
title: Exponential Functions
description: Understand exponential growth and decay, the constant e, graph behaviour, transformations and applications.
tags:
  - mathematics
  - functions
---

## Exponential Functions

An exponential function is a function in which the input appears in the exponent. Exponential functions describe processes where a quantity changes in proportion to its current value. This makes them useful for modelling growth, decay, compounding and many processes in science and machine learning.

## 1. Definition

A basic exponential function has the form

\[
f(x)=a^x
\]

where \(a\) is a positive constant called the base and \(a\ne1\).

The input \(x\) is the exponent. This is different from a polynomial, where the variable is raised to fixed nonnegative integer powers and the coefficients vary.

For \(a>1\), the function increases as \(x\) increases. For \(0<a<1\), it decreases.

The value \(a=1\) is excluded because \(1^x=1\) is a constant function rather than an exponential growth or decay curve.

## 2. Exponential growth

When the base is greater than 1, equal increases in the input multiply the output by a constant factor.

For a growth model,

\[
f(x)=A a^x,\qquad a>1
\]

where \(A\) is the initial value when \(x=0\).

If the input increases by one unit, the output is multiplied by \(a\). If it increases by \(k\) units, the output is multiplied by \(a^k\).

This constant multiplicative change is the defining feature of exponential growth. It differs from linear growth, where equal increases in the input add a constant amount to the output.

## 3. Exponential decay

When the base lies between zero and one, the function decreases as the input increases.

A decay model can be written as

\[
f(x)=A b^x,\qquad 0<b<1
\]

The output is multiplied by the same fraction for each unit increase in the input. It approaches zero as \(x\) increases but does not reach zero for any finite real input when \(A\ne0\).

Decay models are used for quantities such as radioactive material, depreciation and processes that lose a constant proportion over equal time intervals.

## 4. The number e

The number \(e\) is an important mathematical constant, approximately \(2.71828\). It is the natural base for exponential functions and appears whenever a rate of change is proportional to the current amount.

The natural exponential function is

\[
f(x)=e^x
\]

It has the special property that its derivative is itself, a fact that will become important when calculus is introduced.

The constant \(e\) can be defined through a limit:

\[
e=\lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n
\]

This expression is connected to continuous compounding: as the number of compounding periods increases without bound, the growth approaches a model based on \(e\).

## 5. Continuous growth and decay

A continuous exponential model is commonly written

\[
f(t)=A e^{kt}
\]

where \(A\) is the initial amount and \(k\) is the continuous growth-rate constant.

If \(k>0\), the quantity grows. If \(k<0\), it decays. If \(k=0\), it remains constant.

The rate constant has units inverse to the time unit used for \(t\). For example, if time is measured in years, \(k\) is measured per year.

## 6. Graph properties

For the basic function \(f(x)=a^x\):

- The domain is all real numbers.
- The range is all positive real numbers.
- The graph passes through \((0,1)\), because \(a^0=1\).
- The x-axis, \(y=0\), is a horizontal asymptote.
- The function is increasing for \(a>1\) and decreasing for \(0<a<1\).

Multiplying by a positive constant changes the vertical scale. Adding a constant shifts the graph vertically and moves its horizontal asymptote accordingly.

The graph never crosses its horizontal asymptote in the basic exponential model.

## 7. Exponential equations

An exponential equation contains the unknown in an exponent. When both sides can be expressed using the same base, equality of the exponents can be used because an exponential function with a positive base other than 1 is one-to-one.

When matching bases is not convenient, logarithms can bring an exponent down into a product, allowing the unknown exponent to be isolated. This connects exponential functions directly to the logarithms introduced earlier.

## 8. Exponential functions in machine learning

Exponential functions appear throughout machine learning.

The softmax function converts a vector of scores into normalized positive values that sum to one. It uses exponentials to emphasize larger scores while preserving a probabilistic interpretation.

The sigmoid function,

\[
\sigma(x)=\frac{1}{1+e^{-x}}
\]

maps any real input to a value strictly between zero and one. It has historically been used as a neural-network activation and remains useful in binary classification.

Exponential terms also appear in probability distributions, likelihood functions, entropy-related calculations, learning-rate schedules and numerical algorithms.

A solid understanding of exponential growth, decay and the natural base \(e\) prepares us for probability, calculus and deep learning.
