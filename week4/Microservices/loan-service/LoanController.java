package loan;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
public class LoanController {
    private final List<Loan> loans = Arrays.asList(
        new Loan("L101", "Home Loan", 150000.0),
        new Loan("L102", "Car Loan", 30000.0)
    );

    @GetMapping("/loans")
    public List<Loan> getLoans() {
        return loans;
    }

    @GetMapping("/loans/{id}")
    public Loan getLoanById(@PathVariable String id) {
        return loans.stream()
            .filter(l -> l.getLoanId().equalsIgnoreCase(id))
            .findFirst()
            .orElse(null);
    }
}
