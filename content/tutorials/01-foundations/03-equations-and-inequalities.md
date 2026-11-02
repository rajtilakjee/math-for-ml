---
title: Equations and Inequalities
description: Develop reliable methods for solving linear equations, inequalities, compound statements, and absolute-value relationships.
tags:
  - mathematics
  - equations
---

## Equations and Inequalities

Equations and inequalities describe relationships between quantities. An equation states that two expressions have the same value. An inequality states that one expression is greater than or less than another. Both are central to mathematical modelling because they let us describe constraints, feasible values, and unknown parameters.

## 1. What an equation means

An equation is a statement that two expressions are equal. The equals sign means that the expression on the left and the expression on the right have the same value.

For example,

\[
3x+5=17
\]

asks which value of \(x\) makes both sides equal. Solving an equation means finding every value that makes the statement true.

An equation remains equivalent when the same operation is applied to both sides. We can add or subtract the same quantity from both sides, and we can multiply or divide both sides by the same nonzero quantity. These operations preserve equality.

For the equation above, subtracting 5 from both sides gives \(3x=12\). Dividing both sides by 3 gives \(x=4\).

The key idea is balance: an operation performed on one side must also be performed on the other.

## 2. Linear equations

A linear equation in one variable can be written in the form

\[
ax+b=c
\]

where \(a\), \(b\), and \(c\) are constants and \(a\ne 0\). Isolating the variable means undoing the operations around it in reverse order.

For an equation such as \(ax+b=c\), subtract \(b\) first and then divide by \(a\):

\[
x=\frac{c-b}{a}
\]

Equations may contain variables on both sides. Collecting variable terms on one side and constants on the other reduces them to the same general form. If the variable terms cancel and the remaining statement is true, the equation has infinitely many solutions. If they cancel and leave a false statement, there is no solution.

## 3. Equations with brackets and fractions

The distributive property expands brackets:

\[
a(b+c)=ab+ac
\]

It is often useful to expand brackets before collecting like terms. Alternatively, a common factor may be cancelled or brackets may be retained until the variable is isolated. The important requirement is that every transformation preserves equivalence.

For equations containing fractions, multiplying every term on both sides by the least common denominator can remove the denominators. The multiplier must be applied to every term, not merely to the terms that visibly contain a fraction.

A denominator also creates a restriction: it cannot equal zero. Any candidate solution that makes an original denominator zero must be rejected.

## 4. What an inequality means

An inequality compares two expressions. The symbols are:

- \(a<b\): \(a\) is less than \(b\).
- \(a>b\): \(a\) is greater than \(b\).
- \(a\le b\): \(a\) is less than or equal to \(b\).
- \(a\ge b\): \(a\) is greater than or equal to \(b\).

The solution to an inequality is usually a range of values rather than a single number.

Adding or subtracting the same quantity on both sides preserves the direction of an inequality. Multiplying or dividing by a positive number also preserves its direction.

Multiplying or dividing by a negative number reverses the direction:

\[
-2x<6 \quad\Longrightarrow\quad x>-3
\]

This reversal is essential. It follows from the ordering of numbers: multiplying the number line by a negative value reflects it around zero.

## 5. Representing solutions on the number line

An inequality can be represented as an interval.

The statement \(x>3\) describes the interval \((3,\infty)\). The endpoint is excluded, so a parenthesis is used. The statement \(x\ge 3\) describes \([3,\infty)\), where the endpoint is included.

For finite intervals, parentheses exclude endpoints and square brackets include them. Infinity always uses a parenthesis because infinity is not a number that can be included as an endpoint.

Interval notation is a compact way to describe sets of allowed values.

## 6. Compound inequalities

A compound inequality combines two conditions.

The statement

\[
2<x\le 7
\]

means that \(x\) is greater than 2 and no greater than 7. Its interval notation is \((2,7]\).

An AND condition requires both inequalities to be true, so its solution is the intersection of their solution sets. An OR condition requires at least one inequality to be true, so its solution is the union of their solution sets.

This distinction is useful when describing constraints that must all hold versus alternative conditions that are each acceptable.

## 7. Absolute value equations

The absolute value of a real number is its distance from zero:

\[
|x|=
\begin{cases}
x & x\ge 0\\
-x & x<0
\end{cases}
\]

Distance is never negative. For a positive constant \(a\), the equation \(|x|=a\) has two solutions: \(x=a\) and \(x=-a\).

More generally,

\[
|x-c|=a
\]

describes points whose distance from \(c\) is \(a\). Its solutions are \(x=c-a\) and \(x=c+a\).

If the right-hand side is negative, an absolute value equation has no real solution because an absolute value cannot be negative.

## 8. Absolute value inequalities

Absolute value inequalities describe distances from a reference point.

For \(a>0\),

\[
|x-c|<a
\]

means that the distance between \(x\) and \(c\) is less than \(a\). Equivalently,

\[
c-a<x<c+a
\]

The inequality \(|x-c|\le a\) includes the endpoints.

For a greater-than relationship,

\[
|x-c|>a
\]

means that \(x\) is more than \(a\) units away from \(c\). The solution lies outside the interval:

\[
x<c-a \quad\text{or}\quad x>c+a
\]

The same pattern applies to non-strict greater-than-or-equal inequalities, with endpoints included.

## 9. Equations, inequalities and mathematical modelling

Equations express exact relationships. Inequalities express limits and constraints. A model may use both: an equation can describe how a quantity is calculated, while inequalities specify which values are allowed.

In machine learning, constraints appear in optimization, parameter bounds, regularization and classification. For example, a model may minimize a loss function while requiring parameters to remain within a specified range. Understanding inequalities makes the meaning of such constraints precise.

The objective of this chapter is to make equation-solving and inequality reasoning dependable. These skills are used repeatedly in every later area of mathematics.
