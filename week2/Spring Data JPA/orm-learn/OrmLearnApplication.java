import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {
    public static void main(String[] args) {
        System.out.println("=== Starting OrmLearn Application ===");
        SpringApplication.run(OrmLearnApplication.class, args);
        System.out.println("=====================================");
    }

    @Bean
    public CommandLineRunner demo(CountryService countryService) {
        return args -> {
            System.out.println("\n--- Fetching All Countries ---");
            List<Country> countries = countryService.getAllCountries();
            for (Country country : countries) {
                System.out.println(country);
            }
            System.out.println("------------------------------\n");
        };
    }
}
