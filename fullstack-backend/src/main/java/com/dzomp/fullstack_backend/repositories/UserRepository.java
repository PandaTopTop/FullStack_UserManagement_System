package com.dzomp.fullstack_backend.repositories;

import com.dzomp.fullstack_backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends JpaRepository<User,Long> {
}
