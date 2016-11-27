package pl.lodz.p.endpoints;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import pl.lodz.p.endpoints.dto.UserCredentialsDto;

@Slf4j
@RestController
public class AuthEndpoint {

    @RequestMapping(value = "/api/auth/login",
            produces = {"application/json"},
            method = RequestMethod.POST)
    @ResponseBody
    public void login(@RequestBody UserCredentialsDto credentials) {
        log.debug("Proba uwierzytelnienia uzytkownika: " + credentials.getUsername());
    }

    @RequestMapping(value = "/api/auth/logout",
            produces = {"application/json"},
            method = RequestMethod.POST)
    @ResponseBody
    public void logout() {
        log.debug("Wylogowano");
    }
}