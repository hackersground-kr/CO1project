package com.co1project.daeda.domain.post.presentation.response;

import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.global.jpa.Chrono;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CommentResponse {
    private String body;

    private User user;

    private String createdAt;

    private String modifiedAt;
    @Builder
    public CommentResponse(String body, User user, LocalDateTime createDate, LocalDateTime modifiedDate) {
        this.body = body;
        this.user = user;
        this.createdAt = Chrono.timesAgo(createDate);
        this.modifiedAt = Chrono.timesAgo(modifiedDate);
    }
}
