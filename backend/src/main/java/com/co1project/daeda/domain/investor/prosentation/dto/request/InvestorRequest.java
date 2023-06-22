package com.co1project.daeda.domain.investor.prosentation.dto.request;

import com.co1project.daeda.domain.investor.domain.Investor;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InvestorRequest {
    private String title;

    private String totalPrice;

    private String sumPrice;

    private int progress;

    private String introduction;

    public Investor toEntity() {
        return Investor.builder()
                .title(title)
                .totalPrice(totalPrice)
                .sumPrice(sumPrice)
                .introduction(introduction)
                .build();
    }
}
