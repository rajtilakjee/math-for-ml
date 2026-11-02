---
title: Quadratic Functions and Equations
description: Study parabolas, roots, factorisation, completing the square, the quadratic formula, and the discriminant.
tags:
  - mathematics
  - quadratics
---

## Quadratic Functions

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

## Factorisation of Quadratic Expressions

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

## Completing the Square

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

## The Quadratic Formula

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

## The Discriminant

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

## Geometric Interpretation of the Discriminant

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
