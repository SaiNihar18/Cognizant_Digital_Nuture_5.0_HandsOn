# Week 1: Java FSE Hands-On Exercises

This folder contains the implementations for the mandatory hands-on exercises of Week 1, covering **Design Patterns and Principles** and **Data Structures and Algorithms**. These implementations are flat (no nested `src/com/example/...` packages) and do not contain any comments, prioritizing direct learning and clean, raw Java.

---

## 1. Design Patterns and Principles

### Exercise 1: Singleton Pattern (`SingletonPatternExample`)
- **Logger.java**: Thread-safe Logger utility class using a private constructor, volatile static instance, and double-checked locking lazy initialization.
- **SingletonTest.java**: Test client validating that both retrieved instances share the same reference, and testing log operations.

### Exercise 2: Factory Method Pattern (`FactoryMethodPatternExample`)
- **Document.java**: Product interface with standard operations (`open()`, `save()`, `close()`).
- **WordDocument.java**, **PdfDocument.java**, **ExcelDocument.java**: Concrete Product implementations of `Document`.
- **DocumentFactory.java**: Abstract Creator defining the factory method `createDocument()`.
- **WordDocumentFactory.java**, **PdfDocumentFactory.java**, **ExcelDocumentFactory.java**: Concrete Creator subclasses implementing the factory method.
- **FactoryMethodTest.java**: Test client demonstrating instantiation and operations for all document types.

---

## 2. Data Structures and Algorithms

### Exercise 2: E-commerce Platform Search Function (`EcommerceSearch`)
- **Product.java**: Product class with fields `productId`, `productName`, and `category`.
- **SearchAlgorithms.java**: Linear search ($O(N)$) and binary search ($O(\log N)$) algorithms.
- **SearchTest.java**: Test client sorting the array of products and benchmarking both searching algorithms.

### Exercise 7: Financial Forecasting (`FinancialForecasting`)
- **FinancialForecasting.java**: Recursive algorithm predicting future values based on past growth rates.
- **ForecastingTest.java**: Test client executing the recursive calculator over a 10-year forecast period.

---

## How to Compile and Run

To compile and run these exercises, make sure you have the Java Development Kit (JDK) installed (version 17 or higher is recommended; verified on JDK 26).

### 1. Singleton Pattern Example
```bash
# Navigate to the Singleton directory
cd "week1/Design Patterns and Principles/SingletonPatternExample"

# Compile and Run
javac *.java
java SingletonTest
```

### 2. Factory Method Pattern Example
```bash
# Navigate to the Factory Method directory
cd "week1/Design Patterns and Principles/FactoryMethodPatternExample"

# Compile and Run
javac *.java
java FactoryMethodTest
```

### 3. E-commerce Search Function
```bash
# Navigate to the EcommerceSearch directory
cd "week1/Data Structures and Algorithms/EcommerceSearch"

# Compile and Run
javac *.java
java SearchTest
```

### 4. Financial Forecasting recursive tool
```bash
# Navigate to the FinancialForecasting directory
cd "week1/Data Structures and Algorithms/FinancialForecasting"

# Compile and Run
javac *.java
java ForecastingTest
```
