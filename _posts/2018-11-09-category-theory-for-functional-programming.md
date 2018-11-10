---
layout: post
title: Category theory for functional programming
date: 2018-11-09 7:10
author: Nickanor Odumo
comments: false
categories: [CategoryTheory]
tags: [CategoryTheory, Scala, FunctionalProgramming]
---

![](/images/post/category_theory_pigs.jpg)

## Category theory for Functional Programming?

Foundational mathematics for programming? What for!?

> "Denomination semantics is the tool by which functional programming languages can
be considered correct. Imperative and OOP programs tend to lack the tooling to support the denotational reasoning qualities.
With the use of FP operational features like errors, optionality, partiality, asynchronicity, io can me modelled using mathematical and logical entities for maximum correctness and correctness." - Nickanor Odumo

### Basic Axioms

Category can be distilled to the concepts of Objects and Morphisms:

- • A category contains objects which can represent a multitude of entities.
- • A category containsMorphisms represent the relationships between different categories.
- • A category is bound by compositional rules governerning composition and rules governing identity.

```scala

// Objects
sealed trait SetOfVals1
final case objects SV1_1 extends extends SetOfVals1
final case objects SV1_2 extends extends SetOfVals1

sealed trait SetOfVals2
final case objects SV2_1 extends extends SetOfVals2
final case objects SV2_1 extends extends SetOfVals2

sealed trait SetOfVals3
final case objects SV3_1 extends extends SetOfVals3
final case objects SV3_1 extends extends SetOfVals3

// Morphisms
def arrow(a: SetOfVals1): SetOfVals2

// Two Morphisms
def arrow1To2(a: SetOfVals1): SetOfVals2 = SV2_1 // A -> B
def arrow2To3(a: SetOfVals2): SetOfVals3 = SV3_1 // B -> C

// Axiomatic Morphism
// A -> B -> C
def arrow1To3(a: SetOfVals1): SetOfVals3 = arrow2To3(arrow1To2(a)) // ∴  (arrow1To2 . arrow2To3)

```
Now, as you see ,the `labs` page was excluded from top bar nav:

### Mathematical reasoning

- **Referential transparency**
- **Purity**: Black box function that returns same value for same input.
- **Equationl Reasoning**: Subsitutable values of the function and value variety.

### Mathematical functions in programming languages

Category gives us a framework for thinking about functions.

```scala

// ----- Good functions

/**
 * Total functional
 *
 * "Well typed value in finite time"
 *
 * @param an Object in domain.
 * @Return an object in the codomain.
 */
def arrow(a: SetOfVals1): SetOfVals2 = ???

// ----- Bad functions

// Return exception
def arrow(a: SetOfVals1): SetOfVals2 = throw new Exception("Boom!")

```

### Effects

Effects are an abstract computational concept.

- **Async**: Computation that will yield value at a later time.
- **Disjuctions**: Computation that produces the disjuction of two values(ex: None or Some(b):Either[A,B])
- **Optionality**: Computation that produces the dysjuction of two values(ex: Left(a) or Right(b):Either[A,B])
- **Partiality**: Computations that are non-total.
