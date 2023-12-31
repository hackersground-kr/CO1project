package com.co1project.daeda.domain.user.exception;

import com.co1project.daeda.global.exception.CustomException;
import org.springframework.http.HttpStatus;

public class UserNicknameExistsException extends CustomException {
    public static final CustomException EXCEPTION = new UserNicknameExistsException();

    private UserNicknameExistsException() {
        super(HttpStatus.BAD_REQUEST, "해당 닉네임은 이미 존재합니다.");
    }
}
