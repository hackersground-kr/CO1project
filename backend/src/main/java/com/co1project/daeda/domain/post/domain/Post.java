package com.co1project.daeda.domain.post.domain;

import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.global.jpa.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "post")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post extends BaseTimeEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    private String title;

    private String body;

    @ManyToOne
    private User user;

    public void injectUser(User user) {
        this.user = user;
    }

    @Builder
    public Post(String title, String body) {
        this.title = title;
        this.body = body;
    }
}
