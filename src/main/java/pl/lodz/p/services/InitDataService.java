package pl.lodz.p.services;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import pl.lodz.p.endpoints.dto.InitDataDto;
import pl.lodz.p.security.AppUserDetails;
import pl.lodz.p.services.api.InitDataServiceApi;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Arek on 2016-11-21.
 */
@Service
public class InitDataService implements InitDataServiceApi {

    @Override
    public InitDataDto getInitDataDto() {
        final AppUserDetails aud = getUserDetails();
        InitDataDto idd = new InitDataDto();
        idd.setUsername(aud.getUsername());
        idd.setFirstname(aud.getFirstName());
        idd.setLastname(aud.getLastName());

        String role = "";
        for (GrantedAuthority s : aud.getAuthorities()) {
            role = s.getAuthority();
            break; // narazie tak dziwnie ale wolnym czasem to zmienie. Dorabiam to na szybko na polecenie Dawida.
        }
        idd.setRole(role);

        return idd;
    }

    private AppUserDetails getUserDetails() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return (AppUserDetails) userDetails;
    }
}
