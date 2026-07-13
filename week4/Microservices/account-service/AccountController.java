package account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.Arrays;
import java.util.List;

@RestController
public class AccountController {
    private final List<Account> accounts = Arrays.asList(
        new Account("A101", "Savings", 5000.0),
        new Account("A102", "Checking", 2500.0)
    );

    @GetMapping("/accounts")
    public List<Account> getAccounts() {
        return accounts;
    }

    @GetMapping("/accounts/{id}")
    public Account getAccountById(@PathVariable String id) {
        return accounts.stream()
            .filter(a -> a.getAccountId().equalsIgnoreCase(id))
            .findFirst()
            .orElse(null);
    }
}
