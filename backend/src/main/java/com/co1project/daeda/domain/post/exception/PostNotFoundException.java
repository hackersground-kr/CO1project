package com.co1project.daeda.domain.post.exception;

import com.co1project.daeda.global.exception.CustomException;
import org.springframework.http.HttpStatus;

public class PostNotFoundException extends CustomException {
    public static final CustomException EXCEPTION = new PostNotFoundException();

    private PostNotFoundException() {
        super(HttpStatus.NOT_FOUND, "해당 게시글이 존재하지 않습니다.");
    }
}
