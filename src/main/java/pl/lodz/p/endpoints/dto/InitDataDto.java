package pl.lodz.p.endpoints.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
public class InitDataDto {
    private String username;
    private String firstname;
    private String lastname;
    private String role;
}
