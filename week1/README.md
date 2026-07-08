# Week 1: Java FSE Hands-On Exercises

This folder contains the implementations for the mandatory hands-on exercises for the **Design Patterns and Principles** module. These implementations focus on clean, fundamental Java code to facilitate learning and core understanding.

---

## 1. Design Patterns and Principles

### Exercise 1: Singleton Pattern (`SingletonPatternExample`)

#### Scenario & Objective
You need to ensure that a logging utility class in your application has only one instance throughout the application lifecycle to guarantee consistent logging behavior.

#### Key Design Decisions
- **Private Constructor**: Prevents instantiation of the class from outside the `Logger` class.
- **Private Static Volatile Instance**: Holds the single shared reference. The `volatile` keyword prevents memory write re-ordering issues and ensures changes are immediately visible to all threads.
- **Double-Checked Locking**: Thread-safe lazy-initialization inside the `getInstance()` method. It synchronizes only on the first instantiation attempt, avoiding high synchronization overhead on subsequent calls.

#### Package & Classes
- **`com.example.singleton`**
  - `Logger`: The Singleton class managing the logging instance.
  - `SingletonTest`: Client/Test class showing that multiple variables retrieve the same object reference, and verifying logging works.

---

### Exercise 2: Factory Method Pattern (`FactoryMethodPatternExample`)

#### Scenario & Objective
You are developing a document management system that needs to create different types of documents (e.g., Word, PDF, Excel). The system must be decoupled from the concrete classes of documents it instantiates, allowing new document types to be added easily.

#### Key Design Decisions
- **Decoupled Architecture**: The client interacts with the general `Document` interface and `DocumentFactory` abstract creator rather than concrete implementations.
- **Polymorphism / Factory Method**: Concrete creator classes (`WordDocumentFactory`, `PdfDocumentFactory`, `ExcelDocumentFactory`) override `createDocument()` to return their respective concrete product instances.

#### Package & Classes
- **`com.example.factory`**
  - `Document`: Product interface with standard operations (`open()`, `save()`, `close()`).
  - `WordDocument`, `PdfDocument`, `ExcelDocument`: Concrete Products implementing `Document`.
  - `DocumentFactory`: Abstract Creator defining `createDocument()`.
  - `WordDocumentFactory`, `PdfDocumentFactory`, `ExcelDocumentFactory`: Concrete Creators implementing the factory method.
  - `FactoryMethodTest`: Client/Test class to verify operations on each document type via factories.

---

## How to Compile and Run

To compile and run these exercises, make sure you have the Java Development Kit (JDK) installed (version 17 or higher is recommended; verified on JDK 26).

### 1. Singleton Pattern Example
```bash
# Navigate to the Singleton src folder
cd "week1/Design Patterns and Principles/SingletonPatternExample/src"

# Compile all classes in the package
javac com/example/singleton/*.java

# Run the test class
java com.example.singleton.SingletonTest
```

### 2. Factory Method Pattern Example
```bash
# Navigate to the Factory Method src folder
cd "week1/Design Patterns and Principles/FactoryMethodPatternExample/src"

# Compile all classes in the package
javac com/example/factory/*.java

# Run the test class
java com.example.factory.FactoryMethodTest
```
