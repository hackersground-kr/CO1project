package com.co1project.daeda.global.interceptor;

import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.global.annotation.CheckToken;
import com.co1project.daeda.global.exception.global.TokenNotFoundException;
import com.co1project.daeda.global.lib.jwt.JwtProvider;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
@RequiredArgsConstructor
public class AuthInterceptor implements HandlerInterceptor {

    private final JwtProvider jwt;

    @Override
    public boolean preHandle(HttpServletRequest request,
                             HttpServletResponse response, Object handler) {

        if (!(handler instanceof HandlerMethod)) {
            return true;
        }

        HandlerMethod handlerMethod = (HandlerMethod) handler;
        if (!handlerMethod.getMethod().isAnnotationPresent(CheckToken.class)) {
            return true;
        }

        String token = jwt.extract(request, "Bearer");

        if (token == null || token.length() == 0) {
            throw TokenNotFoundException.EXCEPTION;
        }

        User user = jwt.validateToken(token);
        request.setAttribute("user", user.getUserId());

        return true;
    }

}