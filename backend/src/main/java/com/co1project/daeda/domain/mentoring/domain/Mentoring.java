package com.co1project.daeda.domain.mentoring.domain;

import com.co1project.daeda.domain.user.domain.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Mentoring {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mentoringId;

    private String annualSales;

    private String price;

    private String job;

    private String Introduction;

    @ManyToOne
    private User user;

    public void injectUser(User user) {
        this.user = user;
    }

    @Builder
    public Mentoring(String annualSales, String price, String job, String introduction) {
        this.annualSales = annualSales;
        this.price = price;
        this.job = job;
        Introduction = introduction;
    }
}
