package com.co1project.daeda.domain.post.presentation.response;

import com.co1project.daeda.domain.post.domain.Post;
import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.global.jpa.Chrono;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostResponse {
    private Long postId;

    private String title;

    private String body;

    private User user;

    private String createDate;

    private String modifiedDate;

    public PostResponse(Post post) {
        this.postId = post.getPostId();
        this.title = post.getTitle();
        this.body = post.getBody();
        this.user = post.getUser();
        this.createDate = Chrono.timesAgo(post.getCreateDate());
        this.modifiedDate = Chrono.timesAgo(post.getModifiedDate());
    }
}
