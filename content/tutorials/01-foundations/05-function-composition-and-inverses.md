---
title: Function Composition and Inverse Functions
description: Understand how functions can be combined, how composition order works, and when a function has an inverse.
tags:
  - mathematics
  - functions
---

## Function Composition and Inverse Functions

Functions describe relationships between inputs and outputs. Once functions are understood individually, two powerful ideas become available: combining functions and reversing a function's input-output relationship.

These ideas appear throughout mathematics and are especially important in machine learning. A neural network, for example, is built by composing transformations layer after layer.

## 1. Function composition

Function composition means using the output of one function as the input of another.

If \(f\) and \(g\) are functions, the composition of \(f\) with \(g\) is written

\[
(f\circ g)(x)=f(g(x))
\]

Read this as “\(f\) composed with \(g\)”. The function on the right, \(g\), is applied first. Its output is then passed into \(f\).

Suppose

\[
f(x)=2x+3,\qquad g(x)=x^2
\]

Then

\[
(f\circ g)(x)=f(x^2)=2x^2+3
\]

But reversing the order gives

\[
(g\circ f)(x)=g(2x+3)=(2x+3)^2
\]

In general, \(f\circ g\) is not the same as \(g\circ f\). Function composition is not commutative.

## 2. Evaluating a composition

To evaluate a composition, substitute the entire inner function wherever the input variable appears in the outer function.

For \(f(g(x))\), first identify the expression \(g(x)\). Then replace every occurrence of the input in \(f\) with that expression. Parentheses matter because the complete output of the inner function is the new input.

Composition can also be evaluated at a particular input. One may calculate the inner function's output first and then feed that value into the outer function. This numerical interpretation mirrors the symbolic substitution.

## 3. Domain of a composition

A composition is defined only when both stages are valid.

For \(f(g(x))\), an input \(x\) must belong to the domain of \(g\). In addition, the output \(g(x)\) must belong to the domain of \(f\).

Thus the domain of \(f\circ g\) consists of all inputs in the domain of \(g\) whose outputs lie in the domain of \(f\).

This condition matters when functions contain square roots, logarithms or denominators. A formula may look algebraically valid after simplification while the original composition still has restrictions inherited from its component functions.

## 4. Associativity and identity functions

Composition is associative:

\[
f\circ(g\circ h)=(f\circ g)\circ h
\]

This means that when several functions are composed, changing the grouping does not change the resulting function, provided the compositions are defined.

Composition is not generally commutative, however. Changing the order can change the result.

The identity function is defined by \(I(x)=x\). Composing any function with the identity leaves it unchanged:

\[
f\circ I=I\circ f=f
\]

The identity function plays a role similar to the number 1 in multiplication: it leaves the object unchanged under the operation.

## 5. What is an inverse function?

An inverse function reverses the action of another function.

If \(f\) maps an input \(x\) to an output \(y\), its inverse maps that output \(y\) back to the original input \(x\). The inverse is written \(f^{-1}\).

The defining relationship is

\[
f^{-1}(f(x))=x
\]

and, on the corresponding range,

\[
f(f^{-1}(y))=y
\]

The notation \(f^{-1}\) does not mean \(1/f\). It denotes the inverse function, not the reciprocal of the function's output.

## 6. When does an inverse exist?

A function has an inverse function on its full domain precisely when it is one-to-one (injective). A one-to-one function never maps two different inputs to the same output.

The horizontal line test gives a graphical way to identify this property: every horizontal line must intersect the graph at most once.

A function that is not one-to-one may sometimes be restricted to a smaller domain so that it becomes one-to-one. For example, the function \(f(x)=x^2\) is not one-to-one over all real numbers because \(f(2)=f(-2)\). Restricting its domain to \(x\ge0\) makes it one-to-one and gives it an inverse.

A function's inverse has the original function's range as its domain, and the original function's domain as its range.

## 7. Finding an inverse algebraically

To find an inverse, begin with

\[
y=f(x)
\]

Then interchange \(x\) and \(y\), and solve the resulting equation for \(y\). The expression obtained is \(f^{-1}(x)\), with its domain and range understood from the original function.

For example, let

\[
f(x)=3x-5
\]

Write \(y=3x-5\), interchange the variables to obtain \(x=3y-5\), and solve:

\[
y=\frac{x+5}{3}
\]

Therefore,

\[
f^{-1}(x)=\frac{x+5}{3}
\]

The result can be checked by composing the function with its inverse. Both composition directions should simplify to the identity on their appropriate domains.

## 8. Graphs of inverse functions

The graph of an inverse function is the reflection of the original graph across the line \(y=x\).

This happens because the input and output coordinates are exchanged. A point \((a,b)\) on the graph of \(f\) corresponds to the point \((b,a)\) on the graph of \(f^{-1}\).

The reflection also explains why the domain and range swap.

## 9. Why composition matters in machine learning

A neural network can be represented as a composition of functions. Each layer applies a transformation, often followed by a nonlinear activation function. The output of one layer becomes the input to the next.

If the transformations are written as \(f_1,f_2,\ldots,f_n\), the complete model is a composition such as

\[
f_n\circ f_{n-1}\circ\cdots\circ f_1
\]

Understanding composition clarifies how a model transforms data through successive stages.

Inverse functions also appear in probability transformations, data normalization, reversible transformations and generative modelling. Not every transformation used in a model is invertible, so understanding one-to-one behaviour and domain restrictions is important.
