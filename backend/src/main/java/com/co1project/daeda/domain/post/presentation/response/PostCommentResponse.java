package com.co1project.daeda.domain.post.presentation.response;

import com.co1project.daeda.domain.post.domain.Comment;
import com.co1project.daeda.domain.post.domain.Post;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostCommentResponse {
    private Post post;
    private List<CommentResponse> comments;

    public PostCommentResponse(Post post, List<CommentResponse> comments) {
        this.post = post;
        this.comments = comments;
    }
}
