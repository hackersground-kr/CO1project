package com.co1project.daeda.domain.user.exception;

import com.co1project.daeda.global.exception.CustomException;
import org.springframework.http.HttpStatus;

public class UserIdNotFoundAndPasswordNotFoundException extends CustomException {
    public static final CustomException EXCEPTION = new UserIdNotFoundAndPasswordNotFoundException();

    private UserIdNotFoundAndPasswordNotFoundException() {
        super(HttpStatus.BAD_REQUEST, "해당 아이디와 비밀번호가 존재하지 않습니다.");
    }
}
