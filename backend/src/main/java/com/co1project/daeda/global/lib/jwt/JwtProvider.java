package com.co1project.daeda.global.lib.jwt;

import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.domain.user.domain.repository.UserRepository;
import com.co1project.daeda.global.exception.global.InvalidTokenException;
import com.co1project.daeda.global.properties.JwtProperties;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
@RequiredArgsConstructor
public class JwtProvider {
    private final UserRepository userRepository;
    private final JwtProperties jwtProperties;
    private static final SignatureAlgorithm SIGNATURE_ALGORITHM = SignatureAlgorithm.HS256;

    public String createToken(User user, TokenType type) {
        String securityKey = "";

        Date nowData = new Date();
        Calendar expiredDate = Calendar.getInstance();
        expiredDate.setTime(nowData);

        if (type.equals(TokenType.ACCESS)) {
            expiredDate.add(Calendar.DATE, 7);
            securityKey = jwtProperties.getAccessKey();
        }

        if (type.equals(TokenType.REFRESH)) {
            expiredDate.add(Calendar.DATE, 30);
            securityKey = jwtProperties.getRefreshKey();
        }

        Map<String, Object> header = new HashMap<>();
        header.put("typ", "JWT");
        header.put("alg", SIGNATURE_ALGORITHM);

        Map<String, Object> payload = new HashMap<>();
        payload.put("userId", user.getUserId());

        JwtBuilder jwtBuilder = Jwts.builder()
                .setHeaderParams(header)
                .setClaims(payload)
                .setExpiration(expiredDate.getTime())
                .signWith(SIGNATURE_ALGORITHM, securityKey);

        return jwtBuilder.compact();
    }

    public User validateToken(String token) {

        Claims claims = Jwts.parser().setSigningKey(jwtProperties.getAccessKey()).parseClaimsJws(token).getBody();

        return userRepository.findById(claims.get("userId", Long.class))
                .orElseThrow(() -> InvalidTokenException.EXCEPTION);
    }

    public String extract(HttpServletRequest request, String type) {
        Enumeration<String> headers = request.getHeaders("Authorization");

        while (headers.hasMoreElements()) {
            String value = headers.nextElement();
            if (value.startsWith(type)) {
                return value.substring(type.length()).trim();
            }
        }

        return null;
    }
}
