# Week 2: Spring Framework & Data JPA

This folder contains the complete implementations for the mandatory hands-on exercises of Week 2, covering **Spring Core and Maven** and **Spring Data JPA**.

All implementations use flat layouts (no nested package subdirectories) and contain no comments.

---

## 1. Spring Core and Maven (`Spring Core and Maven/LibraryManagement`)

### Exercise 1: Configuring a Basic Spring Application & Exercise 2: Dependency Injection & Exercise 4: Maven Setup
- **pom.xml**: Configures a flat Maven project structure using `<sourceDirectory>.</sourceDirectory>`. Includes Spring Context dependencies.
- **BookRepository.java**: A simple repository fetching book details.
- **BookService.java**: A service class that holds a reference to `BookRepository` and has a setter injection method.
- **applicationContext.xml**: XML configuration declaring beans and wiring them together using Dependency Injection.
- **LibraryManagementApplication.java**: Main execution class loading the Spring XML context and calling the service.

---

## 2. Spring Data JPA (`Spring Data JPA/orm-learn`)

### Spring Data JPA - Quick Example
- **pom.xml**: Flat Maven configuration using `<sourceDirectory>.</sourceDirectory>` and Spring Boot Starter JPA and H2 database.
- **Country.java**: JPA entity mapped to the `country` table.
- **CountryRepository.java**: Repository interface extending `JpaRepository`.
- **CountryService.java**: Service class autowiring the repository and retrieving data inside a `@Transactional` block.
- **OrmLearnApplication.java**: Spring Boot main class containing a `CommandLineRunner` to fetch and display countries.
- **application.properties**: Database properties configured for the H2 in-memory database.
- **data.sql**: SQL script to populate country table data automatically on startup.
- **Difference.md**: Conceptual comparison outlining the difference between JPA, Hibernate, and Spring Data JPA.

---

## How to Compile and Run

To run the Maven builds without globally installing Maven, a helper script `download_maven.py` is included to fetch Apache Maven locally into `week2/maven`.

### Step 0: Download Local Maven
Run the following from the workspace root:
```bash
python week2/download_maven.py
```

### 1. Spring Core Example (LibraryManagement)
```bash
# Navigate to the LibraryManagement folder
cd "week2/Spring Core and Maven/LibraryManagement"

# Clean and Compile using local Maven
../../maven/apache-maven-3.9.6/bin/mvn clean compile

# Run the Application
../../maven/apache-maven-3.9.6/bin/mvn exec:java -Dexec.mainClass="LibraryManagementApplication"
```

### 2. Spring Data JPA Example (orm-learn)
```bash
# Navigate to the orm-learn folder
cd "week2/Spring Data JPA/orm-learn"

# Clean and Compile using local Maven
../../maven/apache-maven-3.9.6/bin/mvn clean compile

# Run the Spring Boot Application
../../maven/apache-maven-3.9.6/bin/mvn spring-boot:run
```
