---
title: Exponents and Logarithms
description: Understand powers, roots, exponent rules, logarithms, and natural logarithms.
tags:
  - mathematics
  - exponents
---

## Exponents

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

## Logarithms

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
