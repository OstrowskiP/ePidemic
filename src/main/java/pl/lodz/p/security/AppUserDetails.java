package pl.lodz.p.security;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Objects;

@Getter
public class AppUserDetails implements UserDetails {

    /**
     * Nazwa użytkownika.
     */
    private String username;

    /**
     * Hasło.
     */
    private String password;

    /**
     * Czy użytkownik odblokowany.
     */
    private boolean isEnabled;

    /**
     * Czy konto nie wygasło.
     */
    private boolean isAccountNonExpired;

    /**
     * Czy hasło nie wygasło.
     */
    private boolean isCredentialsNonExpired;

    /**
     * Czy konto nie jest zablokowane.
     */
    private boolean isAccountNonLocked;

    /**
     * Uprawnienia użytkownika.
     */
    private final Collection<GrantedAuthority> authorities;

    /**
     * Imie użytkownika.
     */
    String firstName;

    /**
     * Nazwisko użytkownika.
     */
    String lastName;


    AppUserDetails(final String username, final String password, final boolean enabled, final boolean accountNonExpired,
                   final boolean credentialsNonExpired, final boolean accountNonLocked, final Collection<GrantedAuthority> authorities,
                   final String firstName, final String lastName) {
        Objects.requireNonNull(username, "Nie podano obiektu username.");
        Objects.requireNonNull(password, "Nie podano obiektu password.");
        Objects.requireNonNull(authorities, "Nie podano obiektu authorities.");

        this.username = username;
        this.password = password;
        this.isEnabled = enabled;
        this.isAccountNonExpired = accountNonExpired;
        this.isAccountNonLocked = accountNonLocked;
        this.isCredentialsNonExpired = credentialsNonExpired;
        this.authorities = authorities;
        this.firstName = firstName;
        this.lastName = lastName;
    }


}
