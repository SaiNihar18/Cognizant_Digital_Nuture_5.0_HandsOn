package account;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AccountServiceApplication {
    public static void main(String[] args) {
        System.out.println("=== Starting Account Microservice ===");
        SpringApplication.run(AccountServiceApplication.class, args);
        System.out.println("=====================================");
    }
}
