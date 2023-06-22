package com.co1project.daeda.domain.mentoring.exception;

import com.co1project.daeda.global.exception.CustomException;
import org.springframework.http.HttpStatus;

public class MentoringNotFoundException extends CustomException {
    public static final CustomException EXCEPTION = new MentoringNotFoundException();

    private MentoringNotFoundException() {
        super(HttpStatus.NOT_FOUND, "해당 멘토링이 존재않습니다.");
    }
}
