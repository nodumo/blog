---
layout: post
title: Category theory for functional programming
date: 2018-11-09 7:10
author: Nickanor Odumo
comments: false
categories: [Category]
tags: [Category]
---

## Category theory for Functional Programming?

Foundational mathematics for programming? What for!?

> "Denomination semantics is the tool by which functional programming languages can
be considered correct. Imperative and OOP programs tend to lack the tooling to support the denotational reasoning qualities.
With the use of FP operational features like errors, optionality, partiality, asynchronicity, io can me modelled using mathematical and logical entities for maximum correctness and correctness." - Nickanor Odumo

### Basic Axioms

Category can be distilled to the concepts of Objects and Morphisms:

- • A category contains objects which can represent a multitude of entities.
- • A category containsMorphisms represent the relationships between different categories.
- • A category is bound by compositional rules governerning implicit rules like the identity morphisms or the compositional laws.

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

```
Now, as you see ,the `labs` page was excluded from top bar nav:

### Mathematical reasoning

### Mathematical functions in programming languages

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

// Return bottom
def arrow(a: SetOfVals1): SetOfVals2 = null

```
