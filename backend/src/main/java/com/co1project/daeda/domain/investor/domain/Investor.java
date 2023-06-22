package com.co1project.daeda.domain.investor.domain;

import com.co1project.daeda.global.jpa.BaseTimeEntity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Investor extends BaseTimeEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long investorId;

    private String title;

    private String totalPrice;

    private String sumPrice;

    private String introduction;


    @Builder
    public Investor(String title, String totalPrice, String sumPrice, String introduction) {
        this.title = title;
        this.totalPrice = totalPrice;
        this.sumPrice = sumPrice;
        this.introduction = introduction;
    }
}
