package eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaDiscoveryServerApplication {
    public static void main(String[] args) {
        System.out.println("=== Starting Eureka Discovery Server ===");
        SpringApplication.run(EurekaDiscoveryServerApplication.class, args);
        System.out.println("========================================");
    }
}
