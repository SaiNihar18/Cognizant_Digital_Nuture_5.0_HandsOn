# Week 4: Spring Boot Microservices & Spring Cloud Gateway

This directory contains completed hands-on exercises for Week 4, focusing on building a microservices architecture with a service discovery registry and an API gateway using Spring Cloud Netflix Eureka and Spring Cloud Gateway.

---

## Architecture Components

### 1. eureka-server (Registry)
- **Port**: `8761`
- **Details**: Built with `spring-cloud-starter-netflix-eureka-server` to act as the registry discovery server. It allows client microservices to self-register and lookup other available components.

### 2. account-service (Microservice)
- **Port**: `8081`
- **Details**: Exposes REST endpoints `/accounts` and `/accounts/{id}` using mock objects. Auto-registers with Eureka on start.

### 3. loan-service (Microservice)
- **Port**: `8083`
- **Details**: Exposes REST endpoints `/loans` and `/loans/{id}` using mock objects. Auto-registers with Eureka on start.

### 4. api-gateway (Spring Cloud Gateway)
- **Port**: `8085`
- **Details**: Serves as the single entry point.
  - Custom `GlobalLoggingFilter` logging incoming request paths.
  - Configures route mapping matching `/accounts/**` and `/loans/**` to target microservices.

---

## Build and Start

1. Start Eureka Discovery Server:
   ```bash
   cd eureka-server
   mvn clean compile
   mvn spring-boot:run
   ```
2. Start Account Service & Loan Service:
   ```bash
   cd ../account-service
   mvn spring-boot:run
   cd ../loan-service
   mvn spring-boot:run
   ```
3. Start API Gateway:
   ```bash
   cd ../api-gateway
   mvn spring-boot:run
   ```

---

## Verification

Query the services through the API Gateway:
- Account Service: `curl http://localhost:8085/accounts`
- Loan Service: `curl http://localhost:8085/loans`
- You will see the request log messages in the console output of `api-gateway`.
