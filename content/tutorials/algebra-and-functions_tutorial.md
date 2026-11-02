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

---

## 8. The Quadratic Formula

So far, we have learned two methods of solving quadratic equations:

- Factorisation
- Completing the square

Factorisation works well when we can find suitable factors. Completing
the square is more general, but it can involve fractions and square
roots.

We now want a formula that can solve any quadratic equation, including
those that cannot be factorised neatly.

That formula is called the quadratic formula.

### 8.1 The general quadratic equation

A quadratic equation has the general form:

$$
ax^2+bx+c=0
$$

where:

- $a$, $b$, and $c$ are constants.
- $x$ is the unknown variable.
- $a\ne0$, because otherwise the equation would not be quadratic.

Our objective is to find the value or values of $x$.

The quadratic formula is:

$$
\boxed{x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}}
$$

Rather than memorising this formula, let's derive it using the method
we have already learned: completing the square.

### 8.2 Deriving the quadratic formula

Start with the general quadratic equation:

$$
ax^2+bx+c=0
$$

**Step 1: Divide the entire equation by $a$**

Since $a\ne0$, we can divide both sides by $a$:

$$
x^2+\frac{b}{a}x+\frac{c}{a}=0
$$

Move the constant term to the right-hand side:

$$
x^2+\frac{b}{a}x=-\frac{c}{a}
$$

**Step 2: Complete the square**

Recall that for an expression of the form:

$$
x^2+bx
$$

we complete the square by adding:

$$
\left(\frac{b}{2}\right)^2
$$

In our equation, the coefficient of $x$ is $\frac{b}{a}$.

Therefore, we need to add:

$$
\frac{b^2}{4a^2}
$$

Add this quantity to both sides:

$$
x^2+\frac{b}{a}x+\frac{b^2}{4a^2}=-\frac{c}{a}+\frac{b^2}{4a^2}
$$

**Step 3: Write the left-hand side as a perfect square**

Using the identity:

$$
(x+p)^2=x^2+2px+p^2
$$

we can rewrite the left-hand side as:

$$
\left(x+\frac{b}{2a}\right)^2=-\frac{c}{a}+\frac{b^2}{4a^2}
$$

**Step 4: Simplify the right-hand side**

We need a common denominator.

Since:

$$
-\frac{c}{a}=-\frac{4ac}{4a^2}
$$

we can write:

$$
\left(x+\frac{b}{2a}\right)^2=\frac{b^2-4ac}{4a^2}
$$

**Step 5: Take the square root of both sides**

Taking the square root introduces both positive and negative
possibilities:

$$
x+\frac{b}{2a}=\pm\sqrt{\frac{b^2-4ac}{4a^2}}
$$

Separating the square root:

$$
x+\frac{b}{2a}=\pm\frac{\sqrt{b^2-4ac}}{2a}
$$

**Step 6: Isolate $x$**

Subtract $\frac{b}{2a}$ from both sides:

$$
x=-\frac{b}{2a}\pm\frac{\sqrt{b^2-4ac}}{2a}
$$

Combining the fractions:

$$
\boxed{x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}}
$$

And there we have it!

We have derived the quadratic formula entirely from completing the
square.

This is why understanding the earlier concepts matters. The formula is
not an isolated mathematical trick. It follows directly from the
algebra we have already learned.

### 8.3 Understanding the two possible solutions

Notice the symbol:

$$
\pm
$$

It means that we must consider two possibilities:

$$
x=\frac{-b+\sqrt{b^2-4ac}}{2a}
$$

and:

$$
x=\frac{-b-\sqrt{b^2-4ac}}{2a}
$$

A quadratic equation can therefore have two distinct real solutions,
one repeated real solution, or no real solutions.

We can determine which situation applies by examining the expression
inside the square root.

This brings us to the discriminant.

---

## 9. The Discriminant

The discriminant is the expression inside the square root of the
quadratic formula.

For the general quadratic equation:

$$
ax^2+bx+c=0
$$

the discriminant is:

$$
\boxed{\Delta=b^2-4ac}
$$

The Greek letter $\Delta$ (delta) is commonly used to represent the
discriminant.

The discriminant tells us how many real solutions a quadratic equation
has without requiring us to calculate the actual roots.

There are three possible cases.

### 9.1 Case 1: Positive discriminant

When:

$$
\Delta>0
$$

the expression inside the square root is positive.

The quadratic equation has:

$$
\boxed{\text{Two distinct real roots}}
$$

For example:

$$
x^2-5x+6=0
$$

Here:

$$
a=1,\qquad b=-5,\qquad c=6
$$

Calculate the discriminant:

$$
\Delta=b^2-4ac
$$

$$
=(-5)^2-4(1)(6)
$$

$$
=25-24
$$

$$
\Delta=1
$$

Since the discriminant is positive, there are two distinct real roots.

Using the quadratic formula:

$$
x=\frac{-(-5)\pm\sqrt{1}}{2(1)}
$$

$$
x=\frac{5\pm1}{2}
$$

Therefore:

$$
x=3
$$

or:

$$
x=2
$$

The equation has two distinct real roots.

### 9.2 Case 2: Zero discriminant

When:

$$
\Delta=0
$$

the square root in the quadratic formula becomes zero.

The equation has:

$$
\boxed{\text{One repeated real root}}
$$

For example:

$$
x^2-6x+9=0
$$

Here:

$$
a=1,\qquad b=-6,\qquad c=9
$$

Calculate the discriminant:

$$
\Delta=(-6)^2-4(1)(9)
$$

$$
=36-36
$$

$$
\Delta=0
$$

Using the quadratic formula:

$$
x=\frac{-(-6)\pm\sqrt{0}}{2(1)}
$$

$$
x=\frac{6}{2}
$$

$$
\boxed{x=3}
$$

Both possible solutions are identical.

This is called a repeated root or a double root.

### 9.3 Case 3: Negative discriminant

When:

$$
\Delta<0
$$

the expression inside the square root is negative.

A negative number does not have a real square root.

Therefore, the quadratic equation has:

$$
\boxed{\text{No real roots}}
$$

For example:

$$
x^2+2x+5=0
$$

Here:

$$
a=1,\qquad b=2,\qquad c=5
$$

Calculate the discriminant:

$$
\Delta=2^2-4(1)(5)
$$

$$
=4-20
$$

$$
\Delta=-16
$$

Since the discriminant is negative, there are no real solutions.

The equation does, however, have two complex solutions:

$$
x=-1\pm2i
$$

where $i$ is the imaginary unit:

$$
i=\sqrt{-1}
$$

We will study complex numbers separately if and when they become
relevant.

---

## 10. Geometric Interpretation of the Discriminant

The discriminant also has a geometric interpretation.

Remember that the graph of a quadratic function is a parabola.

Consider:

$$
y=ax^2+bx+c
$$

The roots of the corresponding quadratic equation are the points where
the parabola intersects the $x$-axis.

The discriminant tells us how the parabola intersects that axis.

### Positive discriminant

When:

$$
\Delta>0
$$

the parabola intersects the $x$-axis at two different points.

There are two distinct real roots.

### Zero discriminant

When:

$$
\Delta=0
$$

the parabola touches the $x$-axis at exactly one point.

There is one repeated real root.

### Negative discriminant

When:

$$
\Delta<0
$$

the parabola does not intersect the $x$-axis.

There are no real roots.

This gives us a useful connection between algebra and geometry.

We can understand the number of solutions by examining the equation
algebraically or by examining its graph geometrically.

---

## Polynomial Functions

## 1. Introduction to Polynomials

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

## 2. Terms, Coefficients, Constants and Degree

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

## 3. Types of Polynomials

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

## 4. Polynomial Functions

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

## 5. Polynomial Arithmetic

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

## 6. Roots and Zeros of Polynomial Functions

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

## 7. The Factor Theorem

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

## 8. The Remainder Theorem

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

## 9. Polynomial Division

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

## 10. Multiplicity of Roots

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

## 11. Behaviour of Polynomial Graphs

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

## 12. Turning Points and Local Extrema

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

## 13. Symmetry in Polynomial Functions

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

## 14. Polynomial Functions with Multiple Variables

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

## 15. Why Polynomial Functions Matter in Machine Learning

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

## 16. Summary

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
