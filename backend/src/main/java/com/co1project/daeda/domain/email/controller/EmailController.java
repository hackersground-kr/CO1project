package com.co1project.daeda.domain.email.controller;

import com.co1project.daeda.domain.email.controller.dto.EmailAuthRequestDto;
import com.co1project.daeda.domain.email.controller.dto.EmailCodeRequest;
import com.co1project.daeda.domain.email.service.EmailService;
import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping("/api/email")
@RequiredArgsConstructor
public class EmailController {

    private final EmailService emailService;

    @PostMapping("/send")
    public String mailConfirm(@RequestBody EmailAuthRequestDto emailDto) throws MessagingException, UnsupportedEncodingException {
        return emailService.sendEmail(emailDto.getEmail());
    }

    @PostMapping("/check")
    public boolean emailCheck(@RequestBody EmailCodeRequest request) {
        return emailService.checks(request.getCode());
    }

}
