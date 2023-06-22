package com.co1project.daeda.domain.investor.exception;

import com.co1project.daeda.domain.post.exception.PostNotFoundException;
import com.co1project.daeda.global.exception.CustomException;
import org.springframework.http.HttpStatus;

public class InvestorNotFoundException extends CustomException {
    public static final CustomException EXCEPTION = new InvestorNotFoundException();

    private InvestorNotFoundException() {
        super(HttpStatus.NOT_FOUND, "해당 투자회사가 존재하지 않습니다.");
    }
}
