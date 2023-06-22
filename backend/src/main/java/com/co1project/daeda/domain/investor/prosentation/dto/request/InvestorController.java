package com.co1project.daeda.domain.investor.prosentation.dto.request;

import com.co1project.daeda.domain.investor.domain.Investor;
import com.co1project.daeda.domain.investor.service.InvestorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/investor")
@RequiredArgsConstructor
public class InvestorController {
    private final InvestorService investorService;

    @PostMapping("/create")
    public Investor create(@RequestBody InvestorRequest request) {
        return investorService.create(request);
    }

    @GetMapping
    public List<Investor> findByAll() {
        return investorService.findByAll();
    }

    @GetMapping("/{investorId}")
    public Investor findById(@PathVariable Long investorId) {
        return investorService.findByID(investorId);
    }
}
