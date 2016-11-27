package pl.lodz.p;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@EnableAutoConfiguration
@EntityScan(basePackages = {"pl.lodz.p.model"})
@ImportResource("classpath:spring/applicationContext.xml")
public class Config {
}
