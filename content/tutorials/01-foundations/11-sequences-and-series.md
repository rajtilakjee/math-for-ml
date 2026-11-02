---
title: Sequences and Series
description: Understand sequences, arithmetic and geometric patterns, summation notation, finite series and convergence.
tags:
  - mathematics
  - sequences
---

## Sequences and Series

Sequences and series describe ordered collections of numbers and the sums formed from them. They provide a foundation for summation notation, limits, probability and the analysis of algorithms and learning processes.

A sequence is a list of terms in a specific order. A series is the sum of terms from a sequence.

## 1. Sequences and terms

A sequence is commonly written

\[
a_1,a_2,a_3,\ldots
\]

The symbol \(a_n\) represents the term at position \(n\). The subscript identifies the position; it is not an exponent.

A sequence can be described by an explicit formula that calculates a term directly from its position, or by a recurrence relation that defines each term using earlier terms.

For example, a recurrence may specify an initial value and a rule for obtaining the next term. Such rules are useful for describing processes that evolve step by step.

## 2. Arithmetic sequences

An arithmetic sequence has a constant difference between consecutive terms. This fixed difference is called the common difference, \(d\).

If the first term is \(a_1\), the nth term is

\[
a_n=a_1+(n-1)d
\]

A positive common difference produces an increasing sequence, a negative common difference produces a decreasing sequence, and a zero common difference produces a constant sequence.

The formula follows because reaching the nth term requires adding the common difference \(n-1\) times to the first term.

## 3. Arithmetic series

An arithmetic series is the sum of the terms of an arithmetic sequence.

The sum of the first \(n\) terms is

\[
S_n=\frac{n}{2}(a_1+a_n)
\]

Equivalently, substituting the nth-term formula gives

\[
S_n=\frac{n}{2}\left(2a_1+(n-1)d\right)
\]

The first formula pairs the first and last terms, the second and second-last terms, and so on. Every pair has the same sum, which explains the compact result.

## 4. Geometric sequences

A geometric sequence has a constant ratio between consecutive terms. This ratio is called the common ratio, \(r\).

If the first term is \(a_1\), the nth term is

\[
a_n=a_1r^{n-1}
\]

Each new term is obtained by multiplying the previous term by \(r\).

If \(|r|>1\), the magnitude of the terms grows. If \(0<|r|<1\), the terms approach zero. A negative ratio causes the signs to alternate, while a ratio of zero produces zero after the first term.

Geometric sequences model repeated proportional change, including compound growth and decay.

## 5. Geometric series

The finite sum of the first \(n\) terms of a geometric sequence is

\[
S_n=a_1\frac{1-r^n}{1-r},\qquad r\ne1
\]

When \(r=1\), every term is equal to the first term, so the sum is \(na_1\).

For an infinite geometric series, the sum exists as a finite real number when \(|r|<1\). In that case,

\[
S_\infty=\frac{a_1}{1-r}
\]

If \(|r|\ge1\), the terms do not approach zero in the required way and the infinite geometric series does not converge to a finite sum.

## 6. Sigma notation

Sigma notation is a compact way to write a sum. The Greek capital letter \(\Sigma\) means “sum”.

\[
\sum_{i=1}^{n} a_i
\]

This means to add the terms \(a_1\) through \(a_n\). The index \(i\) is a counting variable. It takes the values indicated by the lower and upper limits.

For example,

\[
\sum_{i=1}^{n} i
\]

means \(1+2+\cdots+n\), whose value is \(n(n+1)/2\).

The index name is arbitrary. A sum using \(i\), \(j\) or \(k\) has the same meaning when the limits and summand are otherwise unchanged.

## 7. Properties of summation

Summation is linear. A constant factor can be moved outside a sum:

\[
\sum_{i=1}^{n} c a_i
=c\sum_{i=1}^{n}a_i
\]

Sums can also be separated:

\[
\sum_{i=1}^{n}(a_i+b_i)
=\sum_{i=1}^{n}a_i+\sum_{i=1}^{n}b_i
\]

These properties make long expressions easier to manipulate and are used extensively in statistics and machine learning.

The sum of a constant \(c\) repeated \(n\) times is \(nc\). This is the same as summing a constant sequence.

## 8. Infinite sequences and convergence

An infinite sequence converges if its terms approach a finite limit as the index grows without bound. If the terms do not approach a finite value, the sequence diverges.

For example, the sequence \(1/n\) converges to zero. The sequence \(n\) grows without bound and does not converge to a finite real number.

A sequence can converge even if none of its terms equals the limit. Convergence describes long-run behaviour, not necessarily a value reached at a finite step.

## 9. Infinite series and convergence

An infinite series is defined through the limit of its partial sums.

For a series

\[
\sum_{n=1}^{\infty}a_n
\]

the nth partial sum is the sum of the first \(n\) terms. The infinite series converges if the sequence of partial sums approaches a finite limit.

A necessary condition for a series to converge is that its terms approach zero. This condition alone is not sufficient: some series whose terms approach zero still diverge.

The geometric series is an important example because its convergence can be described exactly using the common ratio.

## 10. Why sequences and series matter in machine learning

Machine learning relies on sums and sequences in many places.

A dataset loss is often an average or sum of per-example losses. Gradient-based optimization produces a sequence of parameter values, one after another. Training behaviour can be studied by examining whether losses, gradients or parameter updates approach stable values.

Series also appear in probability, Taylor approximations, numerical methods and theoretical analysis. Summation notation makes these expressions manageable and precise.

Understanding sequences, series and convergence prepares us for calculus, probability and the mathematical analysis of learning algorithms.
