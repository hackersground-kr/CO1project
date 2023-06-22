package com.co1project.daeda.domain.mentoring.domain.repository;

import com.co1project.daeda.domain.mentoring.domain.Mentoring;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MentoringRepository extends JpaRepository<Mentoring, Long> {
    Optional<Mentoring> findByMentoringId(Long mentoringId);

}
