package pl.lodz.p.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import pl.lodz.p.dao.UserDao;
import pl.lodz.p.model.User;

import java.util.Collection;
import java.util.HashSet;


public class LoginUserDetailsService implements UserDetailsService {

    @Autowired
    UserDao userDao;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {

        User ae = userDao.findByUsername(s);

        if (ae == null) {
            throw new UsernameNotFoundException("Uzytkownik o loginie: " + s + " nie istnieje w bazie");
        }

        Collection<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(ae.getRole().getName()));

        return new AppUserDetails(ae.getUsername(), ae.getPassword(), ae.isActive(), true, true, true, authorities, ae.getName(), ae.getSurname());
    }
}
