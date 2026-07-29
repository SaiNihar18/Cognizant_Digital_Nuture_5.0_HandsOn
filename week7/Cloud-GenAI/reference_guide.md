# Cloud Deployment Topologies & GenAI Reference

This reference guide documents cloud hosting configurations and generative AI prompt structures.

---

## 1. Cloud Deployment Topologies

### AWS Microservices Architecture
* **Frontend SPA Hosting**: The React build files are stored in an **Amazon S3** bucket and served globally via **Amazon CloudFront** CDN with TLS certificates from AWS Certificate Manager (ACM).
* **Container Orchestration**: The microservices (`account-service`, `loan-service`, and `api-gateway`) are deployed as tasks on **Amazon ECS** using **AWS Fargate** serverless compute.
* **Service Discovery**: **AWS Cloud Map** handles dynamic service registrations, replacing the need for a separate Eureka Server.
* **Database Layer**: **Amazon Aurora PostgreSQL** (serverless) runs in a private subnet, utilizing AWS Secrets Manager for secret rotations.

### Azure Enterprise Architecture
* **Frontend SPA Hosting**: Served using **Azure Static Web Apps** with integrated CDN caching.
* **Container Orchestration**: Containers run inside **Azure Container Apps** (ACA) with integrated KEDA autoscalers.
* **Service Registry**: ACA includes built-in service registry solutions, allowing direct inter-service communications using Dapr.
* **Database Layer**: Hosted on **Azure Database for PostgreSQL** flexible server.

---

## 2. Generative AI Prompting Patterns

### Code Generation Prompt Template
```text
System: Act as an expert Java Spring Boot developer. Produce clean, compile-safe code.
Context: We have a microservice mapping accounts with Entity properties.
Task: Write a controller mapping GET endpoints using JPA Pageable inputs.
Constraint: No comments. No imports from deprecated libraries.
```

### Refactoring & Optimization Pattern
```text
System: Act as a senior systems architect.
Task: Analyze the attached Java code for N+1 query problems and thread safety.
Output: Show a comparative diff outlining the resolved code blocks.
```
