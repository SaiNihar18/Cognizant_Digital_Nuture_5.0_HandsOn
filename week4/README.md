# Week 4: Spring Cloud Microservices

This directory contains the hands-on implementation of a basic banking microservices system using Spring Boot 3.x and Spring Cloud.

## Modules

* **eureka-server (Port 8761)**: Service discovery registry. Handles client auto-registration and service status.
* **account-service (Port 8081)**: Exposes REST API endpoints `/accounts` and `/accounts/{id}` with static mock datasets.
* **loan-service (Port 8083)**: Exposes REST API endpoints `/loans` and `/loans/{id}` with static mock datasets.
* **api-gateway (Port 8085)**: Spring Cloud Gateway routing incoming requests (`/accounts/**` and `/loans/**`) to their respective registered instances. Contains a custom `GlobalLoggingFilter` to log method, URI, and headers.

---

## Running the Services

Start the modules in this order:

1. **Service Registry (eureka-server)**
   ```bash
   cd eureka-server
   mvn spring-boot:run
   ```

2. **Core Services (account-service & loan-service)**
   ```bash
   cd ../account-service
   mvn spring-boot:run
   
   cd ../loan-service
   mvn spring-boot:run
   ```

3. **API Gateway (api-gateway)**
   ```bash
   cd ../api-gateway
   mvn spring-boot:run
   ```

---

## Verifying Routes

Access the services through the API Gateway:
* Account API: `curl http://localhost:8085/accounts`
* Loan API: `curl http://localhost:8085/loans`

Verify gateway console logs to check request intercepts from `GlobalLoggingFilter`.
