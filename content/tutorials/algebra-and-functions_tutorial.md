---
title: Algebra and Functions
description: Introduction to Algebra for Machine Learning.
tags:
  - mathematics
---

## 1. Algebra Foundations

Algebra uses letters to represent numbers. These letters are called
variables.

For example:

$$
y = 3x + 2
$$

Here, $x$ is the input, $y$ is the output, and 3 and 2 are constants.

If $x=4$, then:

$$
y = 3(4)+2 = 12+2 = 14
$$

### 1.1 Solving equations

An equation states that two expressions are equal. Solving an equation
means finding the value of the variable that makes the equality true.

The central principle is that whatever operation is applied to one side
of an equation must also be applied to the other side.

For example:

$$
3x+2=14
$$

Subtract 2 from both sides:

$$
3x=12
$$

Divide both sides by 3:

$$
x=4
$$

The same principle applies when an equation contains brackets:

$$
2(x+3)=14
$$

Divide both sides by 2:

$$
x+3=7
$$

Subtract 3:

$$
x=4
$$

### 1.2 Negative numbers and brackets

Brackets matter when working with negative numbers.

$$
(-4)^2=(-4)(-4)=16
$$

But:

$$
-4^2=-(4^2)=-16
$$

The first expression squares the negative number. In the second
expression, the exponent applies to 4 before the negative sign.

A negative sign outside a bracket changes every sign inside when the
bracket is removed:

$$
-(x-3)=-x+3
$$

Similarly:

$$
-2(x+4)=-2x-8
$$

### 1.3 Fractions in equations

A fraction containing a variable can be handled by isolating the
fraction and then undoing the division.

For example:

$$
\frac{x}{4}+3=8
$$

Subtract 3 from both sides:

$$
\frac{x}{4}=5
$$

Multiply both sides by 4:

$$
x=20
$$

For:

$$
\frac{2x}{3}=8
$$

Multiply both sides by 3:

$$
2x=24
$$

Divide by 2:

$$
x=12
$$

Division by zero is undefined. Therefore, an expression such as
$\frac{1}{x}$ cannot have $x=0$.

---

## 2. Exponents

An exponent tells us how many times a number or variable is multiplied
by itself.

For example:

$$
x^3=x\cdot x\cdot x
$$

### 2.1 Multiplying powers with the same base

When multiplying powers with the same base, add the exponents:

$$
x^2\cdot x^3=x^{2+3}=x^5
$$

### 2.2 Dividing powers with the same base

When dividing powers with the same base, subtract the exponents:

$$
\frac{x^5}{x^2}=x^{5-2}=x^3
$$

Here, $x\ne0$.

### 2.3 A power raised to another power

When a power is raised to another power, multiply the exponents:

$$
(x^2)^3=x^{2\cdot3}=x^6
$$

### 2.4 Zero exponent

Any non-zero number raised to the power zero equals 1:

$$
x^0=1,\qquad x\ne0
$$

### 2.5 Negative exponents

A negative exponent represents a reciprocal:

$$
x^{-3}=\frac{1}{x^3},\qquad x\ne0
$$

### 2.6 Fractional exponents

A fractional exponent represents a root. For example:

$$
x^{1/2}=\sqrt{x}
$$

More generally:

$$
x^{1/n}=\sqrt[n]{x}
$$

### 2.7 Combining exponent rules

For example:

$$
\frac{x^6}{x^2\cdot x} = \frac{x^6}{x^3} = x^3
$$

The rules for exponents are useful for simplifying expressions and
appear throughout algebra, calculus, and machine learning.

---

## 3. Logarithms

A logarithm is the inverse operation of exponentiation.

If:

$$
b^c=a
$$

then:

$$
\log_b(a)=c
$$

In words, $\log_b(a)$ asks: **To what power must the base $b$ be raised to produce $a$?**

For example:

$$
2^4=16
$$

Therefore:

$$
\log_2(16)=4
$$

### 3.1 Basic logarithm examples

$$
\log_3(27)=3
$$

because $3^3=27$.

$$
\log_5(1)=0
$$

because $5^0=1$.

$$
\log_{10}(100)=2
$$

because $10^2=100$.

A logarithm can also produce a fractional or negative result:

$$
\log_2(\sqrt{2})=\frac12
$$

because $2^{1/2}=\sqrt{2}$.

$$
\log_2\left(\frac12\right)=-1
$$

because $2^{-1}=\frac12$.

### 3.2 Logarithm rules

**Product rule**

The logarithm of a product is the sum of the logarithms:

$$
\log_b(ac)=\log_b(a)+\log_b(c)
$$

**Quotient rule**

The logarithm of a quotient is the difference of the logarithms:

$$
\log_b\left(\frac{a}{c}\right) =
\log_b(a)-\log_b(c)
$$

**Power rule**

The exponent can be brought in front as a multiplier:

$$
\log_b(a^n)=n\log_b(a)
$$

Logarithms do not distribute over addition:

$$
\log_b(a+c)\ne\log_b(a)+\log_b(c)
$$

### 3.3 Natural logarithms

The natural logarithm is a logarithm with base $e$, where:

$$
e\approx2.71828
$$

It is written as:

$$
\ln(x)=\log_e(x)
$$

For example:

$$
\ln(e^2)=2
$$

and:

$$
\ln\left(\frac{1}{e^3}\right)=-3
$$

If:

$$
\ln(x)=2
$$

then exponentiating both sides gives:

$$
x=e^2
$$

Similarly, if:

$$
\log_2(x)=4
$$

then:

$$
x=2^4=16
$$

The natural logarithm appears frequently in calculus, probability,
statistics, and machine learning.

---

## 4. Functions

A function is a rule that takes an input and produces exactly one
output.

Function notation is written as:

$$
f(x)
$$

This is read as "$f$ of $x$." The expression $f(x)$ represents the
output produced by the function when the input is $x$.

For example:

$$
f(x)=3x+2
$$

To calculate $f(4)$, substitute 4 wherever $x$ appears:

$$
f(4)=3(4)+2=14
$$

A function must assign exactly one output to each input. Different
inputs can produce the same output. For example:

$$
f(x)=x^2
$$

Then:

$$
f(2)=4
$$

and:

$$
f(-2)=4
$$

Both inputs produce the same output, which is allowed.

### 4.1 Domain and range

The **domain** is the set of allowed inputs to a function.

The **range** is the set of outputs the function can produce.

Consider:

$$
f(x)=x^2+2
$$

Any real number can be used as an input, so the domain is all real
numbers.

Because $x^2$ cannot be negative:

$$
x^2\ge0
$$

Therefore:

$$
x^2+2\ge2
$$

The smallest possible output is 2. The range is:

$$
[2,\infty)
$$

Now consider:

$$
f(x)=\frac{1}{x}
$$

The input cannot be zero because division by zero is undefined.

Its domain is all real numbers except zero. Its range is also all real
numbers except zero.

For:

$$
f(x)=\frac{2}{x-3}
$$

the denominator cannot be zero:

$$
x-3\ne0
$$

Therefore, $x\ne3$.

### 4.2 Linear functions

A linear function has the general form:

$$
f(x)=mx+c
$$

where:

- $m$ is the slope.
- $c$ is the $y$-intercept.

The slope describes how quickly the output changes as the input changes.

The $y$-intercept is the output when $x=0$.

For example:

$$
f(x)=2x+3
$$

Its slope is 2, and its $y$-intercept is 3.

When $x=0$:

$$
f(0)=2(0)+3=3
$$

So the graph crosses the $y$-axis at $(0,3)$.

### 4.3 Plotting a linear function

Consider:

$$
f(x)=x+2
$$

Some input-output pairs are:

$$
\begin{aligned}
x=-2&\implies y=0\\
x=0&\implies y=2\\
x=2&\implies y=4
\end{aligned}
$$

These give the coordinates:

$$
(-2,0),\quad(0,2),\quad(2,4)
$$

Plotting these points and connecting them produces a straight line.

### 4.4 Calculating slope from two points

Given two points:

$$
(x_1,y_1),\qquad(x_2,y_2)
$$

the slope is:

$$
\boxed{m=\frac{y_2-y_1}{x_2-x_1}}
$$

For example, using the points $(-2,0)$ and $(0,2)$:

$$
m=\frac{2-0}{0-(-2)}
$$

$$
m=\frac{2}{2}=1
$$

The slope is 1.

### 4.5 Positive, negative, and zero slopes

A positive slope means the line increases as $x$ increases.

A negative slope means the line decreases as $x$ increases.

A zero slope means the function is constant: its output does not change
as the input changes.

For example:

$$
f(x)=5
$$

has slope 0.

A function such as:

$$
f(x)=-2x
$$

has slope $-2$ and $y$-intercept 0.

### 4.6 The x-intercept and y-intercept

The **$y$-intercept** is found by setting $x=0$.

The **$x$-intercept** is found by setting $y=0$, or equivalently solving
$f(x)=0$.

For:

$$
f(x)=2x+4
$$

The $y$-intercept is:

$$
(0,4)
$$

To find the $x$-intercept:

$$
2x+4=0
$$

$$
2x=-4
$$

$$
x=-2
$$

So the $x$-intercept is:

$$
(-2,0)
$$

### 4.7 Parallel and perpendicular lines

Two non-vertical lines are parallel when they have the same slope.

For example:

$$
f(x)=3x+2
$$

and:

$$
g(x)=3x+5
$$

Both have slope 3, so they are parallel.

Two non-vertical lines are perpendicular when the product of their
slopes is $-1$:

$$
m_1m_2=-1
$$

For example, a line with slope 2 is perpendicular to a line with slope:

$$
-\frac12
$$

A horizontal line has slope 0. A vertical line has an undefined slope.

---

## 5. Quadratic Functions

A quadratic function is a function whose highest power of $x$ is 2.

Its general form is:

$$
f(x)=ax^2+bx+c,\qquad a\ne0
$$

The graph of a quadratic function is called a **parabola**.

A simple example is:

$$
f(x)=x^2
$$

Its graph is U-shaped and symmetric around the vertical line $x=0$.

For this function, the smallest output is 0, so its range is:

$$
[0,\infty)
$$

### 5.1 Evaluating a quadratic function

Consider:

$$
f(x)=x^2-4
$$

Substituting different inputs:

$$
f(-3)=(-3)^2-4=5
$$

$$
f(-2)=(-2)^2-4=0
$$

$$
f(0)=0^2-4=-4
$$

$$
f(2)=2^2-4=0
$$

$$
f(3)=3^2-4=5
$$

The equal outputs at opposite inputs illustrate the symmetry of this
quadratic.

### 5.2 Vertex and roots

For:

$$
f(x)=x^2-4
$$

the minimum point, called the **vertex**, is:

$$
(0,-4)
$$

The roots, also called zeros or solutions, are the values of $x$ for
which:

$$
f(x)=0
$$

Set the function equal to zero:

$$
x^2-4=0
$$

Add 4:

$$
x^2=4
$$

Take the square root:

$$
x=\pm2
$$

Therefore, the roots are:

$$
x=2,\qquad x=-2
$$

A quadratic can have two distinct real roots, one repeated real root, or
no real roots.

For example:

$$
x^2=25
$$

has two real solutions:

$$
x=\pm5
$$

But:

$$
x^2+5=0
$$

has no real solutions, because the square of a real number cannot be
negative.

---

## 6. Factorisation of Quadratic Expressions

Factorisation means rewriting an expression as a product of simpler
expressions.

For example, expanding:

$$
(x+2)(x+3)
$$

gives:

$$
x^2+3x+2x+6
$$

Combining the middle terms:

$$
x^2+5x+6
$$

Therefore:

$$
\boxed{x^2+5x+6=(x+2)(x+3)}
$$

Factorisation reverses this process.

### 6.1 Factorising when the coefficient of $x^2$ is 1

For a quadratic of the form:

$$
x^2+bx+c
$$

we look for two numbers whose:

- Sum is $b$.
- Product is $c$.

For example:

$$
x^2-5x+6
$$

We need two numbers whose sum is $-5$ and product is 6. Those numbers
are $-2$ and $-3$.

Therefore:

$$
\boxed{x^2-5x+6=(x-2)(x-3)}
$$

Another example:

$$
x^2+2x-15
$$

The required numbers are 5 and $-3$, because:

$$
5+(-3)=2
$$

and:

$$
5(-3)=-15
$$

Thus:

$$
\boxed{x^2+2x-15=(x+5)(x-3)}
$$

### 6.2 The zero-product property

If two factors multiply to give zero, at least one of the factors must
be zero.

In symbols:

$$
AB=0
$$

means:

$$
A=0\quad\text{or}\quad B=0
$$

For example:

$$
(x-4)(x-3)=0
$$

Therefore:

$$
x-4=0\quad\text{or}\quad x-3=0
$$

So:

$$
\boxed{x=4\quad\text{or}\quad x=3}
$$

This property allows us to solve quadratic equations after factorising
them.

### 6.3 Factorising when the coefficient of $x^2$ is not 1

Consider a quadratic in the form:

$$
ax^2+bx+c
$$

where $a\ne1$.

For an expression such as:

$$
2x^2+7x+3
$$

we can look for a factorisation of the form:

$$
(2x+p)(x+q)
$$

Expanding gives:

$$
2x^2+2qx+px+pq
$$

Combining the middle terms:

$$
2x^2+(p+2q)x+pq
$$

Comparing this with:

$$
2x^2+7x+3
$$

we need:

$$
p+2q=7
$$

and:

$$
pq=3
$$

The values $p=1$ and $q=3$ satisfy both conditions. Therefore:

$$
\boxed{2x^2+7x+3=(2x+1)(x+3)}
$$

### 6.4 Splitting the middle term and grouping

Another way to factorise a quadratic is to split the middle term.

For:

$$
3x^2+10x+8
$$

multiply the coefficient of $x^2$ by the constant:

$$
3\times8=24
$$

Find two numbers whose product is 24 and whose sum is 10. The numbers
are 6 and 4.

Split the middle term:

$$
3x^2+6x+4x+8
$$

Group the terms:

$$
(3x^2+6x)+(4x+8)
$$

Take out the common factor from each group:

$$
3x(x+2)+4(x+2)
$$

Both terms contain the common bracket $(x+2)$. Factor it out:

$$
\boxed{(3x+4)(x+2)}
$$

Expanding the result verifies the factorisation:

$$
(3x+4)(x+2) =3x^2+6x+4x+8 =3x^2+10x+8
$$

### 6.5 Solving quadratic equations by factorisation

Consider:

$$
2x^2+9x+10=0
$$

Factorise:

$$
(2x+5)(x+2)=0
$$

Apply the zero-product property:

$$
2x+5=0
$$

or:

$$
x+2=0
$$

Solving each equation gives:

$$
x=-\frac52
$$

or:

$$
x=-2
$$

Therefore:

$$
\boxed{x=-\frac52,\quad x=-2}
$$

Factorisation is an effective way to solve many quadratic equations.
However, not every quadratic factorises neatly using integers.
Completing the square provides a more general method.

---

## 7. Completing the Square

Completing the square is a method for rewriting a quadratic expression
as a squared bracket, plus or minus a constant.

It is also the key step in deriving the quadratic formula.

### 7.1 Understanding a perfect square

Start with:

$$
(x+3)^2
$$

This means:

$$
(x+3)(x+3)
$$

Multiplying:

$$
=x^2+3x+3x+9
$$

Combining the middle terms:

$$
\boxed{(x+3)^2=x^2+6x+9}
$$

This is a **perfect square trinomial**.

The identities for expanding a squared sum and a squared difference are:

$$
(a+b)^2=a^2+2ab+b^2
$$

$$
(a-b)^2=a^2-2ab+b^2
$$

### 7.2 The key idea

Consider:

$$
x^2+6x
$$

To make this a perfect square, add 9:

$$
x^2+6x+9
$$

It can now be written as:

$$
\boxed{(x+3)^2}
$$

For a general expression:

$$
x^2+bx
$$

add:

$$
\boxed{\left(\frac{b}{2}\right)^2}
$$

This works because:

$$
\left(x+\frac{b}{2}\right)^2 =
x^2+bx+\left(\frac{b}{2}\right)^2
$$

Therefore:

$$
\boxed{x^2+bx+\left(\frac{b}{2}\right)^2
=
\left(x+\frac{b}{2}\right)^2}
$$

### 7.3 Completing the square with a positive coefficient

Consider:

$$
x^2+10x
$$

The coefficient of $x$ is 10. Divide it by 2:

$$
\frac{10}{2}=5
$$

Square the result:

$$
5^2=25
$$

Add 25:

$$
x^2+10x+25
$$

Write it as a squared bracket:

$$
\boxed{x^2+10x+25=(x+5)^2}
$$

### 7.4 Completing the square with a negative coefficient

The same method works when the coefficient of $x$ is negative.

Consider:

$$
x^2-10x
$$

The coefficient of $x$ is $-10$. Divide by 2:

$$
\frac{-10}{2}=-5
$$

Square the result:

$$
(-5)^2=25
$$

Add 25:

$$
x^2-10x+25
$$

Write it as a squared bracket:

$$
\boxed{x^2-10x+25=(x-5)^2}
$$

The negative sign remains inside the bracket. In particular:

$$
(x-5)^2=x^2-10x+25
$$

whereas:

$$
(x+5)^2=x^2+10x+25
$$

### 7.5 Completing the square when the coefficient of $x^2$ is not 1

Consider:

$$
2x^2+12x
$$

First, take the coefficient of $x^2$ outside the brackets:

$$
2(x^2+6x)
$$

Now complete the square inside the brackets.

The coefficient of $x$ inside is 6. Divide it by 2:

$$
\frac{6}{2}=3
$$

Square the result:

$$
3^2=9
$$

Add 9 inside the brackets:

$$
2(x^2+6x+9)
$$

Write the trinomial as a squared bracket:

$$
\boxed{2(x+3)^2}
$$

Expanding this expression gives:

$$
2(x+3)^2 = 2(x^2+6x+9)
$$

$$
=2x^2+12x+18
$$

Notice that adding 9 inside the brackets adds 18 to the complete
expression because the bracket is multiplied by 2.

### 7.6 Using completing the square to solve a quadratic equation

Consider:

$$
x^2+6x+5=0
$$

Move the constant to the right-hand side:

$$
x^2+6x=-5
$$

Take half of the coefficient of $x$, then square it:

$$
\left(\frac{6}{2}\right)^2=9
$$

Add 9 to both sides:

$$
x^2+6x+9=-5+9
$$

Write the left side as a squared bracket:

$$
(x+3)^2=4
$$

Take the square root of both sides:

$$
x+3=\pm2
$$

Subtract 3:

$$
x=-3\pm2
$$

This gives two solutions:

$$
\boxed{x=-1,\quad x=-5}
$$

The $\pm$ symbol is important because a positive number has both
a positive and a negative square root.

Completing the square gives us a method for solving quadratic equations
even when simple integer factorisation is not available. It also
provides the foundation for deriving the quadratic formula.
