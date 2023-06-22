package com.co1project.daeda.domain.post.domain;

import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.global.jpa.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Comment extends BaseTimeEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    private String body;

    @ManyToOne
    private User user;

    @ManyToOne
    private Post post;

    public void injectUser(User user) {
        this.user = user;
    }

    public void injectPost(Post post) {
        this.post = post;
    }

    @Builder
    public Comment(String body) {
        this.body = body;
    }
}
