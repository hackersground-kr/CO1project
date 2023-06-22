package com.co1project.daeda.domain.post.presentation;

import com.co1project.daeda.domain.post.domain.Comment;
import com.co1project.daeda.domain.post.domain.Post;
import com.co1project.daeda.domain.post.presentation.request.CommentRequest;
import com.co1project.daeda.domain.post.presentation.request.PostRegisterRequest;
import com.co1project.daeda.domain.post.presentation.response.PostCommentResponse;
import com.co1project.daeda.domain.post.presentation.response.PostListResponse;
import com.co1project.daeda.domain.post.service.PostService;
import com.co1project.daeda.domain.user.domain.User;
import com.co1project.daeda.global.annotation.CheckToken;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/post")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @CheckToken
    @PostMapping("/register")
    @ResponseStatus(HttpStatus.OK)
    public Post register(@RequestBody PostRegisterRequest request, @RequestAttribute User user) {
        return postService.register(request, user);
    }

    @CheckToken
    @PostMapping("/comment/register/{postId}")
    public Comment register(@RequestBody CommentRequest request, @PathVariable Long postId, @RequestAttribute User user) {
        return postService.create(request, postId, user);
    }

    @GetMapping
    public PostListResponse findPostByAll() {
        return postService.findPostByAll();
    }

    @GetMapping("/{postId}")
    public PostCommentResponse findPostByPostId(@PathVariable Long postId) {
        return postService.findPostByPostId(postId);
    }
}
