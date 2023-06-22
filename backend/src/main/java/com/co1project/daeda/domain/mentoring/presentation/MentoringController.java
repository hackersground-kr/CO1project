package com.co1project.daeda.domain.mentoring.presentation;

import com.co1project.daeda.domain.mentoring.domain.Mentoring;
import com.co1project.daeda.domain.mentoring.presentation.dto.request.MentoringRequest;
import com.co1project.daeda.domain.mentoring.service.MentoringService;
import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.global.annotation.CheckToken;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mentoring")
@RequiredArgsConstructor
public class MentoringController {
    private final MentoringService mentoringService;

    @CheckToken
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Mentoring create(@RequestBody MentoringRequest request, @RequestAttribute User user) {
        return mentoringService.create(request, user);
    }

    @GetMapping("/all")
    public List<Mentoring> findByAll() {
        return mentoringService.findMentoringAll();
    }

    @GetMapping("/{mentoringId}")
    public Mentoring findByMentoringId(@PathVariable Long mentoringId) {
        return mentoringService.findMentoringById(mentoringId);
    }
}
