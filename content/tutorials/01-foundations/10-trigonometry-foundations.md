---
title: Trigonometry Foundations
description: Build the foundations of angles, radians, right-triangle ratios, the unit circle, identities and trigonometric functions.
tags:
  - mathematics
  - trigonometry
---

## Trigonometry Foundations

Trigonometry studies relationships between angles and lengths, and the periodic patterns described by sine, cosine and tangent. It begins with right triangles but extends naturally to circles, waves and functions.

Trigonometric ideas appear in geometry, physics, signal processing, computer graphics and machine learning.

## 1. Angles and measurement

An angle measures rotation between two rays that share an endpoint. Angles are commonly measured in degrees or radians.

A full rotation is \(360^\circ\), which is equivalent to \(2\pi\) radians. A half rotation is \(180^\circ\), or \(\pi\) radians, and a quarter rotation is \(90^\circ\), or \(\pi/2\) radians.

The conversion relationships are

\[
180^\circ=\pi\text{ radians}
\]

To convert degrees to radians, multiply by \(\pi/180\). To convert radians to degrees, multiply by \(180/\pi\).

Radians are especially important in higher mathematics because they make many trigonometric formulas, including calculus formulas, take their simplest form.

## 2. Right-triangle trigonometry

For an acute angle \(\theta\) in a right triangle, the three basic trigonometric ratios are defined using side lengths.

\[
\sin(\theta)=\frac{\text{opposite}}{\text{hypotenuse}}
\]

\[
\cos(\theta)=\frac{\text{adjacent}}{\text{hypotenuse}}
\]

\[
\tan(\theta)=\frac{\text{opposite}}{\text{adjacent}}
\]

The hypotenuse is the side opposite the right angle and is the longest side. The opposite and adjacent sides are identified relative to the chosen angle.

These ratios depend on the angle, not on the overall size of the triangle. Similar right triangles have the same angle ratios.

## 3. Reciprocal trigonometric functions

The reciprocal ratios are cosecant, secant and cotangent:

\[
\csc(\theta)=\frac{1}{\sin(\theta)}
\]

\[
\sec(\theta)=\frac{1}{\cos(\theta)}
\]

\[
\cot(\theta)=\frac{1}{\tan(\theta)}
\]

They are defined only where their denominators are nonzero. These functions are less common in introductory applications but appear in trigonometric identities and more advanced mathematics.

## 4. The unit circle

The unit circle is a circle of radius 1 centred at the origin of a coordinate plane:

\[
x^2+y^2=1
\]

An angle is measured from the positive x-axis. The point reached by rotating through angle \(\theta\) has coordinates

\[
(\cos\theta,\sin\theta)
\]

This gives sine and cosine meaning for angles beyond the acute angles of a right triangle. It also explains their signs in different quadrants.

- Quadrant I: sine and cosine are both positive.
- Quadrant II: sine is positive and cosine is negative.
- Quadrant III: both are negative.
- Quadrant IV: sine is negative and cosine is positive.

Tangent is the ratio \(\sin\theta/\cos\theta\), so it is undefined wherever cosine is zero.

## 5. Common angles

Some angles have exact trigonometric values that are worth recognizing. The angles \(0\), \(\pi/6\), \(\pi/4\), \(\pi/3\) and \(\pi/2\) radians correspond to 0°, 30°, 45°, 60° and 90°.

Their values can be derived from simple geometric constructions involving equilateral and isosceles right triangles, together with the unit circle.

These exact values are useful because they provide reference points for understanding trigonometric functions without relying entirely on decimal approximations.

## 6. The Pythagorean identity

Because every point on the unit circle satisfies \(x^2+y^2=1\), and its coordinates are cosine and sine, the fundamental identity is

\[
\sin^2\theta+\cos^2\theta=1
\]

Here, \(\sin^2\theta\) means \((\sin\theta)^2\), not the sine of \(\theta^2\).

Dividing this identity by \(\cos^2\theta\), where cosine is nonzero, gives

\[
1+\tan^2\theta=\sec^2\theta
\]

Dividing by \(\sin^2\theta\), where sine is nonzero, gives

\[
\cot^2\theta+1=\csc^2\theta
\]

These identities allow one trigonometric expression to be rewritten in terms of another.

## 7. Sine and cosine as functions

Sine and cosine are periodic functions. Their values repeat after a full rotation of \(2\pi\) radians:

\[
\sin(\theta+2\pi)=\sin\theta
\]

\[
\cos(\theta+2\pi)=\cos\theta
\]

The sine graph passes through zero at integer multiples of \(\pi\), while the cosine graph begins at its maximum value when the angle is zero.

Both functions have domain all real numbers and range \([-1,1]\). Their maximum and minimum values are 1 and -1.

The tangent function has period \(\pi\) and is undefined at odd multiples of \(\pi/2\), where cosine is zero.

## 8. Amplitude, period and phase shift

A transformed sine function can be written as

\[
y=A\sin(B(x-C))+D
\]

The magnitude \(|A|\) is the amplitude, which measures the distance from the midline to a maximum or minimum. The value \(D\) shifts the midline vertically. The value \(C\) shifts the graph horizontally. The period is \(2\pi/|B|\), provided \(B\ne0\).

The same transformation ideas apply to cosine. They let trigonometric functions model waves with different heights, frequencies, starting positions and offsets.

## 9. Trigonometry in applications and machine learning

Sine and cosine are natural models for periodic phenomena such as sound waves, seasonal patterns, rotations and oscillations.

In machine learning, trigonometric functions appear in Fourier analysis and signal processing. They also appear in positional encodings for transformer models, where combinations of sine and cosine at different frequencies represent positions in a sequence.

Understanding radians, periodicity and the unit circle makes these applications easier to interpret.
