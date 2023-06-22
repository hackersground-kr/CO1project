package com.co1project.daeda.domain.investor.domain.repository;

import com.co1project.daeda.domain.investor.domain.Investor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InvestorRepository extends JpaRepository<Investor, Long> {
    Optional<Investor> findByInvestorId(Long investorId);
}
