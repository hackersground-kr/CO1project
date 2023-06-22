package com.co1project.daeda.domain.post.presentation.request;

import com.co1project.daeda.domain.post.domain.Post;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostRegisterRequest {
    private String title;

    private String body;

    public Post toEntity() {
        return Post.builder()
                .title(title)
                .body(body)
                .build();
    }
}
