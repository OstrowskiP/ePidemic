package pl.lodz.p.endpoints.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by Arek on 2016-11-17.
 */
@Getter
@Setter
public class UserCredentialsDto {

    private String username;

    private String password;
}
