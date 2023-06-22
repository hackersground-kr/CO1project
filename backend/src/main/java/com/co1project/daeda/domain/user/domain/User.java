package com.co1project.daeda.domain.user.domain;

import com.co1project.daeda.domain.user.enums.Type;
import com.co1project.daeda.global.jpa.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table(name = "Uesr")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends BaseTimeEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String id;

    private String password;

    private String nickname;

    private String email;

    private String tel_number;

    private Type type;

    @Builder
    public User(String id, String password, String nickname, String email, String tel_number, Type type) {
        this.id = id;
        this.password = password;
        this.nickname = nickname;
        this.email = email;
        this.tel_number = tel_number;
        this.type = type;
    }
}
