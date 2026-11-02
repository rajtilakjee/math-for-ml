---
title: Rational Functions
description: Study ratios of polynomials, domain restrictions, asymptotes, holes, intercepts and the behaviour of rational graphs.
tags:
  - mathematics
  - functions
---

## Rational Functions

A rational function is a function that can be expressed as the ratio of two polynomials. Rational functions extend the ideas of fractions and polynomial functions, while introducing important domain restrictions and graph features such as asymptotes.

## 1. Definition and general form

A rational function has the form

\[
f(x)=\frac{P(x)}{Q(x)}
\]

where \(P(x)\) and \(Q(x)\) are polynomials and \(Q(x)\ne0\).

The denominator restriction is fundamental. Division by zero is undefined, so every value that makes \(Q(x)=0\) must be excluded from the domain, even if algebraic simplification later removes a common factor.

A simple example is

\[
f(x)=\frac{1}{x}
\]

which is defined for every real number except zero.

## 2. Domain of a rational function

To find the domain, identify the values that make the denominator equal to zero and exclude them.

For example,

\[
f(x)=\frac{x+2}{x^2-4}
\]

has a denominator that factors as \((x-2)(x+2)\). The original expression is undefined at \(x=2\) and \(x=-2\), so both values are excluded.

The domain is therefore all real numbers except \(-2\) and \(2\).

The numerator does not create a division restriction. It may be zero without making the function undefined.

## 3. Simplifying rational expressions

When the numerator and denominator share a factor, that factor can be cancelled for inputs where it is nonzero.

For example,

\[
\frac{(x-1)(x+2)}{(x-1)(x-3)}
=\frac{x+2}{x-3}
\]

This simplification is valid only while retaining the original restrictions \(x\ne1\) and \(x\ne3\).

The simplified formula alone is defined at \(x=1\), but the original function is not. Forgetting the excluded value would change the function.

## 4. Holes and vertical asymptotes

A cancelled common factor can create a removable discontinuity, commonly called a hole, in the graph.

In the previous example, the factor \(x-1\) cancels, so the graph follows the simplified curve except that the point corresponding to \(x=1\) is missing. Its missing y-coordinate is found by substituting \(x=1\) into the simplified expression.

A vertical asymptote occurs at a denominator zero that remains after all common factors have been cancelled. As the input approaches such a value, the function's magnitude may grow without bound.

A hole and a vertical asymptote are therefore different. A hole is a missing point where the simplified function has a finite value. A vertical asymptote describes unbounded behaviour near an excluded input.

## 5. Horizontal asymptotes and end behaviour

The horizontal asymptote describes the value that a rational function approaches as \(x\) becomes very large in the positive or negative direction.

For a ratio of nonzero polynomials, compare their degrees:

- If the numerator's degree is smaller than the denominator's degree, the horizontal asymptote is \(y=0\).
- If the degrees are equal, the horizontal asymptote is the ratio of the leading coefficients.
- If the numerator's degree is greater, there is no horizontal asymptote. A polynomial or slant asymptote may describe the end behaviour.

These rules follow by dividing the numerator and denominator by the highest power of \(x\) in the denominator. Terms with negative powers approach zero as the magnitude of \(x\) grows.

## 6. Slant and polynomial asymptotes

When the numerator's degree is exactly one more than the denominator's degree, polynomial long division produces a linear quotient plus a proper rational remainder.

The quotient line is the slant (or oblique) asymptote. The remainder divided by the denominator approaches zero for large values of \(|x|\), so the graph approaches the quotient line.

More generally, polynomial division can reveal a polynomial asymptote when the degree difference is larger.

## 7. Intercepts and graph structure

An x-intercept occurs where the numerator is zero, provided the denominator is not also zero at that input after considering the original expression.

A y-intercept is found by evaluating the function at \(x=0\), provided zero is in the domain.

To understand a rational graph, combine several pieces of information: its domain, intercepts, holes, vertical asymptotes, horizontal or slant asymptotes, and the sign of the function on intervals separated by critical denominator values.

A rational graph may have separate branches because vertical asymptotes divide its domain into disconnected intervals.

## 8. Sign analysis

The sign of a rational function depends on the signs of its numerator and denominator. The real zeros of the numerator and denominator divide the number line into intervals.

Within each interval, the sign cannot change unless the numerator or denominator becomes zero. Checking one representative input from each interval reveals where the function is positive or negative.

This method is useful for understanding graph position relative to the x-axis and for solving rational inequalities.

## 9. Rational functions in applications

Rational relationships occur whenever one quantity is divided by another. Examples include average cost, rates, proportions, response curves and physical relationships involving inverse variation.

In machine learning and statistics, ratios appear in normalized quantities, precision and recall, odds, and certain loss or scoring functions. Their denominator restrictions matter: a metric may be undefined when its denominator is zero, and a model may need explicit handling for such cases.

Rational functions bring together polynomial algebra, function domains and graph analysis. These ideas help describe models whose behaviour changes sharply near particular input values.
