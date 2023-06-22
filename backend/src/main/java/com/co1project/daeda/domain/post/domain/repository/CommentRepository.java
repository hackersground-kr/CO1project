package com.co1project.daeda.domain.post.domain.repository;

import com.co1project.daeda.domain.post.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findAllByPostPostId(Long postId);
}
