package com.co1project.daeda.domain.mentoring.service;

import com.co1project.daeda.domain.mentoring.domain.Mentoring;
import com.co1project.daeda.domain.mentoring.domain.repository.MentoringRepository;
import com.co1project.daeda.domain.mentoring.exception.MentoringNotFoundException;
import com.co1project.daeda.domain.mentoring.presentation.dto.request.MentoringRequest;
import com.co1project.daeda.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MentoringService {
    private final MentoringRepository mentoringRepository;

    public Mentoring create(MentoringRequest request, User user) {
        Mentoring mentoring = request.toEntity();
        mentoring.injectUser(user);

        return mentoringRepository.save(mentoring);
    }

    public List<Mentoring> findMentoringAll() {
        return mentoringRepository.findAll();
    }

    public Mentoring findMentoringById(Long mentoringId) {
        Mentoring mentoring = mentoringRepository.findByMentoringId(mentoringId)
                .orElseThrow(() -> MentoringNotFoundException.EXCEPTION);

        return mentoring;
    }
}
