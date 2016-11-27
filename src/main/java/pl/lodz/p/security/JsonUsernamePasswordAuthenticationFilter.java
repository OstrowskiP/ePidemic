package pl.lodz.p.security;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;


/**
 * Filtr uwierzytelniający użytkownika na podstawie loginu i hasła przekazanego w obiekcie JSON.
 */
@Slf4j
@RequiredArgsConstructor
public class JsonUsernamePasswordAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    /**
     * Nazwa pola w obiekcie JSON z nazwą użytkownika.
     */
    private final String usernameJsonPropertyName;

    /**
     * Nazwa pola w obiekcie JSON z hasłem użytkownika.
     */
    private final String passwordJsonPropertyName;


    @Override
    public Authentication attemptAuthentication(final HttpServletRequest request, final HttpServletResponse response)
            throws AuthenticationException {
        log.debug("attemptAuthentication");
        // Sprawdzenie czy metoda żądania to POST:
        if (!request.getMethod().equals(RequestMethod.POST.name())) {
            throw new AuthenticationServiceException("Authentication method not supported: " + request.getMethod());
        }

        // Konwersja zawartości żądania na obiekt JSON:
        JsonNode jsonCredentails = getJsonCredentials(request);

        // Utworzenie nowego tokenu na podstawie username i password z żądania:
        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(
                jsonCredentails.get(usernameJsonPropertyName).asText(), jsonCredentails.get(passwordJsonPropertyName).asText());

        // Poinformuj podklasy o szczegółach:
        setDetails(request, authRequest);

        // Wywołanie AuthenticationManager'a:
        return getAuthenticationManager().authenticate(authRequest);
    }

    /**
     * Konwertuje zawartość żądania HTTP na obiekt JSON.
     *
     * @param request request HTTP.
     *
     * @return Zawartość żądania w postaci obiektu JSON.
     */
    private JsonNode getJsonCredentials(final HttpServletRequest request) {
        StringBuilder stringBuilder = new StringBuilder();

        // Odczyt zawartości (content) zapytania HTTP:
        try {
            BufferedReader reader = request.getReader();
            String line;
            while ((line = reader.readLine()) != null) {
                stringBuilder.append(line);
            }
        }
        catch (final IOException ex) {
            log.error("getJsonCredentials|Błąd odczytu zawartości zapytania HTTP");
        }

        ObjectMapper mapper = new ObjectMapper();
        try {
            return mapper.readTree(stringBuilder.toString());
        }
        catch (final IOException e) {
            log.error("getJsonCredentials|Błąd konwersji zawartości zapytania HTTP do JsonNode");
        }
        return null;
    }

}