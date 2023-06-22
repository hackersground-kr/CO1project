package com.co1project.daeda.domain.post.service;

import com.co1project.daeda.domain.post.domain.Comment;
import com.co1project.daeda.domain.post.domain.Post;
import com.co1project.daeda.domain.post.domain.repository.CommentRepository;
import com.co1project.daeda.domain.post.domain.repository.PostRepository;
import com.co1project.daeda.domain.post.exception.PostNotFoundException;
import com.co1project.daeda.domain.post.presentation.request.CommentRequest;
import com.co1project.daeda.domain.post.presentation.request.PostRegisterRequest;
import com.co1project.daeda.domain.post.presentation.response.CommentResponse;
import com.co1project.daeda.domain.post.presentation.response.PostCommentResponse;
import com.co1project.daeda.domain.post.presentation.response.PostListResponse;
import com.co1project.daeda.domain.post.presentation.response.PostResponse;
import com.co1project.daeda.domain.user.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    public Post register(PostRegisterRequest request, User user) {
        Post post = request.toEntity();
        post.injectUser(user);

        postRepository.save(post);
        return post;
    }

    public Comment create(CommentRequest request, Long postId, User user) {
        Comment comment = Comment.builder()
                .body(request.getBody())
                .build();

        Post post = postRepository.findByPostId(postId)
                .orElseThrow(() -> PostNotFoundException.EXCEPTION);

        comment.injectPost(post);
        comment.injectUser(user);

        commentRepository.save(comment);

        return comment;
    }

    public PostListResponse findPostByAll() {
        Pageable pageable = PageRequest.of(0, 10, Sort.Direction.DESC, "postId");

        Page<Post> responses = postRepository.findAll(pageable);

        List<PostResponse> responseList = responses.getContent().stream()
                .map(post -> new PostResponse(post))
                .collect(Collectors.toList());

        return new PostListResponse(responseList);
    }

    public PostCommentResponse findPostByPostId(Long postId) {
        Post post = postRepository.findByPostId(postId)
                .orElseThrow(() -> PostNotFoundException.EXCEPTION);

        List<Comment> comments =  commentRepository.findAllByPostPostId(postId);

        List<CommentResponse> commentResponses = comments.stream()
                .map(comment -> new CommentResponse(comment.getBody(), comment.getUser(), comment.getCreateDate(), comment.getModifiedDate()))
                .collect(Collectors.toList());

        return new PostCommentResponse(post, commentResponses);
    }
}
