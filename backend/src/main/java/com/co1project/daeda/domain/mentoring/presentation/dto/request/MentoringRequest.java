package com.co1project.daeda.domain.mentoring.presentation.dto.request;

import com.co1project.daeda.domain.mentoring.domain.Mentoring;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MentoringRequest {
    private String annualSales;

    private String price;

    private String job;

    private String Introduction;

    public Mentoring toEntity() {
        return Mentoring.builder()
                .annualSales(annualSales)
                .price(price)
                .job(job)
                .introduction(getIntroduction())
                .build();
    }
}
